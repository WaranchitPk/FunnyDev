import React, { Component } from "react";
import PropTypes from "prop-types";
import { UserBanner } from "../layout";
import { Grid, Select, MenuItem,Button,Paper,Typography,FormControl,InputLabel} from "@material-ui/core";
import {Bar,BarChart,ResponsiveContainer,CartesianGrid,XAxis,YAxis,Tooltip,Legend} from 'recharts';
import {y2018Action} from '../actions';
import {connect} from 'react-redux';
const styles = {
  Paper: {
    marginTop: "5%"
  }
}

class User extends Component {
  state = {
    cate: 2018,
  };

  handleSelect = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  componentDidMount(){
    this.props.dispatch(y2018Action(2018))
  }
  ChangeValueFormYear = () =>{
    this.props.dispatch(y2018Action(2017))

  };
  render() {
    console.log(this.props.data);
    const {data: {dataDefault,accessStat}} = this.props;
    return (
      <div>
        <UserBanner/>
        <Grid container>
          <Grid item sm={12} xs={12}>
            <form>
              <FormControl>
                <InputLabel>Year</InputLabel>
                <Select
                  value={this.state.cate}
                  onChange={this.handleSelect}
                  inputProps={{ name: "cate" }}>
                  <MenuItem value={2018}>2018</MenuItem>
                  <MenuItem value={2017}>2017</MenuItem>
                </Select>
              </FormControl>
              <Button onClick={this.ChangeValueFormYear}>Go</Button>
            </form>
          </Grid>
        </Grid>
        <Grid container >
          <Grid item sm={12} xs={12}>
            <Paper elevation={5} >
              <ResponsiveContainer width='100%' aspect={2}>
                <BarChart data={dataDefault}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="value" fill="#82ca9d"/>
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item sm={12} xs={12} >
            <Paper elevation={5} style={styles.Paper}>
              <Typography variant='title' align="center">
                Access Statistics
              </Typography>
              <ResponsiveContainer width='100%' aspect={3}>
                <BarChart data={accessStat}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="value" fill="#82ca9d"/>
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.Y2018Reducer
  }
}

export default connect(mapStateToProps)(User);
