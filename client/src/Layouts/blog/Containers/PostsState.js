import h from '../../../h';
import {Image, View,} from '../../../Components';
import {connect,} from 'react-redux';

const PostsState = ({style, loadingVisible, noMoreVisible, ...rest,}) => h(View, {
    ...rest,
    style: {
        height: 80,
        ...style,
    },
    children: [
        h(Image, {
            src: require('./loading.gif'),
            style: {
                width: 80,
                height: 80,
                display: loadingVisible ? 'flex' : 'none',
            },
        }),
        h(View, {
            style: {
                height: 80,
                alignItems: 'center',
                display: noMoreVisible ? 'flex' : 'none',
            },
            children: 'No more posts',
        })
    ]
});

const mapProps = (state, props) => ({
    loadingVisible: state.poster.loading,
    noMoreVisible: state.poster.noMore,
    ...props,
});
const mapDispatch = () => ({});
export default connect(mapProps, mapDispatch)(PostsState);