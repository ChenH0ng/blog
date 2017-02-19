import {Posts,} from '../resources';
import {dispatch,} from '../store';
import {updatePosts, reloadPoster} from '../actions';
import {getState} from '../store';

export default delay => {
	return async() => {
		if (getState().poster.loading)return Promise.resolve();
		dispatch(reloadPoster());
		const {code, posts,}= await Posts.gets();
		setTimeout(() => {
			switch (code) {
				case 233:
					dispatch(updatePosts(posts));
					break;
			}
		}, delay);
	}
};