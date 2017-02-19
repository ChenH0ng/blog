import {scrollToTop,} from '../util';
import Image from './Image';
import h from '../h';
import {Motion, spring, presets} from 'react-motion';

const height = 30;
export default ({enabled, style, delay = 300, ...rest,}) => h(Motion, {
    defaultStyle: {
        bottom: -2 * height,
    },
    style: {
        bottom: spring(enabled ? height : -2 * height, presets.wobbly),
    },
    children: ({bottom}) => h(Image, {
        ...rest,
        onClick: scrollToTop.bind(null, delay),
        style: {
            width: 30,
            height,
            right: 30,
            bottom,
            borderRadius: 30,
            position: 'fixed',
            cursor: 'pointer',
            ...style,
        },
    }),
});