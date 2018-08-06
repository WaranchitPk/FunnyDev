/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserComponent } from '../components';
import { y2018Action } from '../actions';


class User extends Component {
  state = {
    year: 2018,
    quarter: 1,
    showMonth: 3,
    monthValue: 1,
  };

  componentDidMount() {
    this.props.dispatch(y2018Action(this.state.year));
    console.log('Hello');
  }

  ChangeValueFormYear = () => {
    this.props.dispatch(y2018Action(this.state.year));
  };
  handleSelect = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { data: { dataDefault, accessStat } } = this.props;

    return (
      <div>
        <UserComponent
          {...this.state}
          onSubmit={this.ChangeValueFormYear}
          onSelect={this.handleSelect}
          dashboardUser={dataDefault}
          accessUser={accessStat}/>
      </div>
    );
  }
}


const mapStateToProps = state => (
  {
    data: state.Y2018Reducer,
  }
);
export default connect(mapStateToProps)(User);
