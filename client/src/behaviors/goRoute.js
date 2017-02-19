import {browserHistory,} from 'react-router';
import {updateActivePathname, redirectRoute,} from '../actions';
import {dispatch,} from '../store';

 browserHistory.listen(({pathname}) => dispatch(updateActivePathname(pathname)));

export default (indexPathname, refreshPosts) => {
	return pathname => {
		browserHistory.push(pathname);
		dispatch(redirectRoute());
		if (pathname === indexPathname) refreshPosts();
	}
};
