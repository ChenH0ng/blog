import h from '../../h';
import Container from '../Container';
import Link from '../Link';
import OverflowX from '../OverflowX';
import {Motion, spring, presets,} from 'react-motion';
import Image from '../Image';
import Responsive from '../Responsive';
import {Component} from 'react';

const height = 50;
const offset = 30;

export default class Navigator extends Component {
    handleRouteClick(pathname) {
        const {onRouteClick}=this.props;
        onRouteClick && onRouteClick(pathname)
    }

    render() {
        const {enabled, backward, style, routes = [], activePathname, onBackClick,}=this.props;
        return h(Motion, {
            defaultStyle: {
                top: -offset,
            },
            style: {
                top: spring(enabled ? -offset : -2 * height, presets.wobbly),
            },
            children: ({top}) => h(Responsive, {
                xs: {paddingLeft: 0},
                md: {paddingLeft: 100},
                lg: {paddingLeft: 200},
                xl: {paddingLeft: 300},
                render: ({paddingLeft}) => h(Container, {
                    style: {
                        height,
                        backgroundColor: '#fff',
                    },
                    children: h(Container, {
                        style: {
                            boxShadow: '0 2px 2px -2px rgba(0,0,0,.3)',
                            borderBottom: '.8px solid #eee',
                            position: 'fixed',
                            backgroundColor: '#fff',
                            paddingLeft,
                            zIndex: 1000,
                            top,
                            alignItems: 'flex-end',
                            height: height + offset,
                            ...style,
                        },
                        children: h(OverflowX, {
                            style: {
                                alignItems: 'center',
                                width: 1000,
                                height,
                                paddingLeft: 16,
                            },
                            children: backward ?
                                h(Image, {
                                    src: require('./Back.jpg'),
                                    style: {
                                        height,
                                        cursor: 'pointer',
                                    },
                                    onClick: onBackClick,
                                }) :
                                routes.map(({pathname, text,}) => h(Link, {
                                    pathname, text,
                                    style: {
                                        color: activePathname === pathname ? '#000' : '#999',
                                        marginRight: 16,
                                    },
                                    onClick: this.handleRouteClick.bind(this, pathname),
                                })),
                        }),
                    }),
                }),
            }),
        });
    }
}
    