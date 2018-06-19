import React, { Component } from "react";
import ReactDOM from "react-dom";
import domtoimage from "dom-to-image";
import {connect} from 'react-redux';

import { png,jpeg} from "../lib/export";
import {CourseComponent} from '../components';
import { mainCourses } from "../selectors/courses";
import { MainCourse, StatFaculty } from "../actions";
import {dashBoardCoursesCampus} from '../actions'

class Course extends Component {
    state = {
    cate: "Chiangmai",
    anchorEl: null
  };
  componentDidMount() {
    this.props.dispatch(MainCourse());
    this.props.dispatch(StatFaculty());
    this.props.dispatch(dashBoardCoursesCampus())
  }
    handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
    handleClose = () => {
    this.setState({ anchorEl: null });
  };
    SavePng(){
    let chartSVG = ReactDOM.findDOMNode(this.currentChart);
    png(chartSVG, domtoimage);
    this.setState({ anchorEl: null });
  };
  SaveJpeg(){
    this.setState({ anchorEl: null });
    let chartSVG = ReactDOM.findDOMNode(this.currentChart);
    jpeg(chartSVG,domtoimage)
  };
  render() {
    console.log(this.props.Campus.dataT);
    return (
      <div>
        <CourseComponent
          {...this.props}
          {...this.state}
          OpenPopup ={this.handleClick}
          ClosePopup={this.handleClose}
          ExToPng={this.SavePng}
          ExToJpg={this.SaveJpeg}/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    stat: mainCourses(state),
    fStat: state.Faculty,
    Campus: state.DashBoardCoursesReducers
  };
};


export default connect(mapStateToProps)(Course);
