import React from "react";
import {
    MenuItem,
    Select,
    Button,
    CircularProgress,
    InputLabel,
    Typography,
    FormControl
} from "@material-ui/core";

const styles = {
    root: {
        marginTop: '4%',
        marginBottom: '1%'
    },
    selectYear: {
        marginRight: '20px'
    },
    selectMonth: {
        marginRight: '15px',
        width: 75
    },
    widthSelect: {
        width: '50px'
    },
    bgBtSearch: {
        backgroundColor: '#1D6A96'
    }

}
const ChangeYearAndMonth = ({
                                year,
                                month,
                                valueYear,
                                valueMonth,
                                selectYear,
                                selectMonth,
                                submitSelectYear
                            }) => {
    return (
        <div style={styles.root}>
            {
                valueYear && (
                    <FormControl style={styles.selectYear}>
                        <InputLabel><Typography variant="subheading">เลือกปี</Typography></InputLabel>
                        <Select
                            value={year}
                            onChange={selectYear}>
                            {
                                valueYear.data.result.map(data => (
                                    <MenuItem key={data.YEAR} value={data.YEAR}>{data.YEAR}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                )
            }
            {
                valueMonth === null ? (<CircularProgress size={30} thickness={2}/>) : (
                    <FormControl style={styles.selectMonth}>
                        <InputLabel><Typography variant="subheading">เลือกเดือน</Typography></InputLabel>
                        <Select
                            value={month}
                            onChange={selectMonth}>
                            {
                                valueMonth.data.result.map(data => (
                                    <MenuItem key={data.month} value={data.month} style={styles.widthSelect}>{data.month}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                )
            }
            <Button variant="contained" color="primary" onClick={submitSelectYear} style={styles.bgBtSearch}>ค้นหา</Button>

        </div>
    );
};

export default ChangeYearAndMonth;
