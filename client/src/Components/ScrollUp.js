import h from '../h';
import EventListener from 'react-event-listener';
import {getScrollTop, setScrollTop,} from '../util';
import {Component,} from 'react';

export default class ScrollUp extends Component {
    static enabled = !0;
    top = document.body.scrollTop;
    state = {isUp: !!0,};
    
    handleScroll() {
        if (!ScrollUp.enabled) return requestAnimationFrame(this.handleScroll.bind(this));
        const newTop = getScrollTop();
        const oldTop = this.top;
        this.top = newTop;
        const isUp = this.state.isUp;
        if (isUp && newTop > oldTop) {
            this.setState({isUp: !!0});
        }
        else if (!isUp && newTop < oldTop) {
            this.setState({isUp: !0});
        }
        else if (newTop === 0 || oldTop === 0) {
            this.forceUpdate();
        }
    }
    
    render() {
        return h(EventListener, {
            target: window,
            onScroll: this.handleScroll.bind(this),
            children: this.props.render && this.props.render(this.state.isUp, this.top),
        });
    }
}