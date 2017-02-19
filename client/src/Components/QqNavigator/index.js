import h from '../../h';
import {Component} from 'react';
import View from '../View';
import Container from '../Container';
import Radium from 'radium';
import EventListener from 'react-event-listener';
import $ from 'jquery';

const height = 74.4;
@Radium
export default class QqNavigator extends Component {
    static window = $(window);

    constructor(props) {
        super(props);
        this.state = {
            activePathname: props.activePathname,
            fixed: !!0,
        };
    }

    handleScroll() {
        const {fixed,} = this.state;
        if (fixed && QqNavigator.window.scrollTop() < 779.6) {
            this.setState({fixed: !!0});
        }
        else if (!fixed && QqNavigator.window.scrollTop() >= 779.6) {
            this.setState({fixed: !0});
        }
    }

    handleRouteClick(pathname) {
        const {onRouteClick,} = this.props;
        onRouteClick && onRouteClick(pathname);
    }

    handleRouteEnter(pathname) {
        this.setState({activePathname: pathname});
    }

    handleRoutesLeave() {
        this.setState({activePathname: this.props.activePathname});
    }

    render() {
        const {routes = [], population = 0,}=this.props;
        const {activePathname, fixed,} = this.state;
        return h(Container, {
            style:{
                position: fixed ? 'fixed' : 'absolute',
                borderBottom: fixed ? '1px solid #f1f1f1' : '',
                background: fixed ? '#fff' : '',
                fontSize: 18,
                zIndex: 1000,
                justifyContent:'center',
            },
            children: h(View, {
                style: {
                    height,
                    justifyContent: 'space-between',
                    width: 1020,
                },
                children: [
                    h(EventListener, {
                        target: document,
                        onScroll: this.handleScroll.bind(this),
                    }),
                    h(View, {
                        style: {
                            alignItems: 'center',
                        },
                        onMouseLeave: this.handleRoutesLeave.bind(this),
                        children: [
                            h('img', {
                                style: {
                                    marginRight: 32,
                                },
                                src: require('./logo.png'),
                            }),
                            ...routes.map(({text, pathname,}) => h(View, {
                                style: {
                                    height,
                                    width: 76,
                                    marginLeft: 16,
                                    alignItems: 'center',
                                    background: pathname === activePathname ? '#12b7f5' : '',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                },
                                onClick: this.handleRouteClick.bind(this, pathname),
                                children: text,
                                onMouseEnter: this.handleRouteEnter.bind(this, pathname),
                            })),
                        ]
                    }),
                    h(View, {
                        style: {
                            alignItems: 'center',
                        },
                        children: [
                            h(View, {
                                style: {
                                    cursor: 'pointer',
                                    width: 96,
                                    height: 39,
                                    borderRadius: 39,
                                    background: '#12b7f5',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#fff',
                                },
                                children: '注册',
                            }),
                            h(View, {
                                style: {
                                    width: 218,
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    fontSize: 14,
                                },
                                children: [
                                    h(View, {
                                        children: [
                                            h('div', {
                                                style: {
                                                    marginLeft: 30,
                                                },
                                                children: 'QQ会员'
                                            }),
                                            h('div', {
                                                style: {
                                                    marginLeft: 30,
                                                },
                                                children: 'QQ安全'
                                            }),
                                            h('div', {
                                                style: {
                                                    marginLeft: 30,
                                                },
                                                children: '登入'
                                            }),
                                        ],
                                    }),
                                    h('a', {
                                        style: {
                                            marginTop: 10,
                                            whiteSpace: 'pre',
                                            cursor: 'pointer',
                                            ':hover': {
                                                color: '#12b7f5',
                                                textDecoration: 'underline',
                                            },
                                        },
                                        children: '当前在线人数 : ' + population,
                                    })
                                ],
                            }),
                        ],
                    }),
                ]
            }),
        });
    }
}