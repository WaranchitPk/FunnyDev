import React from 'react';
import {
  Grid,
  Paper,
  Divider,
  Typography,
  List,
  ListItem,
} from '@material-ui/core';
import {
  TitleMain,
  ChartMain,
} from '../';
import iconChiangrai from '../../../assets/icons/university_chiangrai.svg';
import iconTak from '../../../assets/icons/university_Tak.svg';
import iconNan from '../../../assets/icons/university_nan.svg';
import iconPitsanulok from '../../../assets/icons/university_pitsanulok.svg';
import iconChiangmai from '../../../assets/icons/university_chiangmai.svg';
import iconLampang from '../../../assets/icons/university_lampang.svg';
import '../../../styles/course.css';

const sumValueSubject = (value) => {
  const sumValue = value.reduce((a, b) => (
    a + b.value
  ), 0);
  return sumValue;
};

const ShowResultSubject = ({value}) => (
  <div>
    <Typography variant="title">
      รายวิชาทุกเขตพื้นที่ : {sumValueSubject(value)}
    </Typography>
  </div>
);

const iconCampus = [iconChiangrai, iconTak, iconNan, iconPitsanulok, iconChiangmai, iconLampang];
const MainCourse = ({dataT}) => (
  <div>
    <Grid container className='mainChart' justify="center">
      <Grid item sm={8} xs={12}>
        <Paper elevation={5}>
          <TitleMain/>
          <ChartMain
            dataT={dataT}/>
        </Paper>
      </Grid>
    </Grid>
    <Grid container justify="center" className='paperShowResult'>
      <Grid item sm={5} xs={12}>
        <Paper elevation={5} className='bgPaper'>
          <Typography align="center" variant="headline">
            สรุปจำนวนรายวิชาทุกเขตพื้นที่
          </Typography>
          <Divider/>

          <List>
            <ListItem>
              {
                dataT && (
                  <ShowResultSubject value={dataT.data.resultData}/>
                )
              }
            </ListItem>
            <ListItem>
              <Typography align="center" variant="subheading">
                จำนวนรายวิชาทั้งหมดของแต่ละเขตพื้นที่
              </Typography>
            </ListItem>
            {
              dataT && dataT.data.resultData.map((result, index) => (
                <ListItem>
                  <img src={iconCampus[index]}
                       className='iconStyle'/>
                  <Typography key={result.name} variant="body2">
                    {result.name} : {result.value}
                  </Typography>
                </ListItem>
              ))
            }
          </List>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default MainCourse;
