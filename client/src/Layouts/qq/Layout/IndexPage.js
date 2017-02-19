import h from '../../../h';
import {
    Container, QqScrollImage, View, QqFooter, QqNavigator, QqCarousel,
} from '../../../Components';
import {url, getScrollTop,} from '../../../util';
import $ from 'jquery';

export default () => h(Container, {
    style: {
        flexDirection: 'column',
        alignItems: 'center',
        overflowX: 'hidden',
    },
    children: [
        h(QqNavigator, {
            routes: [
                {text: '首页', pathname: '/qq'},
                {text: '下载', pathname: '/qq/download'},
                {text: '动态', pathname: '/qq/dynamic'},
            ],
            activePathname: '/qq',
            population: '237,509,444',
        }),
        h(QqCarousel, {srcs: [require('./c1.jpg'), require('./c2.jpg')]}),
        h(Container, {
            style: {
                height: 280,
                backgroundImage: `url(${require('./brand.png')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            },
        }),
        h(QqScrollImage, {
            min: Math.max(0, 884 - window.innerHeight),
            max: 1409.6,
            src: require('./1.jpg'),
        }),
        h(Container, {
            style: {
                height: 584,
                justifyContent: 'center',
            },
            children: h(View, {
                style: {
                    width: 960,
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    position: 'relative',
                    justifyContent: 'center',
                },
                children: [
                    h('img', {
                        src: require('./phone1.png'),
                        style: {
                            position: 'absolute',
                            bottom: 0,
                            left: -13,
                        },
                    }),
                    h('img', {
                        src: require('./contactText1.png'),
                        style: {
                            marginBottom: 34,
                        }
                    }),
                    h('div', {
                        style: {
                            fontSize: 18,
                            marginBottom: 16,
                            letterSpacing: 2,
                            color: '#999',
                            lineHeight: '25px',
                        },
                        children: [
                            '无论何时何地，你都能自由享受QQ在各类终端',
                            h('br'),
                            '上带来的高清通话，与好友一起想聊多久聊多久',
                        ],
                    }),
                    h('div', {
                        style: {
                            fontSize: 18,
                            color: '#12b7f5',
                            opacity: .6,
                            cursor: 'pointer',
                            whiteSpace: 'pre'
                        },
                        children: '了解更多  >',
                    }),
                    h(View, {
                        style: {
                            backgroundImage: `url(${require('./contact.png')})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '52px 0',
                            marginTop: 56,
                        },
                        children: ['两人、多人通话', '群组通话', '屏幕分享'].map((text, i) => h('div', {
                            style: {
                                textAlign: 'center',
                                borderLeft: i === 0 ? '' : '1px solid #e9e9e9',
                                color: '#a0a0a0',
                                padding: i === 2 ? '58px 0 0 22px' : '58px 22px 0',
                            },
                            children: text,
                        })),
                    }),
                ],
            }),
        }),
        h(QqScrollImage, {
            min: Math.max(0, 2068 - window.innerHeight),
            max: 2668,
            src: require('./2.jpg'),
        }),
        h(Container, {
            style: {
                height: 584,
                justifyContent: 'center',
            },
            children: h(View, {
                style: {
                    width: 960,
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    position: 'relative',
                    justifyContent: 'center',
                },
                children: [
                    h('img', {
                        src: require('./laptop.png'),
                        style: {
                            position: 'absolute',
                            bottom: 104,
                            right: -100,
                        },
                    }),
                    h('img', {
                        src: require('./contactText2.png'),
                        style: {
                            marginBottom: 34,
                        }
                    }),
                    h('div', {
                        children: [
                            h('div', {
                                style: {
                                    fontSize: 18,
                                    marginBottom: 16,
                                    letterSpacing: 2,
                                    color: '#999',
                                    lineHeight: '25px',
                                },
                                children: [
                                    '通过QQ,电脑和手机上的文件都能收发自如，',
                                    h('br'),
                                    '更有手机在线查阅，轻松你的工作和生活。',
                                ],
                            }),
                            h('div', {
                                style: {
                                    fontSize: 18,
                                    color: '#12b7f5',
                                    opacity: .6,
                                    cursor: 'pointer',
                                    whiteSpace: 'pre'
                                },
                                children: '了解更多  >',
                            }),
                            h(View, {
                                style: {
                                    backgroundImage: `url(${require('./cloud.png')})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '13px 0',
                                    marginTop: 56,
                                },
                                children: ['文件互传', '多端漫游', '在线预览'].map((text, i) => h('div', {
                                    style: {
                                        textAlign: 'center',
                                        borderRight: i === 2 ? '' : '1px solid #e9e9e9',
                                        color: '#a0a0a0',
                                        padding: i === 0 ? '58px 23px 0 14px' : '58px 23px 0',
                                    },
                                    children: text,
                                })),
                            }),
                        ]
                    })
                ]
            }),
        }),
        h(QqScrollImage, {
            min: Math.max(0, 3252 - window.innerHeight),
            max: 3852,
            src: require('./3.jpg'),
        }),
        h(Container, {
            style: {
                height: 584,
                justifyContent: 'center',
            },
            children: h(View, {
                style: {
                    width: 960,
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    position: 'relative',
                    justifyContent: 'center',
                },
                children: [
                    h('img', {
                        src: require('./phone2.png'),
                        style: {
                            position: 'absolute',
                            bottom: 0,
                            left: 50,
                        },
                    }),
                    h('img', {
                        src: require('./contactText3.png'),
                        style: {
                            marginBottom: 34,
                        }
                    }),
                    h(View, {
                        style: {
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                        },
                        children: [
                            h('div', {
                                style: {
                                    fontSize: 18,
                                    marginBottom: 16,
                                    letterSpacing: 2,
                                    color: '#999',
                                    lineHeight: '25px',
                                },
                                children: [
                                    '即使世界很大，你也不会孤单，在兴趣部落',
                                    h('br'),
                                    '有和你一样的人，期待着和你一起发现精彩',
                                ],
                            }),
                            h('div', {
                                style: {
                                    fontSize: 18,
                                    color: '#12b7f5',
                                    opacity: .6,
                                    cursor: 'pointer',
                                    whiteSpace: 'pre'
                                },
                                children: '了解更多  >',
                            }),
                            h(View, {
                                style: {
                                    backgroundImage: `url(${require('./location.png')})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '25px 0',
                                    marginTop: 56,
                                },
                                children: ['兴趣社区', '附近热点', '精彩图集'].map((text, i) => h('div', {
                                    style: {
                                        textAlign: 'center',
                                        borderLeft: i === 0 ? '' : '1px solid #e9e9e9',
                                        color: '#a0a0a0',
                                        padding: i === 2 ? '58px 0 0 20px' : '58px 20px 0',
                                    },
                                    children: text,
                                })),
                            }),
                        ]
                    })
                ]
            }),
        }),
        h(QqFooter, {
            children: h(Container, {
                style: {
                    height: 205,
                },
                children: [
                    h('div', {
                        style: {
                            width: 468,
                        },
                        children: [
                            h(QqFooter.Label, {
                                text: '了解热门产品',
                                height: 50,
                            }),
                            h(View, {
                                children: [
                                    h(QqFooter.PlatformLink, {
                                        href: '//im.qq.com/mobileqq/',
                                        text: 'QQ 手机版',
                                        width: 68,
                                    }),
                                    h(QqFooter.PlatformLink, {
                                        href: '//im.qq.com/pcqq/',
                                        text: 'QQ PC版',
                                        width: 80,
                                        offset: 105,
                                    }),
                                    h(QqFooter.PlatformLink, {
                                        href: '//im.qq.com/macqq/',
                                        text: 'QQ Mac版',
                                        width: 84,
                                        offset: 210,
                                    }),
                                    h(QqFooter.PlatformLink, {
                                        href: '//im.qq.com/qqhd/',
                                        text: 'QQ Pad版',
                                        width: 76,
                                        offset: 326,
                                    }),
                                ]
                            }),
                        ]
                    }),
                    h(View, {
                        children: [
                            h(QqFooter.List, {
                                children: [
                                    h(QqFooter.Label, {height: 29, text: 'QQ安全'}),
                                    h(QqFooter.Link, {text: '安全中心', href: '//aq.qq.com/'}),
                                    h(QqFooter.Link, {text: '冻结帐号', href: '//110.qq.com/'}),
                                    h(QqFooter.Link, {
                                        text: '举报恶意行为',
                                        href: '//aq.qq.com/v2/safe_school/report_index.shtml'
                                    }),
                                    h(QqFooter.Link, {text: '恢复好友和群', href: '//huifu.qq.com/'}),
                                ],
                            }),
                            h(QqFooter.List, {
                                children: [
                                    h(QqFooter.Label, {height: 29, text: '帮助反馈'}),
                                    h(QqFooter.Link, {text: '腾讯客服', href: '//kf.qq.com/product/QQ.html'}),
                                    h(QqFooter.Link, {text: '反馈问题', href: '//support.qq.com/discuss/44_1.shtml'}),
                                    h(QqFooter.Link, {text: '腾讯微博', href: '//e.t.qq.com/QQ'}),
                                    h(QqFooter.Link, {text: '新浪微博', href: '//weibo.com/u/2508053484'}),
                                ],
                            }),
                            h(QqFooter.List, {
                                children: [
                                    h(QqFooter.Label, {height: 29, text: '友情链接'}),
                                    h(QqFooter.Link, {text: '兴趣部落', href: '//buluo.qq.com'}),
                                    h(QqFooter.Link, {text: 'QQ群', href: '//qun.qq.com/'}),
                                    h(QqFooter.Link, {text: 'QQ音乐', href: '//y.qq.com/#type=index '}),
                                    h(QqFooter.Link, {text: 'QQ浏览器', href: '//browser.qq.com/'}),
                                    h(QqFooter.Link, {text: '来电', href: '//laidian.qq.com/'}),
                                ],
                            }),
                            h(QqFooter.List, {
                                children: [
                                    h(QqFooter.Label, {height: 29, text: '友情链接'}),
                                    h(QqFooter.Link, {text: '腾讯视频', href: '//v.qq.com/'}),
                                    h(QqFooter.Link, {text: '腾讯体验中心', href: '//exp.qq.com/'}),
                                    h(QqFooter.Link, {text: '腾讯电脑管家', href: '//guanjia.qq.com/'}),
                                    h(QqFooter.Link, {text: '企鹅FM', href: '//fm.qq.com/'}),
                                    h(QqFooter.Link, {text: '星钻', href: '//xing.qq.com/'}),
                                ],
                            }),
                        ]
                    }),
                ],
            }),
        }),
    ],
});