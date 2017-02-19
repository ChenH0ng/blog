import * as behaviors from '../../behaviors';
import {router, users,} from './configs';
const {index, post}=router;

export const goBack = behaviors.goBack(index.pathname);
export const refreshPosts = behaviors.refreshPosts(0);
export const goRoute = behaviors.goRoute(index.pathname, refreshPosts);
export const publishPost = behaviors.publishPost(index.pathname, goRoute);
export const readMorePosts = behaviors.readMorePosts(0);
export const readPost = behaviors.readPost(post.pathname,goRoute);
export const signIn = behaviors.signIn(router, users);
export const signOut = behaviors.signOut(router, users);