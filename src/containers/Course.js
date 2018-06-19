import React, { Component } from "react";
import ReactDOM from "react-dom";
import domtoimage from "dom-to-image";
import {connect} from 'react-redux';

import { png,jpeg} from "../lib/export";
import {CourseComponent} from '../components';
import { mainCourses } from "../selectors/courses";
import { dashBoardCoursesCampus,facultyCourse} from "../actions";

class Course extends Component {
    state = {
    cate: "Chiangmai",
    anchorEl: null
  };
  componentDidMount() {

    this.props.dispatch(dashBoardCoursesCampus());
    this.props.dispatch(facultyCourse());
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
    Campus: state.DashBoardCoursesReducers,
    Faculty: state.FacuntyCoursesReducers
  };
};


export default connect(mapStateToProps)(Course);
