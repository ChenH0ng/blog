import h from '../h';
import EventListener from 'react-event-listener';
import {emptyFunction,} from '../util';
import {Component} from 'react';

export default class Responsive extends Component {
    static get resolution() {
        const {offsetWidth,}=document.body;
        if (offsetWidth < 576) {
            return 0;
        }
        else if (offsetWidth >= 576 && offsetWidth < 768) {
            return 1;
        }
        else if (offsetWidth >= 768 && offsetWidth < 992) {
            return 2;
        }
        else if (offsetWidth >= 992 && offsetWidth < 1200) {
            return 3;
        }
        return 4;
    };

    state = {resolution: Responsive.resolution};

    handleResize() {
        this.setState({resolution: Responsive.resolution});
    }

    render() {
        const {render = emptyFunction, xs, sm, md, lg, xl, fixed,}= this.props;
        const {resolution,} = this.state;
        let args;
        if (resolution >= 0) {
            args = {width: '100%', ...xs,};
        }
        if (resolution >= 1) {
            args = fixed ? {...args, ...sm, width: 540,} : {...args, ...sm};
        }
        if (resolution >= 2) {
            args = fixed ? {...args, ...md, width: 720,} : {...args, ...md};
        }
        if (resolution >= 3) {
            args = fixed ? {...args, ...lg, width: 960,} : {...args, ...lg};
        }
        if (resolution >= 4) {
            args = fixed ? {...args, ...xl, width: 1140,} : {...args, ...xl};
        }
        return h(EventListener, {
            target: window,
            onResize: this.handleResize.bind(this),
            children: render(args),
        });
    }
}