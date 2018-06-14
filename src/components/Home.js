import React from "react";
import { Grid } from "@material-ui/core";

import { Teacher, Student } from "./Homes";
import { HomeBanner } from "../layout";

const Home = ({ data: { data1, data2 } }) => (
  <div>
    <HomeBanner/>
    <Grid container spacing={24}>
      <Grid item sm={6} xs={12}>
        <Teacher data={data1}/>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Student data={data2}/>
      </Grid>
    </Grid>
  </div>
);
export default Home;

