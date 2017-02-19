import h from '../../h';
import {Component} from 'react';
import Radium from 'radium';
import {url,} from '../../util';

@Radium
export default class PlatformLink extends Component {
	render() {
		const {text, href, offset = 0, width,}=this.props;
		return h('a', {
			style: {
				backgroundImage: url(require('./plats1.png')),
				marginRight: 35,
				paddingTop: 65,
				textDecoration: 'none',
				color: '#979797',
				width,
				fontSize: 14,
				textAlign: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: `${-offset}px 0`,
				':hover': {
					backgroundPosition: `${-offset}px -93px`,
					color: '#12B7F5',
				},
			},
			href,
			target: '_blank',
			children: text,
		});
	}
}