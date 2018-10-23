import React from "react";
import {
    Divider,
    List,
    ListItem,
    Paper,
    Typography,
    Table, TableHead, TableBody, TableCell, TableRow
} from "@material-ui/core";

const sumValueSubject = (value) => {
    const sumValue = value.reduce((a, b) => (
        a + b.countMonth
    ), 0);
    return sumValue;
};
const styles = {
    fontTableCell: {
        fontSize: '1.25rem',
        textAlign: 'center',
        color: 'black',
        opacity: 0.85
    },
    AlignTableCellText: {
        textAlign: 'left',
        fontSize: '1rem',
        opacity: 0.80
    },
    AlignTableCellNumber: {
        textAlign: 'right',
        fontSize: '1rem',
        opacity: 0.80
    }
}
const ShowResultSubject = ({value}) => (
    <div>
        <Typography variant='title'>
            จำนวนผู้เข้าชมระบบทั้งหมด : {sumValueSubject(value).toLocaleString()}
        </Typography>
    </div>
);
const ResultYear = ({year, dataMonthChart}) => (
    <Paper elevation={5} className='bgPaper'>
        <Typography align='center' variant='headline'>
            สรุปจำนวนผู้เข้าชมเว็บไซต์ ประจำปี {year}
        </Typography>
        <Divider/>
        <List>
            <ListItem>
                {
                    dataMonthChart && (
                        <ShowResultSubject value={dataMonthChart.data.result}/>
                    )
                }
            </ListItem>

            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={styles.fontTableCell}>เดือน</TableCell>
                            <TableCell style={styles.fontTableCell}>จำนวน (คน)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            dataMonthChart && dataMonthChart.data.result.map(value => (
                                    <TableRow>
                                        <TableCell style={styles.AlignTableCellText}><b>{value.month}</b></TableCell>
                                        <TableCell style={styles.AlignTableCellNumber}>{value.countMonth.toLocaleString()}</TableCell>
                                    </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>

        </List>
    </Paper>
);

export default ResultYear;
