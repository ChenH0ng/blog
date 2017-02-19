import h from '../h';
import View from './View';

export default ({style, ...rest,}) => h(View, {
	...rest,
	style: {
		position: 'fixed',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		...style,
	},
});