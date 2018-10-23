import React from 'react';
import {
    Grid,
    Button,
    FormControl, List, ListItem, ListItemText, Typography, Divider
} from '@material-ui/core';
import {OrtherBanner} from '../layout';
import {
    SelectMenu,
    ShowData,
} from './Orthers';

const styles = {
    campusSelect: {
        textAlign: 'center',
        // marginTop: '2em',
        marginBottom: '2em'
    },
    btSearch: {
        marginLeft: '20px',
        backgroundColor: '#1D6A96'
    },
    title: {
        marginTop: '10px'
    }
};
const Orther = ({onSelect, rating, onSubmit, dataCourse, rowsPerPage, page, type, onChangePage, onChangeRow, data}) => (
    <div>
        <OrtherBanner/>
        <List style={styles.title}>
            <ListItem>
                <ListItemText>
                    <Typography variant="display1" align="center">
                        การจัดอันดับจำนวนรายวิชาที่มีผู้ลงทะเบียนมากที่สุด
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
        <Divider/>
        <List style={styles.title}>
            <ListItem>
                <ListItemText>
                    <Typography variant="title">
                        1. เลือกลำดับข้อมูลที่ต้องการแสดง 10,50 และ 100 อันดับ
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
        {/*Select Most Course*/}
        <Grid container style={styles.campusSelect}>
            <Grid item xs={12} sm={12}>
                <FormControl>
                    <SelectMenu
                        type={type}
                        onSelect={onSelect}
                        rating={rating}/>
                </FormControl>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={onSubmit}
                    style={styles.btSearch}>ค้นหา</Button>
            </Grid>
        </Grid>
        <Divider/>
        <List style={styles.title}>
            <ListItem>
                <ListItemText>
                    <Typography variant="title">
                        2. ตารางแสดงข้อมูลรายวิชาตามอันดับที่เลือก
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
        <Grid container>
            <Grid item sm={12} xs={12}>
                <ShowData
                    dataCourse={dataCourse}
                    data={data}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onChangePage={onChangePage}
                    onChangeRow={onChangeRow}/>
            </Grid>
        </Grid>
    </div>
);
export default Orther;
