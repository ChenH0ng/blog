import {ajax,} from '../util';
import {publicPath} from '../configs';

const url = publicPath + '/posts';

export default {
	limit: 5,
	gets(opt = {}){
		const {skip = 0, limit = this.limit,}=opt;
		return ajax({
			url: `${url}?sp=${skip}&lt=${limit}`,
		})
			.then(result => ({
				code: result.ce,
				posts: result.da,
			}));
	},
	post(data = {}){
		return ajax({
			url,
			method: 'post',
			json: JSON.stringify(data),
		})
			.then(result => ({code: result.ce}));
	},
};