import {combineReducers, createStore, applyMiddleware,} from 'redux';
import user from './user';
import router from './router';
import poster from './poster';
import scrollTops from './scrollTops';
import createLogger from 'redux-logger';

const store = createStore(
	combineReducers({
		user, router, poster, scrollTops,
	}),
	// applyMiddleware(createLogger()),
);
const {dispatch, getState,}=store;
export {dispatch, getState,}
export default store;