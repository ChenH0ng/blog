import h from '../../../h';
import {Card, Hyperlink, Middle,} from '../../../Components';

export default ({...rest,}) => h(Card, {
    ...rest,
    children: h(Middle, {
        left: [
            <div>github&nbsp;:&nbsp;</div>,
            <div>email&nbsp;:&nbsp;</div>,
        ],
        right: [
            h(Hyperlink, {text: 'github.com/ChenH0ng', href: 'https://github.com/ChenH0ng'}),
            h(Hyperlink, {text: 'chenh0ng@outlook.com', href: 'https://outlook.live.com/'}),
        ],
    }),
});