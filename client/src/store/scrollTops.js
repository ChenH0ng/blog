import {ADD_SCROLL_TOP, BACK_SCROLL_TOP,} from '../types';
import {setScrollTop,} from '../util';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_SCROLL_TOP:
            return [...state, action.scrollTop];
        case BACK_SCROLL_TOP: {
            const last = state.length - 1;
            const top = state[last];
            requestAnimationFrame(() => {
                setScrollTop(top);
                action.callback && requestAnimationFrame(action.callback);
            });
            return state.slice(0, last);
        }
        default:
            return state;
    }
};