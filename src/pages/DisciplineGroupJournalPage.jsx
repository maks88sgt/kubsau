import {
    Button,
    Card,
    CardContent,
    Container, Popover,
    Stack,
    Table, TableBody, TableCell, TableHead, TableRow,
    Typography
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DropdownButton from "../sections/@dashboard/common/DropdownButton";
import Scrollbar from "../components/scrollbar";
import JournalGradeSmall from "../sections/@dashboard/journal/JournalGradeSmall";

export default function DisciplineGroupJournalPage() {
    const navigate = useNavigate();
    const [journalTableVisible, setJournalTableVisible] = useState(false);
    const [selectedLessonType, setSelectedLessonType] = useState(-1);
    const [selectedGroup, setSelectedGroup] = useState(-1);
    const [groupName, setGroupName] = useState('');
    const [attendancePercentage, setAttendancePercentage] = useState(100);
    const [gradePopoverOpen, setGradePopoverOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [attendancePopoverOpen, setAttendancePopoverOpen] = useState(false);
    const [lessonPopoverOpen, setLessonPopoverOpen] = useState(false);
    const [attAnchorEl, setAttAnchorEl] = useState(null);
    const [lessonAnchorEl, setLessonAnchorEl] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [clickedOnGradeType, setClickedOnGradeType] = useState(0);

    const [students, setStudents] = useState([
        {
            id: 1,
            lastName: 'Фёдоров',
            firstName: 'Юрий',
            middleName: 'Николаевич',
            lessons: [
                {
                    lessonId: 1,
                    lessonDate: '10.09',
                    lessonNumber: 1,
                    theme: 'Понятие инкапсуляции',
                    employeeName: 'Креймер А.С.',
                    attend: true,
                    grade: 5,
                    extraGrade: 4
                },
                {
                    lessonId: 2,
                    lessonDate: '12.09',
                    lessonNumber: 1,
                    theme: 'Всё про ООП',
                    employeeName: 'Креймер А.С.',
                    attend: false,
                    grade: 2,
                    extraGrade: 1
                },
            ]
        },
        {
            id: 2,
            lastName: 'Синичкин',
            firstName: 'Пётр',
            middleName: 'Станиславович',
            lessons: [
                {
                    lessonId: 1,
                    lessonDate: '10.09',
                    lessonNumber: 1,
                    theme: '.NET и его инфраструктура',
                    employeeName: 'Креймер А.С.',
                    attend: false,
                    grade: 2,
                    extraGrade: 3
                },
                {
                    lessonId: 2,
                    lessonDate: '12.09',
                    lessonNumber: 1,
                    theme: 'C# и его преимущества',
                    employeeName: 'Креймер А.С.',
                    attend: true,
                    grade: 4,
                    extraGrade: 5
                },
            ]
        }
    ]);

    function removeLesson() {
        // TODO: send a request to the server
        // you can take a lesson entity from the 'selectedLesson' object

        // TODO: after sending the data to the server need to reload students array from the server again
        closeLessonPopover();
    }

    function editLesson() {
        navigate('/journaledit',
            {
                replace: false,
                state: {
                    bindingId: selectedLesson?.lessonId
                }
            });
    }

    function changeGrade(grade) {
        // type = 0 = primary grade
        // type = 1 = extra grade
        if (clickedOnGradeType === 0) {
            selectedLesson.grade = grade;
        }
        else if (clickedOnGradeType === 1) {
            selectedLesson.extraGrade = grade;
        }

        // TODO: send new grade to the server

        setGradePopoverOpen(false);
        setAnchorEl(null);
    }

    function changeAttendance(value) {
        selectedLesson.attend = value;

        // TODO: send new grade to the server

        setAttendancePopoverOpen(false);
        setAttAnchorEl(null);
    }

    function closeAttPopover(){
        setAttendancePopoverOpen(false);
        setAttAnchorEl(null);
    }

    function closeLessonPopover(){
        setLessonPopoverOpen(false);
        setLessonAnchorEl(null);
    }

    function handlePopoverClick(event, lesson, gradeType){
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setGradePopoverOpen(!gradePopoverOpen);
        setSelectedLesson(lesson);
        setClickedOnGradeType(gradeType);
    }

    function handleAttPopoverClick(event, lesson, student){
        setAttAnchorEl(attAnchorEl ? null : event.currentTarget);
        setAttendancePopoverOpen(!attendancePopoverOpen);
        setSelectedLesson(lesson);
        setSelectedStudent(student);
    }

    function handleLessonPopoverClick(event, lesson){
        setLessonAnchorEl(attAnchorEl ? null : event.currentTarget);
        setLessonPopoverOpen(!lessonPopoverOpen);
        setSelectedLesson(lesson);
    }

    function groupSelectionChanged(index, type) {
        setJournalTableVisible(true);
        setSelectedLessonType(type);
        setSelectedGroup(index);

        // for test purposes only. Need to remove this line
        setGroupName('ИТ2041');
    }

    function setupData(data) {
        setGroupName(data.groupName);
        setAttendancePercentage(data.attendancePercentage);
    }

    return (
        <>
            <Helmet>
                <title> Журнал | АИС "Успеваемость" </title>
            </Helmet>

            <Container>
                <Button onClick={()=>{navigate("/documentsregister")}}>Documents</Button>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Наименование дисциплины <Typography fontSize="small">у курса ИТ - 2Б</Typography>
                    </Typography>
                </Stack>

                <Stack direction="row" justifyContent="start" spacing={2} mb={5}>
                    <DropdownButton options={['ИТ2001', 'ИТ2002', 'ИТ2003']}
                        caption="Лекции"
                        selectionChanged={(index) => groupSelectionChanged(index, 0)} />

                    <DropdownButton options={['ИТ2001', 'ИТ2002', 'ИТ2003']}
                        caption="Практические занятия"
                        selectionChanged={(index) => groupSelectionChanged(index, 1)} />

                    <DropdownButton options={['ИТ2001', 'ИТ2002', 'ИТ2003']}
                        caption="Лабораторные занятия"
                        selectionChanged={(index) => groupSelectionChanged(index, 2)} />
                </Stack>

                {(journalTableVisible ?
                    (
                        <div>
                            <Typography variant="h6">{groupName} - {attendancePercentage}%</Typography>
                            <Card variant="outlined">
                                <Scrollbar>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>#</TableCell>
                                                <TableCell>ФИО</TableCell>
                                                {students[0].lessons.map((item, index) => {
                                                    return (
                                                        <TableCell align="center">
                                                            <Button variant="outlined" color="primary" size="small" onClick={(event) => handleLessonPopoverClick(event, item)}>
                                                                { index+1 } <br />
                                                                ({ item.lessonDate })
                                                            </Button>
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {students.map((student, studentNumber) => {
                                                return (
                                                    <TableRow key={student.id}>
                                                        <TableCell>{ studentNumber + 1 }</TableCell>
                                                        <TableCell>
                                                            <Typography>{student.lastName}</Typography>
                                                            <Typography>{student.firstName}</Typography>
                                                            <Typography>{student.middleName}</Typography>
                                                        </TableCell>
                                                        {
                                                            student.lessons.map((lesson) => {
                                                                return (
                                                                    <TableCell>
                                                                        <Stack direction="column"
                                                                            alignItems="center">
                                                                            {lesson.attend
                                                                                ? (<IconButton size="small" color="success" onClick={(event)=> { handleAttPopoverClick(event, lesson, student); }} >
                                                                                    <CheckCircleIcon fontSize="inherit" />
                                                                                </IconButton>)
                                                                                : (<IconButton size="small" color="error" onClick={(event)=> { handleAttPopoverClick(event, lesson, student); }}>
                                                                                    <RemoveCircleIcon fontSize="inherit" />
                                                                                </IconButton>)}

                                                                            <Stack direction="row">
                                                                                <JournalGradeSmall grade={lesson.grade} color="primary" onClick={(event)=> { handlePopoverClick(event, lesson, 0); }}/>

                                                                                <JournalGradeSmall grade={lesson.extraGrade} color="info" onClick={(event)=> { handlePopoverClick(event, lesson, 1); }} />
                                                                            </Stack>
                                                                        </Stack>
                                                                    </TableCell>
                                                                );
                                                            })
                                                        }
                                                    </TableRow>
                                                );
                                            }) }
                                        </TableBody>
                                    </Table>
                                </Scrollbar>

                                <Popover
                                    id={1}
                                    open={gradePopoverOpen}
                                    anchorEl={anchorEl}

                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <Stack direction="row">
                                        <JournalGradeSmall grade={0} color="info" onClick={() => changeGrade(0)}/>
                                        <JournalGradeSmall grade={2} color="error" onClick={() => changeGrade(2)} />
                                        <JournalGradeSmall grade={3} color="warning" onClick={() => changeGrade(3)} />
                                        <JournalGradeSmall grade={4} color="success" onClick={() => changeGrade(4)} />
                                        <JournalGradeSmall grade={5} color="success" onClick={() => changeGrade(5)} />
                                    </Stack>
                                </Popover>

                                <Popover
                                    id={2}
                                    open={attendancePopoverOpen}
                                    anchorEl={attAnchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <Button size="small" onClick={()=> closeAttPopover()}>Закрыть</Button>
                                    <Container>
                                        <Typography>{selectedStudent?.lastName ?? '-'} {selectedStudent?.firstName ?? '-'} {selectedStudent?.middleName ?? '-'} {selectedLesson?.attend ? 'посетил(а)' : 'пропустил(а)'} занятие</Typography>
                                        <hr />
                                        <Typography>Дата: {selectedLesson?.lessonDate ?? '-'} ({selectedLesson?.lessonNumber ?? '-'} пара)</Typography>
                                        <Typography>Преподаватель: {selectedLesson?.employeeName ?? '-'}</Typography>
                                        <hr />
                                        <Stack alignContent="center">
                                            <Button color="error" variant="contained">Поставить пропуск</Button>
                                        </Stack>
                                        <br />
                                    </Container>
                                </Popover>

                                <Popover
                                    id={3}
                                    open={lessonPopoverOpen}
                                    anchorEl={lessonAnchorEl}

                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <Button size="small" onClick={()=> closeLessonPopover()}>Закрыть</Button>
                                    <Container>
                                        <Typography>Тема: {selectedLesson?.theme ?? '-'}</Typography>
                                        <hr />
                                        <Stack alignContent="center" alignItems="center" direction="row" spacing={2}>
                                            <Button color="error" variant="contained" onClick={() => removeLesson()}>Удалить</Button>
                                            <Button color="info" variant="contained" onClick={() => editLesson()}>Изменить</Button>
                                        </Stack>
                                        <br />
                                    </Container>
                                </Popover>
                            </Card>
                        </div>
                    ) : (<></>))}
            </Container>
        </>
    );
}
