import {connect,} from 'react-redux';
import {FlashVideo,} from '../../../Components';

const mapProps = (state, props) => ({
	...props,
	src: 'http://static.hdslb.com/play.swf',
});
const mapDispatch = () => ({});
export default connect(mapProps, mapDispatch)(FlashVideo);