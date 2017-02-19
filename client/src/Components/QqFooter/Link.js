import h from '../../h';
import {Component} from 'react';
import Radium from 'radium';

@Radium
export default class Link extends Component {
	render() {
		const {href, text,}=this.props;
		return h('a', {
			style: {
				textDecoration: 'none',
				color: '#979797',
				':hover': {
					color: '#ccc',
				},
				height: 21.6,
				lineHeight: '21.6px',
			},
			children: text,
			target: '_blank',
			href,
		});
	}
}