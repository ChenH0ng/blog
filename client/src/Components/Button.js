import h from '../h';
import getSemanticStyle from './getSemanticStyle';

export default({style, text, kind, ...rest,}) => h('span', {
    ...rest,
    style: {
        ...getSemanticStyle(kind),
        ...style,
    },
    children: text,
});