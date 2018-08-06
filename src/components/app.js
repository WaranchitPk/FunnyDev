import React from 'react';
import { Grid } from '@material-ui/core';
import { Header } from '../layout';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {
  HomeContainers,
  CourseContainer,
  UserContainer,
  OrtherStatContainer,
} from '../containers';

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
          <Route exact path='/' component={HomeContainers}/>
          <Route path='/course_analytic' component={CourseContainer}/>
          <Route path='/user_analytic' component={UserContainer}/>
          <Route path='/orther_stat' component={OrtherStatContainer}/>
        </Switch>
      </Grid>
    </Grid>
    {/*Footer*/}
    {/*<Footer />*/}
  </div>
);


export default App;
