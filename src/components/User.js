import React  from "react";
import { UserBanner } from "../layout";
import { Grid } from "@material-ui/core";
import { month } from "../mockData/Users";
import { ChooseMonth, DashBoardUsers, AccessUsers } from "./Users";

const styles = {
  Paper: {
    marginTop: "5%"
  },
  select: {
    textAlign: "center",
    marginTop: "2em",
    marginBottom: "1em"
  }
};

const User = ({ year, quarter, showMonth, monthValue, onSubmit, onSelect, dashboardUser, accessUser }) => (
  <div>
    <UserBanner/>
    <Grid container alignItems='center' justify='center'>
      <Grid item sm={7} xs={12}>
        <ChooseMonth
          year={year}
          quarter={quarter}
          showMonth={showMonth}
          monthValue={monthValue}
          onSelect={onSelect}
          onSubmit={onSubmit}
          styleSelect={styles.select}
          month={month}/>
      </Grid>
    </Grid>

    <Grid container>
      <Grid item sm={12} xs={12}>
        <DashBoardUsers
          year={year}
          data={dashboardUser}/>
      </Grid>
    </Grid>

    <Grid container>
      <Grid item sm={12} xs={12}>
        <AccessUsers
          year={year}
          data={accessUser}
          stylePaper={styles.Paper}/>
      </Grid>
    </Grid>
  </div>
);

export default User;