import React, {Component} from "react";
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Typography, Tabs, Tab} from "@material-ui/core";

const styles = {
    AppBar: {
        backgroundColor: "#283B42"
    },
    root: {
        flexGrow: 1
    },
    subheading: {
        marginLeft: 20,
        color: 'white'
    }
};

class Header extends Component {
    state = {
        value: 0
    };
    handleChange = (event, value) => {
        this.setState({value});
    };
    handleChangeIndex = index => {
        this.setState({value: index});
    };

    render() {
        return (
            <div style={styles.root}>
                <AppBar position="static" style={styles.AppBar}>
                    <Toolbar>
                        <Typography variant="title" style={styles.subheading}>
                            ระบบสถิติ
                        </Typography>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            scrollable
                            scrollButtons="off"
                            fullWidth>
                            <Tab label="หน้าหลัก" component={Link} to={"/"}/>
                            <Tab label="วิเคราะห์จำนวนรายวิชา" component={Link} to={"/course_analytic"}/>
                            <Tab label="วิเคราะห์จำนวนผู้ใช้" component={Link} to={"/user_analytic"}/>
                            <Tab label="อื่นๆ" component={Link} to={"/orther_stat"}/>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
