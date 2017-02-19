import Responsive from './Responsive';
import View from './View';
import Link from './Link';
import Image from './Image';
import h from '../h';
import {Component} from 'react';

export default class Post extends Component {
    handleAvatarClick() {
        const {onAvatarClick, post,}=this.props;
        onAvatarClick && post && post.userSynopsis && onAvatarClick(post.userSynopsis.username);
    }

    handleUsernameClick() {
        const {onNicknameClick, post,}=this.props;
        onNicknameClick && post && post.userSynopsis && onNicknameClick(post.userSynopsis.username);
    }

    render() {
        const {style, post,} = this.props;
        if (!post)return h('div', {children: 'The post does not exist!', style,});
        const {title = '', text = '', userSynopsis = {}, date = '', time = 0,}=post;
        const {avatar, nickname, username,}=userSynopsis;
        return h(Responsive, {
            xs: {
                titleSize: 22,
                textSize: 16,
                textLineHeight: '20px',
                titleMargin: '16px 0',
            },
            sm: {
                titleSize: 35,
                textSize: 18,
                textLineHeight: '30px',
                titleMargin: '30px 0',
            },
            md: {
                width: 768,
            },
            render: ({width, titleSize, textSize, textLineHeight, titleMargin,}) => h(View, {
                style: {
                    width,
                    ...style,
                    flexDirection: 'column',
                    padding: 16,
                },
                children: [
                    h(View, {
                        style: {
                            alignItems: 'center',
                        },
                        children: [
                            h(Image, {
                                src: avatar,
                                onClick: this.handleAvatarClick.bind(this),
                                style: {
                                    width: 40,
                                    height: 40,
                                    marginRight: 16,
                                    cursor: 'pointer',
                                    borderRadius: 40,
                                }
                            }),
                            h(View, {
                                style: {
                                    flexDirection: 'column',
                                },
                                children: [
                                    h(Link, {
                                        text: nickname, pathname: '/about',
                                        onClick: this.handleUsernameClick.bind(this),
                                    }),
                                    h(View, {
                                        children: h(View, {
                                            children: date + ' ' + new Date(time).toLocaleTimeString(),
                                        }),
                                        style: {
                                            fontSize: 14,
                                            color: '#a1a1a1',
                                            marginTop: 5,
                                        }
                                    }),
                                ],
                            }),
                        ],
                    }),
                    h(View, {
                        style: {
                            flexDirection: 'column',
                        },
                        children: [
                            h(View, {
                                style: {
                                    fontSize: titleSize,
                                    margin: titleMargin,
                                    fontWeight: 600,
                                    color: '#333',
                                    justifyContent: 'center',
                                },
                                children: title,
                            }),
                            h(View, {
                                style: {
                                    fontSize: textSize,
                                    lineHeight: textLineHeight,
                                    display: 'block',
                                },
                                html: text,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
}