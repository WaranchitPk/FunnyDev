import { Typography } from '@material-ui/core';
import React from 'react';

export const sumValueSubject = (value) => {
  const sumValue = value.reduce((a, b) => {
    return a + b.value;
  }, 0);
  return sumValue;
};

export const ShowResultSubject = ({value, name}) => {
  return (
    <div>
      <Typography variant="title">
        รายวิชาของเขตพื้นที่{name} : {sumValueSubject(value)}
      </Typography>
    </div>
  );
};