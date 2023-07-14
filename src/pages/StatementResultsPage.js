import PropTypes from "prop-types";
import {useState} from "react";
import {Helmet} from "react-helmet-async";
import {
    Box, Button,
    Card,
    CardContent,
    Container,
    Grid,
    Link,
    Paper,
    Stack, Table, TableBody, TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {styled} from "@mui/material/styles";
import {PrintOutlined} from "@mui/icons-material";
import Scrollbar from "../components/scrollbar";
import StatementInfoBlock from "../sections/@dashboard/sessions/StatementInfoBlock";

StatementResultsPage.propTypes = {
    statementId: PropTypes.number
}

export default function StatementResultsPage(props) {
    const [statement, setStatement] = useState({
        statementNumber: '0',
        statementType: 'зачетная',
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
                gradeId: 5,
                admittedToExam: true
            }
        ]
    });

    return (
        <>
            <Helmet>
                <title> Результаты ведомости | АИС "Успеваемость" </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Результаты ведомости №{statement.statementNumber}
                    </Typography>
                </Stack>

                <StatementInfoBlock statement={statement} printEnabled={'true'}/>
                
                <br />
                
                <Card>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>ФИО студента</TableCell>
                                <TableCell>Оценка</TableCell>
                                <TableCell>Допуск</TableCell>
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
                                            <Typography color={student.gradeId === 2 || student.gradeId === 1 || student.gradeId === 6 
                                                                ? 'red' 
                                                                : student.gradeId === 3 
                                                                    ? 'orange' 
                                                                    : 'green'}>
                                                {student.gradeName}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography color={student.admittedToExam ? 'green' : 'red'}>
                                                {student.admittedToExam ? 'Допущен' : 'Не допущен'}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </Card>
            </Container>
        </>
    )
}