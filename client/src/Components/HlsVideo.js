import h from '../h';
import Hls from 'hls.js';
import {Component} from 'react';

export default class HlsVideo extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        if(Hls.isSupported()){
            const hls = new Hls();
            hls.loadSource(this.props.src);
            hls.attachMedia(this.refs.video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => this.refs.video.play());
        }
    }
    
    render() {
        return h('video', {
                controls: !0,
                ref: 'video',
            }
        );
    };
}