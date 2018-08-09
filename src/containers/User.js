/* eslint-disable no-undef */
import React, { Component } from "react";
import { connect } from "react-redux";
import { UserComponent } from "../components";
import moment from "moment";
import {
  y2018Action,
  findYear,
  findValueYear,
  findValueMonth,
  findMonth
} from "../actions";

class User extends Component {
  state = {
    valueBtNavigate: "",
    year: +moment().format("YYYY"),
    quarter: 1,
    showMonth: 3,
    month: 1,
    valueTabs: 0,
    rowsPerPage: 5,
    page: 0
  };

  componentDidMount() {
    this.props.dispatch(findValueYear());
    // this.props.dispatch(findValueMonth(this.state.year));

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
    this.setState({
      valueTabs: value
    });
  };
  // //open Dialog Change Year
  // handleOpenDialogChangeYear = () => {
  //   this.setState({
  //     isOpenDialogChangeYear: true
  //   });
  //
  // };
  // //close Dialog Change Year
  // handleCloseDialogChangeYear = () => {
  //   this.setState({
  //     isOpenDialogChangeYear: false
  //   });
  // };
  //set value year on select
  handleSelectYear = ({ target: { value } }) => {
    this.setState({
      year: value
    });
  };
  //submitSelectYear To Show Month Chart
  handleSubmitYear = () => {
    this.props.dispatch(findYear(this.state.year));

  };
  // //open Dialog Change Month
  // handleOpenDialogChangeMonth = () => {
  //   this.setState({
  //     isOpenDialogChangeMonth: true
  //   });
  //   this.props.dispatch(findValueMonth(this.state.year));
  //   // this.props.dispatch(findValueMonth(this.state.year));
  // };
  // //close Dialog Change Month
  // handleCloseDialogChangeMonth = () => {
  //   this.setState({
  //     isOpenDialogChangeMonth: false
  //   });
  // };
  //set value month && year
  handleSelectYearUserViewDays = ({ target: { value } }) => {
    this.setState({
      year: value
    });
    this.props.dispatch(findValueMonth(value));
  };
  handleSelectMonthUserViewDays = ({ target: { value } }) => {
    this.setState({
      month: value
    });
  };
  //submitSelectYearAndMonth To Show Month Chart
  handleSubmitUserViewDays = () => {
    const { year, month } = this.state;
    this.props.dispatch(findMonth(year, month));
  };

  //change Bt Navigate
  handleChangeBtNavigate = (event, value) => {
    const { year, month } = this.state;
    this.setState({ valueBtNavigate: value });
    if (value === 0) {
      this.props.dispatch(findYear(year));
      // this.props.dispatch(findValueYear());
    } else if (value === 1) {
      this.props.dispatch(findValueMonth(year));
      this.props.dispatch(findMonth(year, month));
      // this.props.dispatch(findValueYear());

    }
  };
  //change page in result card UserViewDays
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  //change row per page in in result card UserViewDays
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { dataMonth, valueYear, valueMonth, dataDay } = this.props;
    console.log("month", valueMonth);
    return (
      <div>
        <UserComponent
          {...this.state}
          onSubmit={this.ChangeValueFormYear}
          onSelect={this.handleSelect}
          dataMonthChart={dataMonth}
          changeTabs={this.handleTabsChange}
          changeBtNavigate={this.handleChangeBtNavigate}
          // openDialogChangeYear={this.handleOpenDialogChangeYear}
          // closeDialogChangeYear={this.handleCloseDialogChangeYear}
          valueYear={valueYear}
          selectYear={this.handleSelectYear}
          submitSelectYear={this.handleSubmitYear}
          valueUserViewDaysMonth={valueMonth}
          // openDialogChangeMonth={this.handleOpenDialogChangeMonth}
          // closeDialogChangeMonth={this.handleCloseDialogChangeMonth}
          selectUserViewDaysYear={this.handleSelectYearUserViewDays}
          selectUserViewDaysMonth={this.handleSelectMonthUserViewDays}
          submitSelectUserViewDays={this.handleSubmitUserViewDays}
          dataDayChart={dataDay}
          onChangePageTableInResultCardUserViewDays={this.handleChangePage}
          onChangeRowPerPageTableInResultCardUserViewDays={this.handleChangeRowsPerPage}/>
      </div>
    );
  }
}


const mapStateToProps = state => (
  {
    dataDay: state.findChooseMonth.data,
    valueMonth: state.findValueMonth.data,
    valueYear: state.findValueYear.data,
    dataMonth: state.findChooseYear.data
  }
);
export default connect(mapStateToProps)(User);
