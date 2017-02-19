import {UPDATE_ACTIVE_PATHNAME,} from '../types';

export default activePathname => ({
    type: UPDATE_ACTIVE_PATHNAME,
    activePathname,
});