import {ajax,} from '../util';
import {publicPath,} from '../configs';

const url = publicPath + '/session';

export default {
	get(){
		return ajax({url,})
			.then(result => ({
				code: result.ce,
				user: result.da,
			}));
	},
	delete(){
		return ajax({
			url,
			method: 'delete',
		})
			.then(result => ({
				code: result.ce,
			}));
	},
	post(data = {}){
		return ajax({
			url,
			method: 'post',
			json: JSON.stringify(data),
		})
			.then(result => ({
				code: result.ce,
				user: result.da,
			}));
	},
};