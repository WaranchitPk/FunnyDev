import React from 'react';
import { Grid } from '@material-ui/core';
import {hot} from 'react-hot-loader';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../layout/Header';
import Loadable from 'react-loadable';

// const Header = Loadable({
//   loader: () => import('../layout/Header'),
//   loading: () => null,
// });

const Home = Loadable({
  loader: () => import('../containers/Home'),
  loading: () => null,
});
const Course = Loadable({
  loader: () => import('../containers/Course'),
  loading: () => null,
});
const User = Loadable({
  loader: () => import('../containers/User'),
  loading: () => null,
});
const Orther = Loadable({
  loader: () => import('../containers/Orther'),
  loading: () => null,
});
const App = () => (
  <div>
    {/*Header*/}
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Header/>
      </Grid>
    </Grid>
    {/*Body*/}
    <Grid container alignContent="center">
      <Grid item xs={12} sm={12}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/course_analytic' component={Course}/>
          <Route path='/user_analytic' component={User}/>
          <Route path='/orther_stat' component={Orther}/>
        </Switch>
      </Grid>
    </Grid>
    {/*Footer*/}
    {/*<Footer />*/}
  </div>
);


export default hot(module)(App)
