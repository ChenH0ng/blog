import h from '../../../h';
import {Responsive, Editor,} from '../../../Components';
import {connect,} from 'react-redux';
import {publishPost,} from '../behaviors';

const Container = ({style, ...rest,}) => h(Responsive, {
	md: {width: 768,},
	render: ({width}) => h(Editor, {
		...rest,
		style: {
			width, ...style,
		},
		onSubmit: publishPost,
	}),
});

const mapProps = (state, props) => ({
	...props,
});
const mapDispatch = () => ({});
export default connect(mapProps, mapDispatch)(Container);