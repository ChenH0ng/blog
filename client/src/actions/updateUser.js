import {UPDATE_USER} from '../types';

export default (user) =>({
	type: UPDATE_USER,
	user,
});