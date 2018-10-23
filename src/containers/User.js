import React, {Component} from "react";
import {connect} from "react-redux";
import {UserComponent} from "../components";
import moment from "moment";
import {
    y2018Action,
    findValueYear,
    findValueMonth,
    UserViewFindMonthData,
    UserViewFindDayData,
    UserUseFindMonthData,
    UserUseFindDayData,
    UserViewFindSumYear,
    UserUseFindTrain
} from "../actions";
import axios from "axios";
import {api} from "../config";


class User extends Component {
    state = {
        valueBtNavigateUserView: "",
        valueBtNavigateUserUse: "",
        yearValueViewYear: +moment().format("YYYY"),
        yearUserUse: +moment().format("YYYY"),
        quarter: 1,
        showMonth: 3,
        month: 1,
        valueTabs: 0,
        rowsPerPage: 5,
        page: 0,
        yearAndMonth: +moment().format("YYYY"),
        yearAll: +moment().format("YYYY")
    };

    componentDidMount() {
        const getCurrentYear = +moment().format("YYYY");
        this.props.dispatch(findValueYear(getCurrentYear));
        this.props.dispatch(UserUseFindTrain(this.state.yearAll))
        // this.props.dispatch(FindValueMonth(this.state.year));
        // console.log('asffff'

    }

    ChangeValueFormYear = () => {
        this.props.dispatch(y2018Action(this.state.year));
    };

    handleSelect = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    //tab change
    handleTabsChange = (event, value) => {
        const {yearValueViewYear,yearUserUse,yearAll} = this.state;
        this.setState({
            valueTabs: value
        });
        if (value === 0) {
            this.props.dispatch(UserViewFindMonthData(yearValueViewYear));
        } else {
            this.props.dispatch(UserUseFindMonthData(yearAll));
        }
    };
    //set value year on select
    handleSelectYear = ({target: {value}}) => {
        console.log('select')
        this.setState({
            yearValueViewYear: value
        });
    };
    handleSelectYearUserUse = ({target: {value}}) => {
        console.log('select USer Use Month')
        this.setState({
            yearUserUse: value
        });
    };
    handleSelectYearAndMonth = ({target: {value}}) => {
        console.log('selectYear ')
        this.setState({
            yearAndMonth: value
        })
        this.props.dispatch(findValueMonth(value));
    }

    //submitSelectYear To Show Month Chart
    handleSubmitYearUserView = () => {
        if (this.state.valueTabs === 0) {
            this.props.dispatch(UserViewFindMonthData(this.state.yearValueViewYear));
        } else {
            this.props.dispatch(UserUseFindMonthData(this.state.yearUserUse));
        }
    };
    //set value month && year
    handleSelectYearUserViewDays = ({target: {value}}) => {
        this.setState({
            yearAndMonth: value
        });
        this.props.dispatch(findValueMonth(value));
    };
    handleSelectMonthUserViewDays = ({target: {value}}) => {
        this.setState({
            month: value
        });
    };
    //submitSelectYearAndMonth To Show Month Chart
    handleSubmitUserViewDays = () => {
        const {yearAndMonth, month} = this.state;
        if (this.state.valueTabs === 0) {
            this.props.dispatch(UserViewFindDayData(yearAndMonth, month));
        } else {
            this.props.dispatch(UserUseFindDayData(yearAndMonth, month));
        }
    };

