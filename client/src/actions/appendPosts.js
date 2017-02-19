import {APPEND_POSTS,} from '../types';

export default posts => ({
    type: APPEND_POSTS,
    posts,
});