import h from '../h';

export default ({style, ...rest,}) => h('div', {
    ...rest,
    style: {
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        ...style,
    },
});