import Wrapper from './Wrapper';
import SignInPage from './SignInPage';
import IndexPage from './IndexPage';
import UserPage from './UserPage';
import AboutPage from './AboutPage';
import PostPage from './PostPage';
import WritingPage from './WritingPage';
import TestPage from './TestPage';
import {signIn, refreshPosts,} from '../behaviors';
import {initApp,} from '../../../util';

const init = () => {
	signIn();
	refreshPosts();
};
export default {
	init, Wrapper, SignInPage, IndexPage, UserPage, AboutPage,
	PostPage, WritingPage, TestPage,
} ;