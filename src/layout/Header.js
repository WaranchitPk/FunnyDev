import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import BannerHome from "../layout/Banner/Home";

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
  render() {
    return (
      <div style={styles.root}>
        <AppBar position="static" style={styles.AppBar}>
          <Toolbar>
            <Typography variant="title" style={styles.subheading}>
              Title
            </Typography>
            <Typography variant="subheading">
              <Button component={Link} to={"/"}>
                Home
              </Button>
            </Typography>
            <Typography variant="subheading">
              <Button component={Link} to={"/course_analytic"}>
                Course Analytic
              </Button>
            </Typography>
            <Typography variant="subheading">
              <Button component={Link} to={"/user_analytic"}>
                User Analytic
              </Button>
            </Typography>
            <Typography variant="subheading">
              <Button component={Link} to={"/orther_stat"}>
                Orther
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
