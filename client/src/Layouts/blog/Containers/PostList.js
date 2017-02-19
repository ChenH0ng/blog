import {connect,} from 'react-redux';
import {PostList,} from '../../../Components';
import {readMorePosts, readPost,} from '../behaviors';

const mapProps = (state, props) => ({
    posts: state.poster.posts,
    ...props,
});
const mapDispatch =  ()  => ({
    onRequestMorePosts: readMorePosts,
    onPostClick: readPost,
});
export default connect(mapProps, mapDispatch)(PostList);