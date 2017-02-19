import {connect,} from 'react-redux';
import {SignIn,} from '../../../Components';
import {signIn,} from '../behaviors';

const mapProps = (state,props) => ({
    ...props,
});
const mapDispatch = () => ({
    onSubmit: signIn,
});
export default connect(mapProps, mapDispatch)(SignIn);