import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Grid, Tabs, Tab } from "@material-ui/core";

const styles = {
  AppBar: {
    backgroundColor: "#F8B117"

  },
  root: {
    flexGrow: 1
  },
  subheading: {
    marginLeft: 20
  }
};

class Header extends Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div style={styles.root}>
        <AppBar position="static" style={styles.AppBar}>
          <Toolbar>
            <Typography variant="title" style={styles.subheading}>
              Title
            </Typography>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              scrollable
              scrollButtons="auto"
            >
              <Tab label="Home" component={Link} to={"/"}/>
              <Tab label="Course Analytic" component={Link} to={"/course_analytic"}/>
              <Tab label="User Analytic" component={Link} to={"/user_analytic"}/>
              <Tab label="Orther" component={Link} to={"/orther_stat"}/>
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
