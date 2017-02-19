import h from '../h';

export default({style, html, ...rest,}) => h('div', {
    ...rest,
    style: {
        display: 'flex',
        boxSizing: 'border-box',
        ...style,
    },
    dangerouslySetInnerHTML: html ? {__html: html,} : void 0,
});