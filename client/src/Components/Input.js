import h from '../h';

export default ({style, text, ...rest,}) => h('input', {
    ...rest,
    value: text,
    style: {
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.075)',
        border: '.8px solid rgb(221, 221, 221)',
        padding: 8,
        borderRadius: 3,
        width: 250,
        height: 20,
        ...style,
    },
});