import React from "react";
import {
  Divider,
  List,
  ListItem,
  Paper,
  Typography
} from "@material-ui/core";

const sumValueSubject = (value) => {
  const sumValue = value.reduce((a, b) => (
    a + b.countMonth
  ), 0);
  return sumValue;
};

const ShowResultSubject = ({ value }) => (
  <div>
    <Typography variant='title'>
      จำนวนผู้เข้าชมระบบทั้งหมด : {sumValueSubject(value).toLocaleString()}
    </Typography>
  </div>
);
const ResultYear = ({ year, dataMonthChart }) => (
  <Paper elevation={5} className='bgPaper'>
    <Typography align='center' variant='headline'>
      สรุปจำนวนผู้เข้าชมเว็บไซต์ ประจำปี {year}
    </Typography>
    <Divider/>
    <List>
      <ListItem>
        {
          dataMonthChart && (
            <ShowResultSubject value={dataMonthChart.data.result}/>
          )
        }
      </ListItem>
      <ListItem>
        <Typography align='center' variant='subheading'>
          จำนวนผู้เข้าชมเว็บไซต์ของปี {year} แบ่งออกเป็น
        </Typography>
      </ListItem>
      <ListItem>
        {
          dataMonthChart && dataMonthChart.data.result.map(value => (
            <ListItem>
              <Typography key={value.month} variant='body2'>
                <b>{value.month}</b> : {value.countMonth.toLocaleString()} คน
              </Typography>
            </ListItem>
          ))
        }
      </ListItem>
    </List>
  </Paper>
);

export default ResultYear;
