import h from '../h';
import getSemanticStyle from './getSemanticStyle';

export default({style, text, kind, ...rest,}) => h('input', {
    ...rest,
    style: {
        ...getSemanticStyle(kind),
        ...style,
    },
    value: text,
    type: 'submit',
});