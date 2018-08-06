import React from "react";
import {Card,CardContent,Typography} from '@material-ui/core';
const styles = {
  Card: {
    backgroundColor: '#EEEEEE'
  }
};

const User = () => {
  return (
    <div>
      <Card style={styles.Card}>
        <CardContent>
          <Typography align='left' variant='display1'>
            User Analytic
          </Typography>
          <Typography align='left' variant='subheading'>
            E-learning reporting and tracking system for Rajamangala University of Technology Lanna
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default User;
