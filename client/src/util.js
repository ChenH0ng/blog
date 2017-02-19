export function isFunction(func) {
	return typeof func === 'function';
}
export function isString(str) {
	return typeof str === 'string';
}
export function isArray(arr) {
	return arr instanceof Array;
}
export function isPlain(obj) {
	return typeof obj === 'object';
}
export function forOwn(obj, cb) {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			cb(prop, obj[prop]);
		}
	}
}
export function isNumber(num) {
	return typeof num === 'number';
}
export const emptyFunction = () => null;

export class Timer {
	get left() {
		return Math.max(0, this._end - Date.now());
	}
	
	get isUp() {
		return Date.now() - this._start >= this._duration;
	}
	
	constructor(_duration) {
		Object.assign(this, {
			_start: 0,
			_duration,
			_end: _duration,
		});
	}
	
	start() {
		this._start = Date.now();
		this._end = this._duration + this._start;
	}
}
export function ajax({url, method = 'GET', json,}) {
	return new Promise((resolve, reject) => {
		let xhr;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		}
		else {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
			console.log(xhr)
		}
		if (xhr) {
			xhr.open(method.toUpperCase(), url, true);
			if (json) {
				xhr.setRequestHeader("Content-type", "application/json");
			}
			else {
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			}
			xhr.onload = () => {
				if (xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				}
				else {
					reject(xhr.status);
				}
			};
			xhr.send(json);
		}
	});
}
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 25;
const YEAR = DAY * 365;

function ifGreaterOne(diff, kind) {
	if (diff > 1) {
		return `${diff} ${kind}s ago`;
	}
	return `${diff} ${kind} ago`;
}

export const getAgoString = then => {
	const now = Date.now();
	if (then > now - MINUTE) {
		return ifGreaterOne(Math.floor((now - then) / SECOND), 'second');
	}
	else if (then > now - HOUR) {
		return ifGreaterOne(Math.floor((now - then) / MINUTE), 'minute');
	}
	else if (then > now - DAY) {
		return ifGreaterOne(Math.floor((now - then) / HOUR), 'hour');
	}
	else if (then > now - YEAR) {
		return ifGreaterOne(Math.floor((now - then) / DAY), 'day');
	}
	else {
		return ifGreaterOne(Math.floor((now - then) / YEAR), 'year');
	}
};
export const getScrollTop = () => {
	return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
};
export const setScrollTop = top => {
	document.documentElement.scrollTop = top;
	document.body.scrollTop = top;
};
export function scrollToTop(delay = 0) {
	const timer = new Timer(delay);
	const scale = delay === 0 ? 0 : getScrollTop() / delay;
	const scroll = () => {
		setScrollTop(timer.left * scale);
		if (getScrollTop() > 0)
			requestAnimationFrame(scroll);
	};
	timer.start();
	requestAnimationFrame(scroll);
}
import {browserHistory,} from 'react-router';
export const getPathname = () => {
	return browserHistory.getCurrentLocation().pathname.toLowerCase();
};
export const url = (url) => {
	return `url(${url})`;
};