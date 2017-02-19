import h from '../h';
import EventListener from 'react-event-listener';
import {Component,} from 'react';

export default class BodyCenter extends Component {
	static setWindowWidth() {
		document.body.style.width = window.innerWidth + 'px';
	}
	
	constructor(props) {
		super(props);
		document.body.style.overflowX = 'hidden';
		BodyCenter.setWindowWidth();
	}
	
	render() {
		return h(EventListener, {
			target: window,
			onResize: BodyCenter.setWindowWidth,
		});
	}
}