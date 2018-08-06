import React from "react";
import '../style/bannerHome.css';
import {Card,CardContent,Typography} from '@material-ui/core';
const styles = {
  Card: {
    backgroundColor: '#EEEEEE'
  }
};
const Home = () => {
  return (
    <Card style={styles.Card}>
      <CardContent>
        <Typography align='left' variant='display1'>
          DashBoard
        </Typography>
        <Typography align='left' variant='subheading'>
          E-learning reporting and tracking system for Rajamangala University of Technology Lanna
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;
