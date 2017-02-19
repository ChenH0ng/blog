import h from '../../h';
import {Component} from 'react';

export default class  extends Component {
	render() {
		const {text, height,}=this.props;
		return h('div', {
			style: {
				height,
				fontSize: 14,
			},
			children: text,
		});
	}
}