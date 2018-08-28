import React, { Component } from "react";
import { HomeComponent } from "../components";
import { connect } from "react-redux";
import {
  DashBoardAction,
  dashBoardCoursesCampus,
  findGraphtrain
} from "../actions";
import moment from "moment";

let arrDataCourseAnalytic = [
  {
    yearShow: 2009,
    countCourse: 100
  },
  {
    yearShow: 2010,
    countCourse: 150
  },
  {
    yearShow: 2011,
    countCourse: 200
  },
  {
    yearShow: 2012,
    countCourse: 230
  },
  {
    yearShow: 2013,
    countCourse: 220
  },
  {
    yearShow: 2014,
    countCourse: 350
  },
  {
    yearShow: 2015,
    countCourse: 120
  }
];

const arrDataUserUse = [
  {
    yearShow: 2009,
    CountYear: 1201
  },
  {
    Year: 2010,
    CountYear: 1209
  },
  {
    Year: 2011,
    CountYear: 1284
  },
  {
    Year: 2012,
    CountYear: 1283
  },
  {
    Year: 2013,
    CountYear: 1726
  },
  {
    Year: 2014,
    CountYear: 1009
  },
  {
    Year: 2015,
    CountYear: 985
  },
  {
    Year: 2016,
    CountYear: 1029
  },
  {
    Year: 2017,
    CountYear: 4012
  },
  {
    Year: 2018,
    CountYear: 3688
  }
];

class Home extends Component {
  state = {
    year: moment().format("YYYY")
  };

  componentDidMount() {
    const { year } = this.state;
    this.props.dispatch(DashBoardAction());
    this.props.dispatch(dashBoardCoursesCampus());
    this.props.dispatch(findGraphtrain(year));
  }

  render() {
    const { DashBData, Campus, TrainAllCampus } = this.props;
    let resultTrainAllCampus = [];
    let resultAllDataShowChartCompare = [];
    if (TrainAllCampus !== null && TrainAllCampus !== undefined) {
      resultTrainAllCampus = resultTrainAllCampus.concat(arrDataCourseAnalytic, TrainAllCampus.data.result);
      resultTrainAllCampus.map((value, index) => {
        value.countUserUse = arrDataUserUse[index].CountYear;
        resultAllDataShowChartCompare = value;
      });
    }
    return (
      <div>
        <HomeComponent
          data={DashBData}
          CourseAnalyticData={Campus}
          mockDataCourseAnalytic={arrDataCourseAnalytic}
          mockDataUserUse={arrDataUserUse}
          CompareUserUseAndCourse={resultTrainAllCampus}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    DashBData: state.DashBoardReducer,
    Campus: state.DashBoardCoursesReducers,
    TrainAllCampus: state.FindCourseAllCampusGraph.data
  }
);

export default connect(mapStateToProps)(Home);
