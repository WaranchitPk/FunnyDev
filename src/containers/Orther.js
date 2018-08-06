import React, { Component } from 'react';
import { OrtherStatComponent } from '../components';
import { connect } from 'react-redux';
import {
  chiangmai,
  find,
} from '../actions/Orhter';

class OrtherStat extends Component {
  state = {
    type: 6,
    rating: 10,
    rowsPerPage: 5,
    page: 0,
  };

  componentDidMount() {
    // this.props.dispatch(chiangmai(this.state.type, this.state.rating));
    const data = {
      limit: this.state.rating,
      campus: this.state.type,
    };
    this.props.dispatch(find(data));
  }

  ChangeCampus = () => {
    // console.log(this.state.type,this.state.rating)
    const data = {
      limit: this.state.rating,
      campus: this.state.type,
    };
    this.props.dispatch(find(data));
    this.props.dispatch(chiangmai(this.state.type, this.state.rating));
  };

  handleSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
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
          data={this.props.resultFind}
          dataCourse={dataCourse}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    cmData: state.ChiangmaiCorse,
    resultFind: state.FindRatingCourse,
  }
);

export default connect(mapStateToProps)(OrtherStat);
