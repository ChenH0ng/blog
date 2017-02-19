import {Session,} from '../resources';
import {dispatch,} from '../store';
import {updateUser, updateRoutes, redirectRoute,} from '../actions';

export default (routes, users) => {
	return async() => {
		await Session.delete();
		dispatch(updateUser(users.tourist));
		dispatch(updateRoutes(routes.touristRoutes, routes.touristVisibleRoutes));
		dispatch(redirectRoute());
	}
};