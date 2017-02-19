import {connect,} from 'react-redux';
import {Post,} from '../../../Components';

const mapProps = (state, props) => ({
    post: state.poster.selectedPost,
    ...props,
});
const mapDispatch = () => ({});
export default connect(mapProps, mapDispatch)(Post);