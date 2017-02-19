import {Posts,} from '../resources';
import {dispatch, getState} from '../store';
import {appendPosts, loadPoster,} from '../actions';

export default delay => {
	return async() => {
		const poster = getState().poster;
		if (poster.loading || poster.noMore)return Promise.resolve();
		dispatch(loadPoster());
		const {code, posts,}=await Posts.gets({skip: poster.posts.length});
		setTimeout(() => {
			switch (code) {
				case 233:
					dispatch(appendPosts(posts));
					break;
			}
		}, delay);
	}
};