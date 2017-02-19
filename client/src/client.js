/**
 * Created by Exper1ence on 2016/12/30.
 */
import 'babel-polyfill';
import {render} from 'react-dom';
import 'normalize.css';
import Router from './Router';
import h from './h';
import {signIn, refreshPosts,} from './behaviors';

render(<Router/>, document.getElementById('app'));