import {useState} from "react";
import {Helmet} from "react-helmet-async";
import {
    Button,
    Card, Checkbox,
    Container,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    ToggleButton, ToggleButtonGroup,
    Typography
} from "@mui/material";
import StatementInfoBlock from "../sections/@dashboard/sessions/StatementInfoBlock";

StatementEditPage.propTypes = {
}

export default function StatementEditPage(props){
    const [statement, setStatement] = useState({
        statementNumber: '0',
        statementType: 'зачетная',
        statementTypeId: 1,
        disciplineName: 'Наименование дисциплины',
        group: 'АА0000',
        employees: [
            {
                employeeId: 1,
                fullName: 'Иванов Иван Иванович'
            },
            {
                employeeId: 2,
                fullName: 'Иванов Иван Иванович'
            },
        ],
        scannedDocumentId: 1,
        eventDate: '1 сентября 2023 г.',
        creationDate: '1 сентября 2023 г.',
        deadline: '1 сентября 2023 г.',
        dateOfClose: '1 сентября 2023 г.',
        students: [
            {
                studentId: 1,
                lastName: 'Иванов',
                firstName: 'Иван',
                middleName: 'Иванович',
                gradeName: 'Отлично',
                gradeId: 3,
                admittedToExam: true,
                averageGrade: 5,
                setByAverageGrade: false
            }
        ]
    });
    
    const [ refresh, setRefresh ] = useState(false);
    
    function handleGradeChange(student, value){
        student.gradeId = value;
        applyVisualChanges();
    }

    function handleSetByAverageGrade(student, value){
        student.setByAverageGrade = value;
        applyVisualChanges();
    }
    
    function applyVisualChanges(){
        setRefresh(!refresh);
    }

    return (
        <>
            <Helmet>
                <title> Результаты ведомости | АИС "Успеваемость" </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Редактировать ведомость №{statement.statementNumber}
                    </Typography>
                </Stack>

                <StatementInfoBlock statement={statement}/>

                <br />

                <Card>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>ФИО студента</TableCell>
                                <TableCell>Оценка</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {statement.students.map((student, index) => {
                                return (
                                    <TableRow>
                                        <TableCell><Typography fontSize="x-large">{index+1}</Typography></TableCell>
                                        <TableCell>
                                            <Typography>
                                                <strong>{student.lastName}</strong>
                                                <br />{student.firstName} {student.middleName}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <ToggleButtonGroup orientation="horizontal"
                                                               fullWidth
                                                               exclusive
                                                               value={student.gradeId}
                                                               aria-label="Оценка"
                                                               color="primary"
                                                               onChange={(event, value) => handleGradeChange(student, value)}>
                                                <ToggleButton value={5} area-label="Отлично" color="success">5</ToggleButton>
                                                <ToggleButton value={4} area-label="Хорошо" color="success">4</ToggleButton>
                                                <ToggleButton value={3} area-label="Удовлетворительно" color="warning">3</ToggleButton>
                                                <ToggleButton value={2} area-label="Неудовлетворительно" color="error">2</ToggleButton>
                                                <ToggleButton value={1} area-label="н/я" color="error">н/я</ToggleButton>
                                                <ToggleButton value={0} area-label="-" color="info">-</ToggleButton>
                                            </ToggleButtonGroup>
                                            <br />
                                            <Typography><Checkbox onChange={(event, value) => handleSetByAverageGrade(student, value)}
                                                                  checked={student.setByAverageGrade}  /> Оценка по среднему баллу: {student.averageGrade}</Typography>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                    
                    <Stack>
                        <Button variant="contained" color="primary">Сохранить</Button>
                    </Stack>
                </Card>
            </Container>
        </>
    )
}