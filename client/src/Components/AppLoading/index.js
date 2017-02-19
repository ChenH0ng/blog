import h from '../../h';
import Container from '../Container';
import Image from '../Image';
import {Motion, spring,} from 'react-motion';
import {Component,} from 'react';

export default class AppLoding extends Component {
    state = {isVisible: !0};

    handleRest() {
        this.setState({display: !!0});
    }

    render() {
        const {style, enabled,} = this.props;
        const {isVisible,} = this.state;
        return h(Motion, {
            defaultStyle: {
                opacity: 1,
            },
            style: {
                opacity: spring(enabled ? 1 : 0),
            },
            onRest: this.handleRest.bind(this),
            children: ({opacity}) => h(Container, {
                style: {
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1CE0BD',
                    display: isVisible ? 'flex' : 'none',
                    zIndex: 1050,
                    height: window.innerHeight,
                    opacity,
                    ...style,
                },
                children: h(Image, {
                    src: require('./AppLoding.gif'),
                    style: {
                        width: 500,
                        height: 400,
                    },
                }),
            })
        });
    }
}