import {Session,} from '../resources';
import {dispatch, getState,} from '../store';
import {updateUser, updateRoutes, redirectRoute,} from '../actions';

export default (router, users) => {
	return async form => {
		if (getState().user.loading)return Promise.resolve();
		const {code, user,}= await(form ? Session.post(form) : Session.get());
		switch (code) {
			case 233:
				dispatch(updateUser(user));
				dispatch(updateRoutes(router.userRoutes, router.userVisibleRoutes));
				break;
			default:
				dispatch(updateUser(users.tourist));
				dispatch(updateRoutes(router.touristRoutes, router.touristVisibleRoutes));
				break;
		}
		dispatch(redirectRoute());
	}
};