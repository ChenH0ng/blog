import h from '../h';

export default ({style, text, pathname, ...rest,}) => h('span', {
    ...rest,
    children: text,
    style: {
        cursor: 'pointer',
        color: '#00ab6b',
        fontSize: 14,
        ...style,
    },
});