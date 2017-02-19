import h from '../h';
import {url, getScrollTop,} from '../util';
import {Component} from 'react';
import Container from './Container';
import EventListener from 'react-event-listener';

export default class QqScrollImage extends Component {
	range = 50;
	offset = -15;
	
	constructor(props) {
		super(props);
		const {min, max,}=props;
		this.state = {top: this.offset,};
		this.ratio = this.range / (max - min);
	}
	
	handleScroll() {
		const top = getScrollTop();
		const {min, max,}=this.props;
		if (top > min && top < max) {
			this.setState({top: this.range - (top - min) * this.ratio + this.offset});
		}
	}
	
	render() {
		return h(Container, {
			style: {
				backgroundSize: 'cover',
				backgroundImage: url(this.props.src),
				backgroundPosition: `center ${this.state.top}px`,
				backgroundAttachment: 'fixed',
				height: 600,
			},
			children: h(EventListener, {
				target: document,
				onScroll: this.handleScroll.bind(this),
			}),
		});
	}
}