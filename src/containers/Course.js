import React, { Component } from "react";
import ReactDOM from "react-dom";
import domtoimage from "dom-to-image";
import { connect } from "react-redux";

import moment from "moment";
import {
  png,
  jpeg
} from "../lib/export";
import { CourseComponent } from "../components";
import {
  dashBoardCoursesCampus,
  facultyCourse,
  findGraphtrain,
  findEachGraph
} from "../actions";


class Course extends Component {
  state = {
    cate: "Chiangmai",
    anchorEl: null,
    valueTabs: 0,
    year: moment().format("YYYY")
  };

  componentDidMount() {
    this.props.dispatch(dashBoardCoursesCampus());
    this.props.dispatch(facultyCourse());
    this.props.dispatch(findGraphtrain(this.state.year));
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  //change Tab
  handleChangeTab = (event, value) => {
    const { dispatch } = this.props;
    this.setState({ valueTabs: value });
    if (value === 1) {
      dispatch(findEachGraph(value, this.state.year));
    } else if (value === 2) {
      dispatch(findEachGraph(value, this.state.year));
    } else if (value === 3) {
      dispatch(findEachGraph(value, this.state.year));
    } else if (value === 4) {
      dispatch(findEachGraph(value, this.state.year));
    } else if (value === 5) {
      dispatch(findEachGraph(value, this.state.year));
    } else if (value === 6) {
      dispatch(findEachGraph(value, this.state.year));
    }
  };

  //export
  SavePng() {
    let chartSVG = ReactDOM.findDOMNode(this.currentChart);
    png(chartSVG, domtoimage);
    this.setState({ anchorEl: null });
  }

  SaveJpeg() {
    this.setState({ anchorEl: null });
    const chartSVG = ReactDOM.findDOMNode(this.currentChart);
    jpeg(chartSVG, domtoimage);
  }

  render() {
    console.log('result',this.props.TrainAllCampus);
    return (
      <div>
        <CourseComponent
          {...this.props}
          {...this.state}
          changeTab={this.handleChangeTab}
          OpenPopup={this.handleClick}
          ClosePopup={this.handleClose}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    Campus: state.DashBoardCoursesReducers,
    Faculty: state.FacuntyCoursesReducers,
    TrainAllCampus: state.FindCourseAllCampusGraph.data,
    TrainEachCampus: state.FindCourseEachCampusGraph.data
  }
);


export default connect(mapStateToProps)(Course);
