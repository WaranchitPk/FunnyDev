import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import domtoimage from 'dom-to-image';
import { connect } from 'react-redux';

import {
  png,
  jpeg,
} from '../lib/export';
import { CourseComponent } from '../components';
import {
  dashBoardCoursesCampus,
  facultyCourse,
} from '../actions';

class Course extends Component {
  state = {
    cate: 'Chiangmai',
    anchorEl: null,
    valueTabs: 0,
  };

  componentDidMount() {
    this.props.dispatch(dashBoardCoursesCampus());
    this.props.dispatch(facultyCourse());
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  //change Tab
  handleChangeTab = (event, value) => {
    this.setState({ valueTabs: value });
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
  }
);


export default connect(mapStateToProps)(Course);
