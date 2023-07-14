import PropTypes from 'prop-types';
// @mui
import {
    TableRow,
    TableCell,
    TableBody,
    Stack,
    Typography,
    Paper,
    Table,
    Container,
    Button,
    CardContent,
    TableContainer,
    TableHead,
    Checkbox,
    Select,
    ToggleButtonGroup,
    ToggleButton,
    InputLabel, MenuItem, FormControl
} from '@mui/material';
import {useEffect, useRef, useState} from "react";
import {filter} from "lodash";
import {JournalListHead} from "../journal";

// ----------------------------------------------------------------------

StudentGradeEditTable.propTypes = {
    students: PropTypes.array.isRequired,
    useStatementsView: PropTypes.bool.isRequired,
};

// ----------------------------------------------------------------------



export default function StudentGradeEditTable(props) {  
    const [ refresh, setRefresh ] = useState(false);
    const action = useRef(null);
    
    function setExtraGradeType(row, value) {
        row.extraGradeType = value;
        applyVisualChanges();
    }
    
    function handleGradeChange(row, value){
        row.grade = value;
        applyVisualChanges()
    }

    function handleExtraGradeChange(row, value){
        row.extraGrade = value;
        applyVisualChanges()
    }
    
    function attendedChanged(row, value){
        row.attended = value;
        applyVisualChanges();
    }
    
    function applyVisualChanges(){
        setRefresh(!refresh);
    }
    
    return (
        <CardContent>
            <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography>#</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>ФИО</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Оценка</Typography>                                
                            </TableCell>
                            {!props.useStatementsView
                                ? (<TableCell>
                                    <Typography>Доп. оценка</Typography>
                                </TableCell>)
                                : <></>}
                            {!props.useStatementsView 
                                ? (<TableCell>
                                    <Typography>Присутствие</Typography>
                                </TableCell>)
                            : <></>}
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.students.map((row, index) => {
                            const { studentId, lastName, firstName, middleName, attended, grade, extraGrade, extraGradeType, skippedHours, totalHours } = row;
                            
                            return (<TableRow key={studentId} hover>
                                <TableCell>
                                    <Typography fontWeight="bold">{index + 1}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography fontWeight="bold">{lastName}</Typography>
                                    <Typography>{firstName} {middleName}</Typography>
                                    {!props.useStatementsView ?
                                        (
                                            <Typography fontSize="small">{skippedHours}/{totalHours} ({(totalHours === 0 ? 0 : (skippedHours*100/totalHours))}% пропусков)</Typography>
                                        )
                                    : null
                                    }
                                </TableCell>
                                <TableCell>
                                    <ToggleButtonGroup orientation="horizontal"
                                                       exclusive
                                                       fullWidth
                                                       value={grade}
                                                       aria-label="Оценка"
                                                       color="primary"
                                                       onChange={(event, value) => handleGradeChange(row, value)}>
                                        <ToggleButton value={5} area-label="Отлично" color="success">5</ToggleButton>
                                        <ToggleButton value={4} area-label="Хорошо" color="success">4</ToggleButton>
                                        <ToggleButton value={3} area-label="Удовлетворительно" color="warning">3</ToggleButton>
                                        <ToggleButton value={2} area-label="Неудовлетворительно" color="error">2</ToggleButton>
                                        <ToggleButton value={0} area-label="-" color="info">-</ToggleButton>
                                    </ToggleButtonGroup>
                                </TableCell>
                                {!props.useStatementsView
                                    ? (<TableCell>
                                        <Stack spacing={2}>
                                            <ToggleButtonGroup orientation="horizontal"
                                                               fullWidth
                                                               exclusive
                                                               value={extraGrade}
                                                               aria-label="Доп. оценка"
                                                               color="primary"
                                                               onChange={(event, value) => handleExtraGradeChange(row, value)}>
                                                <ToggleButton value={5} area-label="Отлично" color="success">5</ToggleButton>
                                                <ToggleButton value={4} area-label="Хорошо" color="success">4</ToggleButton>
                                                <ToggleButton value={3} area-label="Удовлетворительно" color="warning">3</ToggleButton>
                                                <ToggleButton value={2} area-label="Неудовлетворительно" color="error">2</ToggleButton>
                                                <ToggleButton value={6} area-label="н/д" color="error">н/д</ToggleButton>
                                                <ToggleButton value={0} area-label="-" color="info">-</ToggleButton>
                                            </ToggleButtonGroup>

                                            <FormControl fullWidth>
                                                <InputLabel id="extra-grade-type-select-label">Тип оценки</InputLabel>
                                                <Select
                                                    action={action}
                                                    labelId="extra-grade-type-select-label"
                                                    id="extra-grade-type-simple-select"
                                                    label="Тип оценки"
                                                    value={extraGradeType}
                                                    onChange={(event, value) => setExtraGradeType(row, event.target.value)}
                                                >
                                                    <MenuItem value={0}>Не указано</MenuItem>
                                                    <MenuItem value={1}>Тестирование</MenuItem>
                                                    <MenuItem value={2}>Лабораторная работа</MenuItem>
                                                    <MenuItem value={3}>Контрольная работа</MenuItem>
                                                    <MenuItem value={4}>Расчетно-графическая работа</MenuItem>
                                                    <MenuItem value={5}>Домашнее задание</MenuItem>
                                                    <MenuItem value={6}>Другое</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Stack>
                                    </TableCell>)
                                    : (null)}
                                {!props.useStatementsView 
                                ? (<TableCell>
                                        <Checkbox checked={attended} onChange={(event, value) => attendedChanged(row, value)}/>
                                    </TableCell>)
                                : (null)}
                            </TableRow>);
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    );
}
