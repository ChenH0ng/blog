import h from '../h';
import View from './View';

export default ({style, ...rest,}) => h(View, {
    ...rest,
    style: {
        backgroundColor: '#fff',
        border: '.8px solid #ccc',
        borderRadius: 5,
        padding: 16,
        position: 'fixed',
        margin: 'auto',
        left: 0,
        right: 0,
        flexDirection: 'column',
        ...style,
    }
});