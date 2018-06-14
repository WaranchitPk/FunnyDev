import React, { Component } from "react";
import {OrtherStatComponent} from '../components';
import { connect } from "react-redux";
import { chiangmai } from "../actions/Orhter";

class OrtherStat extends Component {
  state = {
    type: 1,
    rating: 10,
    rowsPerPage: 5,
    page: 0
  };
  componentDidMount() {
    this.props.dispatch(chiangmai(this.state.type, this.state.rating));
  }
  ChangeCampus = () => {
    // console.log(this.state.type,this.state.rating)
    this.props.dispatch(chiangmai(this.state.type, this.state.rating));
  };
  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChangePage = (event, page) =>{
    this.setState({ page });
  };
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  render() {
    const { cmData: { dataCourse } } = this.props;
    return (
      <div>
        <OrtherStatComponent
          onSelect={this.handleSelect}
          {...this.state}
          onSubmit={this.ChangeCampus}
          onChangePage={this.handleChangePage}
          onChangeRow={this.handleChangeRowsPerPage}
          dataCourse={dataCourse}/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    cmData: state.ChiangmaiCorse
  };
};

export default connect(mapStateToProps)(OrtherStat);
