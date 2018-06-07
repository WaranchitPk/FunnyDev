import React, { Component } from "react";
import {
  Grid,
  Button,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TablePagination
} from "@material-ui/core";
import { connect } from "react-redux";
import { OrtherBanner } from "../layout";
import { chiangmai } from "../actions/Orhter";

const styles = {
  campusSelect: {
    textAlign: "center",
    marginTop: "2em"
  }
};

class Orther extends Component {

  state = {
    type: 1,
    rating: 10,
    rowsPerPage: 5,
    page: 0
  };

  componentDidMount() {
    this.props.dispatch(chiangmai(this.state.type, this.state.rating));
  }

  ChangeCampus = () => {
    // console.log(this.state.type,this.state.rating)
    this.props.dispatch(chiangmai(this.state.type, this.state.rating));
  };
  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChangePage = (event, page) =>{
    this.setState({ page });
  };
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  render() {

    const { cmData: { dataCourse } } = this.props;
    if (dataCourse !== undefined) {
      console.log(dataCourse.length);
    }
    const { type, rating ,page,rowsPerPage} = this.state;
    return (
      <div>
        <OrtherBanner/>
        {/*Select Most Course*/}
        <Grid container>
          <Grid item xs={12} sm={12}>
            <form style={styles.campusSelect}>
              {/*<FormControl>*/}
              {/*<InputLabel>Campus</InputLabel>*/}
              Campus : <Select
              value={type}
              onChange={this.handleSelect}
              inputProps={{ name: "type" }}>
              <MenuItem value={1}>Chiangmai</MenuItem>
              <MenuItem value={2}>Pitsanulok</MenuItem>
            </Select>
              Rating : <Select
              value={rating}
              onChange={this.handleSelect}
              inputProps={{ name: "rating" }}>
              <MenuItem value={10}>Top 10</MenuItem>
              <MenuItem value={50}>Top 50</MenuItem>
              <MenuItem value={100}>Top 100</MenuItem>
            </Select>

              <Button onClick={this.ChangeCampus}>Go</Button>
            </form>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12} xs={12}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>Name(Teacher)</TableCell>
                  <TableCell>Course</TableCell>
                  <TableCell>Volume</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataCourse && dataCourse.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => (
                  <TableRow key={n.id}>
                    <TableCell scope="row">
                      {n.no}
                    </TableCell>
                    <TableCell>{n.name}</TableCell>
                    <TableCell>{n.course}</TableCell>
                    <TableCell>{n.volume}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {
              dataCourse && (
                <TablePagination
                  component="div"
                  count={dataCourse.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              )
            }
          </Grid>
        </Grid>
      </div>
    );
  }
}

Orther.propTypes = {};

function mapStateToProps(state) {
  return {
    cmData: state.ChiangmaiCorse
  };
}

export default connect(mapStateToProps)(Orther);
