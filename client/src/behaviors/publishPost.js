import {getState,} from '../store';
import {Posts,} from '../resources';

export default (indexPathname, goRoute) => {
	return async post => {
		const {avatar, username, nickname,}=getState().user;
		const {code}= await Posts.post({...post, userSynopsis: {avatar, username, nickname,},});
		switch (code) {
			case 233:
				goRoute(indexPathname);
				break;
			default:
				break;
		}
	}
};