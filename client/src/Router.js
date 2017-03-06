import {Router, browserHistory, Route, IndexRoute, Redirect,} from 'react-router';
import {Provider,} from 'react-redux';
import store from './store';
import h from './h';
import {BlogLayout, QqLayout,} from './Layouts';

export default () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Redirect from='/' to='blog'/>
      <Route path='blog' onEnter={BlogLayout.init} component={BlogLayout.Wrapper}>
        <IndexRoute component={BlogLayout.IndexPage}/>
        <Route path='sign' component={BlogLayout.SignInPage}/>
        <Route path='user' component={BlogLayout.UserPage}/>
        <Route path='about' component={BlogLayout.AboutPage}/>
        <Route path='post' component={BlogLayout.PostPage}/>
        <Route path='writing' component={BlogLayout.WritingPage}/>
        <Route path='test' component={BlogLayout.TestPage}/>
      </Route>
      <Route path='qq' component={QqLayout.Wrapper}>
        <IndexRoute component={QqLayout.IndexPage}/>
      </Route>
    </Router>
  </Provider>
);