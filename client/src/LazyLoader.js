import h from './h';
import {Component} from 'react';
import Container from './Components/Container';
import AppLoading from './Components/AppLoading';

export default class LazyLoader extends Component {
	state = {app: null, enabled: !0};
	
	componentDidMount() {
		System.import('./set')
			.then(({ProjectComponents}) => {
				const {App}=ProjectComponents;
				this.setState({app: <App/>});
				this.setState({enabled: !!0});
			});
	}
	
	render = () => h(Container, {
		style: {position: 'relative',},
		children: [
			h(AppLoading, {enabled: this.state.enabled}),
			this.state.app,
		],
	});
};