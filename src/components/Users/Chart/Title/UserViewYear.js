import React from 'react';
import { Typography } from '@material-ui/core';


const UserViewYear = ({year}) => (
  <Typography variant='title' align="center">
    ผู้เข้าชมระบบ : {year}
  </Typography>
);

export default UserViewYear;
