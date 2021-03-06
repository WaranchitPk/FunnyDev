import React from 'react';
import { Typography } from '@material-ui/core';

const TitleCourse = ({name}) => (
  <div>
    <Typography
      variant='title'
      align="center">
      จำนวนรายวิชาทั้งหมด
    </Typography>
    <Typography
      variant='subheading'
      align="center">
      {name}
    </Typography>
  </div>
);

export default TitleCourse;
