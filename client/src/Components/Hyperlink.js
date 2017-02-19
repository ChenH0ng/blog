import h from '../h';

export default({style, text, ...rest,}) => h('a', {
    ...rest,
    children: text,
    target: '_blank',
    style: {
        textDecoration: 'none',
        color: '#00ab6b',
        ...style,
    },
});