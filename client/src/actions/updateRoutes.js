import {UPDATE_ROUTES} from '../types';

export default (routes, visibleRoutes,) => ({
    type: UPDATE_ROUTES,
    routes,
    visibleRoutes,
});