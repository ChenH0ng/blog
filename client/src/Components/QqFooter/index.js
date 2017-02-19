import h from '../../h';
import {Component} from 'react';
import Container from '../Container';
import PlatformLink from './PlatformLink';
import Link from './Link';
import Label from './Label';
import List from './List';
import View from '../View';

export default class QqFooter extends Component {
	static PlatformLink = PlatformLink;
	static Link = Link;
	static Label = Label;
	static List = List;
	
	render() {
		const {children,}=this.props;
		return h(Container, {
			style: {
				height: 382,
				backgroundColor: '#2a2a2a',
				color: '#666',
				flexDirection: 'column',
				alignItems: 'center',
				fontSize: 12,
			},
			children: h('div', {
				style: {
					height: 255.4,
					width: 960,
					marginTop: 34,
				},
				children: [
					children,
					h('div', {
						style: {
							borderTop: '.8px solid rgb(102, 102, 102)',
							flexDirection: 'column',
							alignItems: 'center',
							paddingTop: 16,
							textAlign: 'center',
						},
						children: [
							<div>Copyright © 1998- 2017 Tencent. All Rights Reserved.</div>,
							<div>腾讯公司 版权所有</div>,
						],
					}),
				]
			}),
		});
	}
}