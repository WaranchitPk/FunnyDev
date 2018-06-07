import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Paper,
  Typography,
  Grid
} from "@material-ui/core";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { HomeBanner } from "../layout";
import {DashBoardAction} from '../actions'
import {connect} from 'react-redux';
const styles = {};

class Home extends Component {

  // SavePng = () => {
  //   let chartSVG = ReactDOM.findDOMNode(this.currentChart);
  //   let svgURL = new XMLSerializer().serializeToString(chartSVG);
  //   // let svgBlob = new Blob([svgURL], {type: "image/svg+xml;charset=utf-8"});
  //   // SaveFile.saveAs(svgBlob,'test.svg')
  //   png.saveSvgAsPng(chartSVG, "test.png");
  //   console.log(svgURL);
  // };

  componentDidMount(){
    this.props.dispatch(DashBoardAction())
  }
  render() {
    const {DashBData: {data1,data2}} = this.props;
    return (
      <div>
        <HomeBanner/>
        <Grid container spacing={24}>
          <Grid item sm={6} xs={12}>
            <Paper>
              <Typography variant="title" align="center">
                Teacher
              </Typography>
              <ResponsiveContainer width='100%' aspect={2}>
                <BarChart
                  data={data1}
                  id="teacherChart"
                  ref={(chart) => this.currentChart = chart}>
                  <CartesianGrid strokeDasharray="3 3" id='1'/>
                  <XAxis dataKey="uv"/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="uv" fill="#8884d8"/>
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper>
              <Typography variant="title" align="center">
                Student
              </Typography>
              <ResponsiveContainer width='100%' aspect={2}>
                <BarChart width={200} height={100} data={data2}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="uv"/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="uv" fill="#8884d8"/>
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
    DashBData: state.DashBoardReducer
  }
}
export default connect(mapStateToProps)(Home);
