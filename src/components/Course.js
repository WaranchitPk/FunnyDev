import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { CourseBanner } from "../layout";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import {
  Grid,
  Paper,
  Typography,
  MenuItem,
  Menu
} from "@material-ui/core";
import { connect } from "react-redux";
import domtoimage from "dom-to-image";
import { png,jpeg} from "../lib/export";
import { MainCourse, StatFaculty } from "../actions";
import { mainCourses } from "../selectors/courses";

const styles = {
  dashboardAllCampus: {
    marginTop: "5%"
  },
  campusSelect: {
    textAlign: "center"
  }
};

class Course extends Component {
  state = {
    cate: "Chiangmai",
    anchorEl: null
  };

  componentDidMount() {
    this.props.dispatch(MainCourse());
    this.props.dispatch(StatFaculty());
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  SavePng = () => {
    let chartSVG = ReactDOM.findDOMNode(this.currentChart);
    png(chartSVG, domtoimage);
    this.setState({ anchorEl: null });
  };
  SaveJpeg = () => {
    this.setState({ anchorEl: null });
    let chartSVG = ReactDOM.findDOMNode(this.currentChart);
    jpeg(chartSVG,domtoimage)
  };

  render() {
    const { stat: { data }, fStat: { Fa1, Fa2, Fa3, Fa4 } } = this.props;
    const { anchorEl } = this.state;
    return (
      <div>
        <CourseBanner/>
        <Grid container style={styles.dashboardAllCampus}>
          <Grid item sm={12} xs={12}>
            <Paper elevation={5}>
              <Typography variant='title' align="center">
                Course Statics for each campus
              </Typography>
              <Button
                onClick={this.handleClick}>
                Export</Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.SaveJpeg}>Export: JPEG</MenuItem>
                <MenuItem onClick={this.SavePng}>Export: PNG</MenuItem>
              </Menu>
              <ResponsiveContainer width='100%' aspect={2}>
                <BarChart data={data}
                          ref={(chart) => this.currentChart = chart}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="uv" fill="#82ca9d"/>
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>

        {/*Total course Campus*/}
        <Grid container style={styles.dashboardAllCampus}>
          <Grid item sm={6} xs={12}>
            <Paper elevation={5}>
              <Typography variant='title' align="center">
                Total Course Statistic
              </Typography>
              <Typography variant='subheading' align="center">
                Fa1
              </Typography>
              <ResponsiveContainer width="100%" aspect={2}>
                <BarChart data={Fa1}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="value" fill="#8884d8"/>
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper elevation={5}>
              <Typography variant='title' align="center">
                Total Course Statistic
              </Typography>
              <Typography variant='title' align="center">
                Fa2
              </Typography>
              <ResponsiveContainer width='100%' aspect={2}>
                <BarChart width={200} height={100} data={Fa2}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="value" fill="#8884d8"/>
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>

        <Grid container style={styles.dashboardAllCampus}>
          <Grid item sm={6} xs={12}>
            <Paper elevation={5}>
              <Typography variant='title' align="center">
                Total Course Statistic
              </Typography>
              <Typography variant='subheading' align="center">
                Fa3
              </Typography>
              <ResponsiveContainer width='100%' aspect={2}>
                <BarChart width={200} height={100} data={Fa3}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="value" fill="#8884d8"/>
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper elevation={5}>
              <Typography variant='title' align="center">
                Total Course Statistic
              </Typography>
              <Typography variant='subheading' align="center">
                Fa4
              </Typography>
              <ResponsiveContainer width='100%' aspect={2}>
                <BarChart width={200} height={100} data={Fa4}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="value" fill="#8884d8"/>
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stat: mainCourses(state),
    fStat: state.Faculty
  };
}

export default connect(mapStateToProps)(Course);
