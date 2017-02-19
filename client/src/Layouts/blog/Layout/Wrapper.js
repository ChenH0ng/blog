import h from '../../../h';
import {BodyCenter, Container, BackTop, ScrollUp,} from '../../../Components';
import {Navigator} from '../Containers';

export default ({children,}) => h(Container, {
	style: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	children: [
		h(BodyCenter),
		h(ScrollUp, {
			render: (isUp, top) => h(Container, {
				children: [
					h(BackTop, {enabled: top !== 0 && isUp, src: require('./BackTop.jpg')}),
					h(Navigator, {enabled: top === 0 || isUp}),
				]
			}),
		}),
		children,
	],
}) ;