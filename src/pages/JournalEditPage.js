import { Helmet } from 'react-helmet-async';
import {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";
// @mui
import {
    Card,
    Stack,
    Container,
    Typography,
    TableContainer, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, Input, CardHeader, Button,
} from '@mui/material';
// components
import {act} from "react-dom/test-utils";
import {Alert, AlertTitle, CalendarPicker, DatePicker} from "@mui/lab";
import {DateCalendar, DateField, DateTimeField} from "@mui/x-date-pickers";
import moment from "moment";
import Scrollbar from '../components/scrollbar';
import StudentGradeEditTable from "../sections/@dashboard/common/StudentGradeEditTable";
// sections

JournalEditPage.propTypes = {
    bindingId: PropTypes.number,
}

export default function JournalEditPage(props) {    
    moment().locale("ru");
    const { state } = useLocation();
    props = state;
    const [groups, setGroups] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [modeName, setModeName] = useState('');
    const [lessonNumber, setLessonNumber] = useState(1);
    const [lessonTheme, setLessonTheme] = useState('');
    const [lessonDate, setLessonDate] = useState(moment());
    
    const [filledLessons, setFilledLessons] = useState(1);
    const [totalNumberOfLessons, setTotalNumberOfLessons] = useState(1);
    
    const [lessonType, setLessonType] = useState(1);
    const [disciplineName, setDisciplineName] = useState('Наименование дисциплины');
    const action = useRef(null);
    const isEditMode = props.lessonId > 0;

    function applyVisualChanges(){
        setRefresh(!refresh);
    }
    
    useEffect(() => {        
       if (isEditMode){
           setModeName('Редактировать');
           // TODO: use different URL for this mode
           fetch('journal/GetLessonCreationData?')
               .then((data) => data.json())
               .then((data) => setGroups(data.groups));
       } else {
           setModeName('Добавить');
           fetch(`journal/GetLessonCreationData?bindingId=${props.bindingId}`)
               .then((data) => data.json())
               .then((data) => {
                   setDisciplineName(data.lesson.disciplineName);
                   setLessonType(data.lesson.lessonType);
                   setFilledLessons(data.lesson.filledLessons);
                   setTotalNumberOfLessons(data.lesson.totalNumberOfLessons);
                   setLessonNumber(data.lesson.lessonNumber);
                   setLessonTheme(data.lesson.theme);
                   setLessonDate(data.lesson.lessonDate);
                   return setGroups(data.lesson.groups);
               });
       }
    }, []);
    
    return (
        <>
            <Helmet>
                <title> Добавить занятие | АИС "Успеваемость" </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        {disciplineName}
                    </Typography>
                </Stack>

                <Alert color="warning" variant="filled">
                    <p>Основная оценка предназначена для отражения результатов работы обучающегося на занятии (устный ответ, защита доклада/реферата, работа на занятии). Выставляется непосредственно во время переклички в период 7-ми дней. Исправление или удаление оценки осуществляется ТОЛЬКО сотрудниками Центра ИТ через служебную записку, подписанную начальником УМУ.
                        Дополнительная оценка предназначена для отражения результатов работы всей группы обучающихся (проведение тестирования, защиты лабораторных работ, контрольных работ, домашнего задания, расчетно-графических работ и другого). Если дополнительная оценка выставлена хотя бы одному обучающемуся, то всем остальным также должна быть выставлена оценка. Оценка может быть выставлена в период 14-ти дней даже студентам, которые отсутствовали на занятии. Исправление или удаление оценки осуществляется ТОЛЬКО сотрудниками Центра ИТ через служебную записку, подписанную начальником УМУ.</p>
                </Alert>
                
                <br />
                
                <Card>
                    <CardContent>
                        <Typography variant="h5">{lessonType === 1 ? 'Лекционное'
                                                                   : lessonType === 2 ? 'Практическое'
                                                                                      : 'Лабораторное' } занятие № {filledLessons} из {totalNumberOfLessons}</Typography>
                        <Stack direction="row" spacing={1} fullWidth>
                            <Stack direction="row" spacing={1}>
                                <DateCalendar value={moment(lessonDate)} onChange={(value)=> setLessonDate(value)}/>
                            </Stack>
                            
                            <Stack direction="column" spacing={3} fullWidth>
                                <TextField id="outlined-basic" label="Тема занятия" variant="outlined" value={lessonTheme} fullWidth onChange={(event)=>setLessonTheme(event.target.value)} />
                                

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Номер пары</InputLabel>
                                    <Select
                                        action={action}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Номер пары"
                                        value={lessonNumber}
                                        onChange={(event, value) => setLessonNumber(event.target.value)}
                                    >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
                
                <br />

                <Scrollbar>
                    {groups.map((item)=>{
                        return (
                          <>
                              <Typography variant="h5">{item.groupName}</Typography>
                              <StudentGradeEditTable students={item.students} useStatementsView={false}/>
                          </>  
                        )
                    })}
                </Scrollbar>

                <Stack>
                    <Button variant="contained">Сохранить</Button>
                </Stack>
            </Container>
        </>
    );
}