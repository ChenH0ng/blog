import h from '../h';
import Responsive from './Responsive';
import Card from './Card';
import Image from './Image';
import Link from './Link';
import View from './View';
import Container from './Container';
import {getAgoString,} from '../util';
import {Component} from 'react';

export default class PostSynopsis extends Component {
    handleAvatarClick() {
        const {onAvatarClick, post,}=this.props;
        onAvatarClick && post && post.userSynopsis && onAvatarClick(post.userSynopsis.username);
    }

    handleUsernameClick() {
        const {onNicknameClick, post,}=this.props;
        onNicknameClick && post && post.userSynopsis && onNicknameClick(post.userSynopsis.username);
    }

    render() {
        const {style, post, onClick,} = this.props;
        const {title = '', text = '', userSynopsis = {}, time = 0,}=post;
        const {avatar, nickname, username,}=userSynopsis;
        return h(Responsive, {
            xs: {
                titleSize: 20,
                textLimit: 120,
            },
            sm: {
                width: 540,
                titleSize: 29,
                textLimit: 226,
            },
            md: {
                width: 660,
            },
            render: ({width, titleSize, textLimit}) => h(Card, {
                style: {
                    width,
                    ...style,
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
                                },
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
                                            children: getAgoString(time),
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
                    h(Container, {
                        onClick,
                        style: {
                            flexDirection: 'column',
                            cursor: 'pointer',
                        },
                        children: [
                            h(View, {
                                children: title,
                                style: {
                                    fontSize: titleSize,
                                    margin: '10px 0',
                                    fontWeight: 600,
                                    color: '#333',
                                }
                            }),
                            h(View, {
                                style: {display: 'block'},
                                html: text.length > textLimit ?
                                    text.slice(0, textLimit) + ' . . .' : text,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
}