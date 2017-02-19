import {dispatch,} from '../store';
import {backScrollTop, redirectRoute,} from '../actions';
import {ScrollUp,} from '../Components';
import {getPathname,} from '../util';
import {browserHistory,} from 'react-router';

export default pathname => {
	return () => {
		browserHistory.push(pathname);
		dispatch(redirectRoute());
		ScrollUp.enabled = !!0;
		dispatch(backScrollTop(() => ScrollUp.enabled = !0));
	}
};