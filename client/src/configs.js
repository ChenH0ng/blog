export const debug = process.env.NODE_ENV !== 'production';

export const publicPath = debug ? '//localhost' : '//139.196.50.70';