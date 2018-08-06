import React, { Component } from 'react';
import { HomeComponent } from '../components';
import { connect } from 'react-redux';
import { DashBoardAction } from '../actions';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(DashBoardAction());
  }

  render() {
    const { DashBData } = this.props;
    return (
      <div>
        <HomeComponent data={DashBData}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    DashBData: state.DashBoardReducer,

  }
);

export default connect(mapStateToProps)(Home);
