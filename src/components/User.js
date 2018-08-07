import React from "react";
import { UserBanner } from "../layout";
import Loadable from "react-loadable";
import {
  Grid,
  Tab,
  Tabs,
  Button,
  AppBar,
  Dialog,
  DialogTitle,
  DialogContent,
  Select,
  MenuItem,
  InputLabel,
  DialogActions,
  Paper,
  Typography,
  Divider,
  List,
  ListItem
} from "@material-ui/core";
import { month } from "../mockData/Users";

import "../styles/user.css";

const ChartChooseYear = Loadable({
  loader: () => import("./Users/Chart/DashBoardUsers"),
  loading: () => null
});
const sumValueSubject = (value) => {
  const sumValue = value.reduce((a, b) => (
    a + b.countMonth
  ), 0);
  return sumValue;
};

const ShowResultSubject = ({ value }) => (
  <div>
    <Typography variant='title'>
      จำนวนผู้เข้าชมระบบทั้งหมด : {sumValueSubject(value)}
    </Typography>
  </div>
);

const User = ({
  year,
  quarter,
  showMonth,
  monthValue,
  onSubmit,
  onSelect,
  dashboardUser,
  accessUser,
  dataMonthChart,
  valueTabs,
  changeTabs,
  isOpenDialogChangeYear,
  openDialogChangeYear,
  closeDialogChangeYear,
  selectYear,
  valueYear,
  submitSelectYear
}) => (
  <div>
    <UserBanner/>
    <AppBar position='static'>
      <Tabs
        value={valueTabs}
        onChange={changeTabs}
        centered>
        <Tab label='ผู้เข้าชมระบบ'/>
        <Tab label='ผู้เข้าใช้ระบบ'/>
      </Tabs>
    </AppBar>
    {/*button Your Choose*/}
    <Grid container justify='center' className='btYourChoose' spacing={40}>
      <Grid item>
        <Button variant='contained' color='secondary' onClick={openDialogChangeYear}>แสดงข้อมูลรายปี</Button>
      </Grid>
      <Grid item>
        <Button variant='contained' color='secondary'>แสดงข้อมูลรายเดือน</Button>
      </Grid>
    </Grid>
    <Dialog
      open={isOpenDialogChangeYear}
      onClose={closeDialogChangeYear}>
      <DialogTitle>Fill the form</DialogTitle>
      <DialogContent>
        {
          valueYear && (
            <Select
              value={year}
              onChange={selectYear}>
              {
                valueYear.data.result.map(data => (
                  <MenuItem key={data.YEAR} value={data.YEAR}>{data.YEAR}</MenuItem>
                ))
              }
            </Select>
          )
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialogChangeYear} color='primary'>
          Cancel
        </Button>
        <Button onClick={submitSelectYear} color='primary'>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
    <Grid container justify='center'>
      <Grid item sm={7} xs={12}>
        {valueTabs === 0 && <ChartChooseYear year={year} dataChartMonth={dataMonthChart}/>}
      </Grid>
    </Grid>
    <Grid container justify='center' className='paperShowResult'>
      <Grid item sm={5} xs={12}>
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
                      {value.month} : {value.countMonth}
                    </Typography>
                  </ListItem>
                ))
              }
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
    {/*{*/}
    {/*valueYear && valueYear.data.result.map(data => (*/}
    {/*<MenuItem key={data.YEAR} value={data.YEAR}>{data.YEAR}</MenuItem>*/}
    {/*))*/}
    {/*}*/}
    {/*<Grid container alignItems='center' justify='center'>*/}
    {/*<Grid item sm={7} xs={12}>*/}
    {/*<ChooseMonth*/}
    {/*year={year}*/}
    {/*quarter={quarter}*/}
    {/*showMonth={showMonth}*/}
    {/*monthValue={monthValue}*/}
    {/*onSelect={onSelect}*/}
    {/*onSubmit={onSubmit}*/}
    {/*styleSelect={styles.select}*/}
    {/*month={month}/>*/}
    {/*</Grid>*/}
    {/*</Grid>*/}


    {/*<Grid container>*/}
    {/*<Grid item sm={12} xs={12}>*/}
    {/*<AccessUsers*/}
    {/*year={year}*/}
    {/*data={accessUser}*/}
    {/*stylePaper={styles.Paper}/>*/}
    {/*</Grid>*/}
    {/*</Grid>*/}
  </div>
);

export default User;
