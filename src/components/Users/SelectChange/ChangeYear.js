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
    btSubmit: {
        marginLeft: '10px'
    }
}
const ChangeYear = ({valueYear, year, selectYear, submitSelectYear,yearValueViewYear}) => {
    console.log('year', year);
    console.log('value ear', valueYear);
    return (
        <div>
            {
                valueYear && (
                    <div>

                        <FormControl>
                            {/*<InputLabel><Typography variant="subheading">ปีที่เลือก</Typography></InputLabel>*/}
                            <Select
                                value={yearValueViewYear}
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
