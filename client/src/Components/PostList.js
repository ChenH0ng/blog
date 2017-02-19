import PostSynopsis from './PostSynopsis';
import EventListener from 'react-event-listener';
import h from '../h';
import View from './View';
import {getScrollTop,} from '../util';
import Responsive from './Responsive';
import {Component} from 'react';

export default class PostList extends Component {
    bottomRange = 50;

    handleScroll() {
        if (window.innerHeight + getScrollTop() >= document.body.scrollHeight - this.bottomRange) {
            const {onRequestMorePosts}=this.props;
            onRequestMorePosts && onRequestMorePosts();
        }
    }

    handlePostClick(i) {
        const {onPostClick,}=this.props;
        onPostClick && onPostClick(i);
    }

    render() {
        const {style, posts = [], onAvatarClick, onNicknameClick,} = this.props;
        const lastPost = posts.length - 1;
        return h(Responsive, {
            sm: {
                width: 540,
            },
            md: {
                width: 660,
            },
            render: ({width}) => h(View, {
                style: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    width,
                    ...style,
                },
                children: [
                    ...posts.map((post, i) => h(PostSynopsis, {
                        post,
                        style: {
                            marginBottom: i === lastPost ? 0 : 8,
                        },
                        onClick: this.handlePostClick.bind(this, i),
                        onAvatarClick, onNicknameClick,
                    })),
                    h(EventListener, {
                        target: document,
                        onScroll: this.handleScroll.bind(this),
                    }),
                ],
            }),
        });
    }
}