import h from '../../../h';
import {Button,} from '../../../Components';
import {signOut,} from '../behaviors';

export default ({...rest,}) => h(Button, {
	...rest,
	text: 'Sign out',
	onClick: signOut,
});