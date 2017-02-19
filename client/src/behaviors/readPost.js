import {dispatch,} from '../store';
import {selectPost, addScrollTop,} from '../actions';
import {setScrollTop, getScrollTop} from '../util';

export default (postPathname, goRoute) => {
	return index => {
		dispatch(selectPost(index));
		dispatch(addScrollTop(getScrollTop()));
		goRoute(postPathname);
		setScrollTop(0);
	}
};