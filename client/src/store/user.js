import {UPDATE_USER, RELOAD_USER,} from '../types';

const initialState = {authority: 0, username: '', nickname: '', loading: !!0,};
export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return {...action.user, loading: !!0,};
        case RELOAD_USER:
            return {...state, loading: !0};
        default:
            return state;
    }
};