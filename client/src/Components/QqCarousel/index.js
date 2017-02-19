import h from '../../h';
import {Component} from 'react';
import Container from '../Container';
import Timeout from 'react-timeout';
import View from '../View';

const height = 604;
@Timeout
export default class QqCarousel extends Component {
    changeable = !0;
    state = {active: 0};

    componentDidMount() {
        setTimeout(this.change.bind(this), 3000);
    }

    change() {
        if (this.changeable) {
            this.setState({active: (this.state.active + 1) % 2});
        }
        setTimeout(this.change.bind(this), 3000);
    }

    disableChange() {
        this.changeable = !!0;
    }

    enableChange() {
        this.changeable = !0;
    }

    handleDotEnter(i) {
        this.disableChange();
        this.setState({active: i});
    }

    render() {
        const {srcs = [],} = this.props;
        const {active,} = this.state;
        return h(Container, {
            style: {
                height,
                position: 'relative',
            },
            onMouseEnter: this.disableChange.bind(this),
            onMouseLeave: this.enableChange.bind(this),
            children: [
                ...srcs.map((src, i) => h(Container, {
                    style: {
                        position: 'absolute',
                        backgroundImage: `url(${src})`,
                        backgroundPosition: 'center',
                        height,
                        opacity: i === active ? 1 : 0,
                        transition: 'opacity 1s',
                        zIndex: -1,
                    },
                })),
                h('div', {
                    style: {
                        textAlign: 'center',
                        position: 'absolute',
                        width: '100%',
                        backgroundImage: `url(${require('./linearbot.png')})`,
                        height: 52,
                        bottom: 0,
                    },
                    children: srcs.map((src, i) => h('span', {
                        style: {
                            cursor: 'pointer',
                            margin: '0 5px',
                            backgroundImage: `url(${i === active ? require('./focus.png') : require('./blur.png')})`,
                            backgroundPosition: 'center',
                            padding: '2px 7px',
                            backgroundRepeat: 'no-repeat',
                        },
                        onMouseEnter: this.handleDotEnter.bind(this, i),
                        onMouseLeave: this.enableChange.bind(this),
                    })),
                })
            ],
        });
    }
}