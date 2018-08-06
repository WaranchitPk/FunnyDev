import React from "react";
import {
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from '@material-ui/core';
import { ShowResultSubject } from './CalculateValueSubject';

const styles = {
  Paper: {
    marginTop: '3%',
  },
};
const ResultSubject = ({dataT, nameCampus}) => (
  <Grid container c justify="center">
    <Grid item sm={5} xs={12}>
      <Paper elevation={5} className={styles.Paper}>
        <Typography align="center" variant="headline">
          สรุปจำนวนรายวิชาของเขตพื้นที่{nameCampus}
        </Typography>
        <Divider/>
        <List>
          <ListItem>
            {
              dataT && (
                <ShowResultSubject
                  value={dataT}
                  name={nameCampus}/>
              )
            }
          </ListItem>
          <ListItem>
            <Typography align="center" variant="subheading">
              จำนวนรายวิชาทั้งหมดของแต่ละคณะ
            </Typography>
          </ListItem>
          {
            dataT && dataT.map((result) => (
              <ListItem>
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
);

export default ResultSubject;
