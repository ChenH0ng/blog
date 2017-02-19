import {UPDATE_ROUTES, UPDATE_ACTIVE_PATHNAME, REDIRECT_ROUTE,} from '../types';
import {getPathname,} from '../util';
import {browserHistory,} from 'react-router';

const initialState = {
	routes: [],
	visibleRoutes: [],
	activePathname: getPathname(),
	defaultPathname: '/',
};
export default(state = initialState, action) => {
	switch (action.type) {
		case UPDATE_ROUTES:
			return {...state, routes: action.routes, visibleRoutes: action.visibleRoutes,};
		case UPDATE_ACTIVE_PATHNAME:
			return {...state, activePathname: action.activePathname,};
		case REDIRECT_ROUTE:
			if (!state.routes.some(route => route.pathname === state.activePathname)) {
				requestAnimationFrame(browserHistory.push.bind(browserHistory, initialState.defaultPathname));
			}
			return state;
		default:
			return state;
	}
};