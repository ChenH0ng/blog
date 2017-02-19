import h from '../../../h';
import {Container,} from '../../../Components';

export default ({children,}) => h(Container, {
    style: {
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", STXihei, STHeiti, Heiti, SimSun, sans-serif',
    },
    children: [
        children,
    ],
}) ;