import h from '../../h';
import {
    Editor as ReactEditor, EditorState, RichUtils,
    CompositeDecorator,
} from 'draft-js';
import FloatWindow from '../FloatWindow';
import Input from '../Input';
import Middle from '../Middle';
import Button from '../Button';
import View from '../View';
import Hyperlink from '../Hyperlink';
import blockControls from './blockControls';
import inlineControls from './inlineControls';
import styleMap from './styleMap';
import './style.css';
import Container from '../Container';
import Submit from '../Submit';
import { editorStateToHtml } from './convert';
import { Component, } from 'react';

const findLinkEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity();
            return (
                entityKey !== null &&
                contentState.getEntity(entityKey).getType() === 'LINK'
            );
        },
        callback
    );
};
const styles = {
    controlStyle: {
        margin: '0 8px 8px 0',
        cursor: 'pointer',
    },
};

export default class Editor extends Component {
    state = {
        editorState: EditorState.createEmpty(new CompositeDecorator([
            {
                strategy: findLinkEntities,
                component: ({children, contentState, entityKey, }) => {
                    const {href} = contentState.getEntity(entityKey).getData();
                    return h(Hyperlink, { children, href, });
                },
            },
        ])),
        linkInputVisible: !!0,
        href: '',
    };

    handleChange(editorState) {
        this.setState({ editorState, });
    }
    handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.handleChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    handleBlockToggle(style, e) {
        e.preventDefault();
        this.handleChange(RichUtils.toggleBlockType(this.state.editorState, style));
    }
    handleInlineToggle(style, e) {
        e.preventDefault();
        this.handleChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
    }
    focusEditor() {
        this.refs.editor.focus();
    }
    handleLinkChange(e) {
        this.setState({ href: e.target.value });
    }
    confirmLink(e) {
        e.preventDefault();
        let {editorState, href} = this.state;
        const currentContent = editorState.getCurrentContent();
        currentContent.createEntity('LINK', 'IMMUTABLE', { href, });
        const entityKey = currentContent.getLastCreatedEntityKey();
        editorState = EditorState.set(editorState, { currentContent, });
        let selection = editorState.getSelection();
        editorState = RichUtils.toggleLink(editorState, selection, entityKey);
        editorState = EditorState.moveFocusToEnd(editorState);
        this.setState({
            editorState,
            linkInputVisible: !!0,
            href: '',
        }, () => {
            requestAnimationFrame(this.focusEditor);
        });
    }
    promptForLink(e) {
        e.preventDefault();
        const {editorState} = this.state;
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            const contentState = editorState.getCurrentContent();
            const startKey = editorState.getSelection().getStartKey();
            const startOffset = editorState.getSelection().getStartOffset();
            const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
            const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

            let href = '';
            if (linkKey) {
                const linkInstance = contentState.getEntity(linkKey);
                href = linkInstance.getData().href;
            }

            this.setState({
                linkInputVisible: !0,
                href,
            }, () => {
                requestAnimationFrame(this.focusEditor);
            });
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit && this.props.onSubmit({
            title: e.target.elements.title.value,
            text: editorStateToHtml(this.state.editorState),
        });
    }
    render() {
        const {style, } = this.props;
        const {editorState, href, linkInputVisible, } = this.state;
        return h('form', {
            style: {
                backgroundColor: '#fff',
                border: '.8px solid #ccc',
                borderRadius: 5,
                padding: 16,
                flexDirection: 'column',
                ...style,
            },
            onSubmit: this.handleSubmit.bind(this),
            children: [
                h(Container, {
                    style: {
                        justifyContent: 'center',
                        marginBottom: 16,
                    },
                    children: h(Input, { name: 'title' }),
                }),
                h(View, {
                    style: {
                        flexWrap: 'wrap',
                    },
                    children: [
                        ...blockControls.map(({label, style, }) => h(View, {
                            children: label,
                            onMouseDown: this.handleBlockToggle.bind(this, style),
                            style: styles.controlStyle,
                        })),
                        ...inlineControls.map(({label, style}) => h(View, {
                            children: label,
                            onMouseDown: this.handleInlineToggle.bind(this, style),
                            style: styles.controlStyle,
                        })),
                        h(View, {
                            style: styles.controlStyle,
                            onMouseDown: this.promptForLink.bind(this),
                            children: 'Link',
                        }),
                    ],
                }),
                h(FloatWindow, {
                    style: {
                        display: linkInputVisible ? 'flex' : 'none',
                        width: 500,
                        top: 200,
                        alignItems: 'center',
                    },
                    children: [
                        h(Middle, {
                            left: <div>href :</div>,
                            right: h(Input, { text: href, onChange: this.handleLinkChange.bind(this), }),
                            style: { marginBottom: 16, },
                        }),
                        h(View, {
                            children: h(Button, {
                                text: 'Confirm',
                                kind: 'primary',
                                onClick: this.confirmLink.bind(this),
                            }),
                            style: {
                                justifyContent: 'flex-end',
                            }
                        }),
                    ],
                }),
                h('div', {
                    onClick: this.focusEditor.bind(this),
                    children: h(ReactEditor, {
                        editorState,
                        onChange: this.handleChange.bind(this),
                        handleKeyCommand: this.handleKeyCommand.bind(this),
                        ref: 'editor',
                        placeholder: 'Tell a story...',
                        customStyleMap: styleMap,
                    }),
                    className: 'rich-editor',
                }),
                h(Container, {
                    style: {
                        justifyContent: 'flex-end',
                    },
                    children: h(Submit, { kind: 'primary' }),
                }),
            ],
        });
    }
}