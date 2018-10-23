import React from "react";
import {
    MenuItem,
    Select,
    Button,
    FormControl,
    InputLabel,
    Typography
} from "@material-ui/core";

const styles = {
    root: {
        marginTop: '4%',
        marginBottom: '1%'
    },
    btSubmit: {
        marginLeft: '15px',
        backgroundColor: '#1D6A96'
    }
}
const ChangeYear = ({
                        valueYear,
                        year,
                        selectYear,
                        submitSelectYear
                    }) => {
    return (
        <div style={styles.root}>
            {
                valueYear && (
                    <div>
                        <FormControl>
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
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={submitSelectYear}
                            style={styles.btSubmit}>ตกลง</Button>
                    </div>
                )
            }
        </div>
    )
};

export default ChangeYear;
