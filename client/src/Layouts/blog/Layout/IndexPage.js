import h from '../../../h';
import {PostList, PostsState,} from '../Containers';
import {Container, FullScreen,} from '../../../Components';

export default () => h(Container, {
    style: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    children: [
        h(FullScreen, {
            style: {
                backgroundColor: '#fafafa',
                zIndex: -666,
            }
        }),
        h(PostList, {
            style: {
                marginTop: 16,
            }
        }),
        h(PostsState),
    ],
});