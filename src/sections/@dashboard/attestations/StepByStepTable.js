import PropTypes from 'prop-types';
// @mui
import {
    TableRow,
    TableCell,
    TableBody,
    Stack,
    Typography,
    Paper,
    Table
} from '@mui/material';
import {useEffect, useState} from "react";
import {filter} from "lodash";
import {JournalListHead} from "../journal";

// ----------------------------------------------------------------------

StepByStepTable.propTypes = {
    steps: PropTypes.array,
    itemClickHandler: PropTypes.func
};

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    if (array === null ||
        array === undefined ||
        array === [])
        return [];

    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_user) => _user.disciplineName.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

export default function StepByStepTable(props) {
    let currentUrl = props.steps[0].fetchUrl;
    // const stepsResults = [];
    const [data, setData] = useState([]);
    
    const [stepsResults, setStepsResults] = useState([]);

    const [page, setPage] = useState(0);
    
    const [loading, setLoading] = useState(false);

    const [step, setStep] = useState(0);

    const [order, setOrder] = useState('asc');

    const [orderBy, setOrderBy] = useState('name');

    const [rowsPerPage, setRowsPerPage] = useState(100);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleClick = (event, name) => {
        if (step < props.steps.length - 1){
            stepsResults.push(name);
            
            setStep(step + 1);
            currentUrl = replaceValues(props.steps[step + 1].fetchUrl);
            getData();
        }
        
        props.itemClickHandler(step, stepsResults);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;
    
    useEffect(() =>{
        console.log(`loading data from ${props.steps[step].fetchUrl}`);
        getData();
    },[setStep]);
    
    async function getData(){
        setLoading(true);
        setData([]);
        await fetch(currentUrl)
                .then((res) => res.json())
                .then((res) =>
                {
                    setLoading(false);
                    return setData(res.data);
                });
    }
    
    function replaceValues(url){
        for (let i = 0; i < stepsResults.length; i+=1){
            url = url.replace(`{step${i}Value}`, stepsResults[i]);
        }
        
        return url;
    }
    
    return (
        <Table>
            <JournalListHead
                order={order}
                orderBy={orderBy}
                headLabel={props.steps[step].tableHead}
                rowCount={data?.length ?? 0}
                numSelected={0}
                onRequestSort={handleRequestSort}
            />
            <TableBody>
                {data.map((row) => {
                    const { key, value } = row;

                    return (
                        <TableRow hover key={key} tabIndex={-1} role="checkbox" onClick={(event) => {handleClick(event, key)}}>
                            <TableCell component="th" scope="row">
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Typography variant="subtitle2" noWrap>
                                        {value}
                                    </Typography>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    );
                })}
                {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                    </TableRow>
                )}
            </TableBody>

            {loading && (
                <TableBody>
                    <TableRow>
                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                            <Paper
                                sx={{
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h6" paragraph>
                                    Загрузка данных...
                                </Typography>
                            </Paper>
                        </TableCell>
                    </TableRow>
                </TableBody>
            )}
        </Table>
    );
}