    //change Bt Navigate User View
    handleChangeBtNavigateUserView = (event, value) => {
        const {year, month, yearAll} = this.state;

        this.setState({
            valueBtNavigateUserView: value,
            valueBtNavigateUserUse: ""
        });
        if (value === 0) {
            const getYearNow = +moment().format("YYYY");
            this.props.dispatch(UserViewFindSumYear(getYearNow));
        } else if (value === 1) {
            // this.props.dispatch(UserViewFindMonthData(this.state.yearAll));
            // this.props.dispatch(UserViewFindMonthData(this.state.yearAll));
            // this.props.dispatch(FindValueYear());
        } else if (value === 2) {
            this.props.dispatch(findValueMonth(yearAll));
            axios.get(`${api}/users/userview/findMonth/${yearAll}/${month}`)
            this.props.dispatch(UserViewFindDayData(yearAll, month));
            // this.props.dispatch(FindValueYear());
        }
    };
    //change Bt Navigate User Use
    handleChangeBtNavigateUserUse = (event, value) => {
        this.setState({
            valueBtNavigateUserUse: value,
            valueBtNavigateUserView: ""
        });
        if (value === 0) {
            this.props.dispatch(UserViewFindMonthData(this.state.yearAll));
            // this.props.dispatch(FindValueYear());
        } else if (value === 1) {
            console.log('select show month')
            // this.props.dispatch(UserUseFindView(this.state.yearAll));
            // this.props.dispatch(FindValueYear());
        } else if (value === 2) {
            this.props.dispatch(findValueMonth(this.state.yearAll));
            this.props.dispatch(UserUseFindDayData(this.state.yearAll, this.state.month));
            // this.props.dispatch(FindValueYear());
        }
    };
    //change page in result card UserViewDays
    handleChangePageUserView = (event, page) => {
        this.setState({page});
    };
    //change row per page in in result card UserViewDays
    handleChangeRowsPerPageUserView = event => {
        this.setState({rowsPerPage: event.target.value});
    };

    render() {
        const {UserViewdataMonth, valueYear, valueMonth, UserViewdataDay, UserUsedataMonth, UserUsedataDay, sumYearUse, UserUse_FindTrain} = this.props;
        console.log('stater',UserUsedataMonth)
        return (
            <div>
                <UserComponent
                    {...this.state}
                    onSubmit={this.ChangeValueFormYear}
                    onSelect={this.handleSelect}
                    dataMonthChart={UserViewdataMonth}
                    changeTabs={this.handleTabsChange}
                    changeBtNavigateUserView={this.handleChangeBtNavigateUserView}
                    changeBtNavigateUserUse={this.handleChangeBtNavigateUserUse}
                    valueYear={valueYear}
                    selectYear={this.handleSelectYear}
                    submitSelectYear={this.handleSubmitYearUserView}
                    valueUserViewDaysMonth={valueMonth}
                    selectUserViewDaysYear={this.handleSelectYearUserViewDays}
                    selectUserViewDaysMonth={this.handleSelectMonthUserViewDays}
                    submitSelectUserViewDays={this.handleSubmitUserViewDays}
                    dataDayChart={UserViewdataDay}
                    onChangePageTableInResultCardUserViewDays={this.handleChangePageUserView}
                    onChangeRowPerPageTableInResultCardUserViewDays={this.handleChangeRowsPerPageUserView}
                    dataMonthChartUserUse={UserUsedataMonth}
                    dataDayChartUserUse={UserUsedataDay}
                    resultSumUserView={sumYearUse}
                    resultSumTrainUserUse={UserUse_FindTrain}
                    selectYearAndMonth={this.handleSelectYearAndMonth}
                    yearValueViewYear={this.state.yearValueViewYear}
                    selectYearUserUse={this.handleSelectYearUserUse}
                    yearValueUseYear={this.state.yearUserUse}/>
            </div>
        );
    }
}


const mapStateToProps = state => (
    {
        valueMonth: state.FindValueMonth.data,
        valueYear: state.FindValueYear.data,
        UserViewdataDay: state.UserViewFindChooseMonth.data,
        UserViewdataMonth: state.UserViewFindChooseYear.data,
        UserUsedataMonth: state.UserUseFindChooseYear.data,
        UserUsedataDay: state.UserUseFindChooseMonth.data,
        sumYearUse: state.UserViewFindSumYear.data,
        UserUse_FindTrain: state.UserUseFindTrain.data
    }
);
export default connect(mapStateToProps)(User);
