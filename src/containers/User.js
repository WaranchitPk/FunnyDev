import React, { Component } from "react";
import PropTypes from "prop-types";
import {UserComponent} from '../components';
class User extends Component {
  render() {
    return (
      <div>
        <UserComponent />
      </div>
    );
  }
}


export default User;
