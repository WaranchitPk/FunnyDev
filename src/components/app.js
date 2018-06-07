import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import { Header ,Footer} from "../layout";
import { Route ,Switch} from "react-router-dom";
import { HomeContainers,CourseContainer,UserContainer,OrtherStatContainer} from "../containers";

class App extends Component {

  render() {
    return (
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
  }
}

export default App;
