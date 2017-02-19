import h from '../../h';
import {Component} from 'react';
import View from '../View';

export default class List extends Component {
	render() {
		return h(View, {
			style: {
				width: 120,
				flexDirection: 'column',
			},
			children: this.props.children,
		});
	}
}