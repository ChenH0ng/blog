import {LOAD_POSTER, SELECT_POST, UPDATE_POSTS, APPEND_POSTS, RELOAD_POSTER,} from '../types';
import {Posts,} from '../resources';

const initialState = {
    posts: [],
    selectedPost: null,
    loading: !!0,
    noMore: !!0,
};
export default(state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTER:
            return {...state, loading: !0, noMore: !!0,};
        case RELOAD_POSTER:
            return {...initialState, loading: !0,};
        case SELECT_POST:
            return {...state, selectedPost: state.posts[action.index],};
        case UPDATE_POSTS:
            return {
                ...state, posts: action.posts, loading: !!0,
                noMore: Posts.limit > action.posts.length,
            };
        case APPEND_POSTS:
            return {
                ...state, posts: [...state.posts, ...action.posts],
                loading: !!0, noMore: Posts.limit > action.posts.length,
            };
        default:
            return state;
    }
};