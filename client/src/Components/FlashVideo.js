import h from '../h';
import {Component} from 'react';

export default class FlashVideo extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const {src,}=this.props;
		return h('object', {
			type: 'application/x-shockwave-flash',
			data: src,
			style: {
				width: 950,
				height: 482,
				backgroundColor:'red',
			},
			children: [
				<param name="movie" value="//static.youku.com/v20170210.0/v/swf/loader.swf"/>,
				<param name="quality" value="high"/>,
				<param name="allowfullscreeninteractive" value="true"/>,
				<param name="allowfullscreen" value="true"/>,
				<param name="allowscriptaccess" value="always"/>,
				<param name="flashvars" value="cid=14010327&amp;aid=8509845&amp;pre_ad=0"/>,
			],
	});
	}
}