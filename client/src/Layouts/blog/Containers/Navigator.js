import {connect,} from 'react-redux';
import {Navigator,} from '../../../Components';
import {goRoute, goBack,} from '../behaviors';
import {post,} from '../configs/router';

const mapProps = (state, props) => ({
	routes: state.router.visibleRoutes,
	activePathname: state.router.activePathname,
	backward: state.router.activePathname === post.pathname,
	...props,
});
const mapDispatch = () => ({
	onRouteClick: goRoute,
	onBackClick: goBack,
});
export default connect(mapProps, mapDispatch)(Navigator);