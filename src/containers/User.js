/* eslint-disable no-undef */
import React, { Component } from "react";
import { connect } from "react-redux";
import { UserComponent } from "../components";
import moment from "moment";
import {
  y2018Action,
  findYear,
  findValueYear
} from "../actions";

class User extends Component {
  state = {
    year: +moment().format("YYYY"),
    quarter: 1,
    showMonth: 3,
    monthValue: 1,
    valueTabs: 0,
    isOpenDialogChangeYear: false,
  };

  componentDidMount() {
    console.log(this.state.year);
    // this.props.dispatch(y2018Action(this.state.year));
    this.props.dispatch(findYear(this.state.year));
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
  //open Dialog Change Year
  handleOpenDialogChangeYear = () => {
    console.log('aaaasf');
    this.setState({
      isOpenDialogChangeYear: true,
    });
    this.props.dispatch(findValueYear());
  };
  //close Dialog Change Year
  handleCloseDialogChangeYear = () => {
    this.setState({
      isOpenDialogChangeYear: false
    });
  };
  //set value year on select
  handleSelectYear = ({ target: { value } }) => {
    this.setState({
      year: value
    });
  };
  //submitSelectYear To Show Month Chart
  handleSubmitYear = () => {
    this.props.dispatch(findYear(this.state.year));
    this.setState({
      isOpenDialogChangeYear: false,
    });
  };

  render() {
    console.log(this.props.dataMonth);
    return (
      <div>
        <UserComponent
          {...this.state}
          onSubmit={this.ChangeValueFormYear}
          onSelect={this.handleSelect}

          dataMonthChart={this.props.dataMonth}
          changeTabs={this.handleTabsChange}
          openDialogChangeYear={this.handleOpenDialogChangeYear}
          closeDialogChangeYear={this.handleCloseDialogChangeYear}
          valueYear={this.props.valueYear}
          selectYear={this.handleSelectYear}
          submitSelectYear={this.handleSubmitYear}/>
      </div>
    );
  }
}


const mapStateToProps = state => (
  {
    // data: state.Y2018Reducer,
    valueYear: state.findValueYear.data,
    dataMonth: state.findChooseYear.data
  }
);
export default connect(mapStateToProps)(User);
