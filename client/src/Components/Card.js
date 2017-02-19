import h from '../h';
import View from './View';

export default ({style, ...rest,}) => h(View,{
    ...rest,
    style: {
        boxShadow: '0 0 2px rgba(0, 0, 0, .3)',
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'column',
        padding: 16,
        ...style,
    },
});