import React, {Component} from "react";
import {HomeComponent} from "../components";
import {connect} from "react-redux";
import {
    DashBoardAction,
    dashBoardCoursesCampus,
    findGraphtrain, UserUseFindTrain
} from "../actions";
import moment from "moment";
import axios from 'axios';
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
const arr1 = [
    {
        id: 1,
        value: 2
    }
];
const arr2 = [
    {
        id: 2,
        value: 3
    }
]
const arr3 = [];
const result = arr3.concat(arr3, arr1, arr2)

class Home extends Component {
    state = {
        year: moment().format("YYYY")
    };

    componentDidMount() {
        const {year} = this.state;
        this.props.dispatch(DashBoardAction());
        this.props.dispatch(dashBoardCoursesCampus());
        this.props.dispatch(findGraphtrain(year));
        this.props.dispatch(UserUseFindTrain(this.state.yearAll))
    }

    render() {
        const {DashBData, Campus, TrainAllCampus, UserUse_FindTrain} = this.props;
        let resultTrainAllCampus = [];
        let resultAllDataShowChartCompare = [];
        if (TrainAllCampus !== null && TrainAllCampus !== undefined) {
            resultTrainAllCampus = resultTrainAllCampus.concat(arrDataCourseAnalytic, TrainAllCampus.data.result);
            resultTrainAllCampus.map((value, index) => {
                value.countUserUse = arrDataUserUse[index].CountYear;
                resultAllDataShowChartCompare = value;

            });
        }
        let resultTrainCourseAndUserUse = []
        // if (TrainAllCampus !== null && TrainAllCampus != undefined) {
        //     TrainAllCampus.data.result.slice(1).map((value, index) => {
        //         // console.log('aaa',UserUse_FindTrain.data.result[index].sumUser)
        //         value.countUserUse = UserUse_FindTrain.data.result[index].sumUser
        //         resultTrainCourseAndUserUse = value
        //     })
        // }
        return (
            <div>
                <HomeComponent
                    data={DashBData}
                    CourseAnalyticData={Campus}
                    mockDataCourseAnalytic={arrDataCourseAnalytic}
                    mockDataUserUse={arrDataUserUse}
                    CompareUserUseAndCourse={resultTrainAllCampus}
                    compareUserTrainAndTrainCours={resultTrainCourseAndUserUse}
                    UserUseTrain={UserUse_FindTrain}
                    CourseTrain={TrainAllCampus}/>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        DashBData: state.DashBoardReducer,
        Campus: state.DashBoardCoursesReducers,
        TrainAllCampus: state.FindCourseAllCampusGraph.data,
        UserUse_FindTrain: state.UserUseFindTrain.data
    }
);

export default connect(mapStateToProps)(Home);
