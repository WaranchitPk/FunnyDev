import React, { Component } from "react";
import PropTypes from "prop-types";
import {OrtherStatComponent} from '../components';
class OrtherStat extends Component {
  render() {
    return (
      <div>
        <OrtherStatComponent />
      </div>
    );
  }
}

OrtherStat.propTypes = {};

export default OrtherStat;
