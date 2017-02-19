import View from './View';
import h from '../h';

export default ({style, ...rest,}) => {
    const height = parseInt(style.height || 0);
    return h(View, {
        style: {
            height,
            overflow: 'hidden',
        },
        children: h(View, {
            style: {
                height: height + 50,
                overflowX: 'scroll',
                overflowY: 'hidden',
                whiteSpace: 'nowrap',
            },
            children: h(View, {
                ...rest,
                style,
            })
        }),
    });
};