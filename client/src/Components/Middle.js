import h from '../h';
import View from './View';

export default({left, right, ...rest,}) => h(View, {
    ...rest,
    children: [
        h(View, {
            children: left,
            style: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'space-around',
                marginRight: 8,
            }
        }),
        h(View, {
            children: right,
            style: {
                flexDirection: 'column',
                justifyContent: 'space-around',
            }
        }),
    ],
});