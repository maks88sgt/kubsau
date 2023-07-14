import {Helmet} from "react-helmet-async";
import {useState} from "react";
import {
    Box, Button,
    Card,
    Container,
    Stack,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tabs,
    Typography,
    Checkbox
} from "@mui/material";
import {TabContext, TabPanel} from "@mui/lab";

export default function EditSubGroupsPage(props) {
    const [refresh, setRefresh] = useState(false);
    const [tabIndex, setTabIndex] = useState('1');
    const [subGroups, setSubGroups] = useState([
        {
            id: 1,
            subGroupName: 'ИТ2041 - Подгруппа 1',
            students: [
                {
                    id: 1,
                    lastName: 'Иванов',
                    firstName: 'Иван',
                    middleName: 'Иванович',
                    accepted: false,
                    employee: 'Ильин Владимир Викторович'
                },
                {
                    id: 2,
                    lastName: 'Скворцов',
                    firstName: 'Петр',
                    middleName: 'Михайлович',
                    accepted: true
                },
            ]
        },
        {
            id: 2,
            subGroupName: 'ПИ2041 - Подгруппа 2',
            students: [
                {
                    id: 3,
                    lastName: 'Иванова',
                    firstName: 'Анастасия',
                    middleName: 'Ивановна',
                    accepted: false
                },
                {
                    id: 4,
                    lastName: 'Скворцова',
                    firstName: 'Полина',
                    middleName: 'Михайловна',
                    accepted: true,
                    employee: ''
                },
            ]
        }
    ]);

    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    
    function handleStudentCheckChange(event, value, student) {
        student.accepted = value;
        applyVisualChanges();
    }

    function applyVisualChanges(){
        setRefresh(!refresh);
    }

    return (
        <>
            <Helmet>
                <title> Редактирование подгрупп | АИС "Успеваемость" </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Редактирование подгрупп - Наименование дисциплины
                    </Typography>
                </Stack>

                <TabContext value={tabIndex}>
                    <Box sx={{width: '100%'}}>
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <Tabs value={tabIndex} onChange={(event, newValue) => handleChange(event, newValue)}>
                                {subGroups.map((item) => {
                                    return (
                                        <Tab key={item.id} label={item.subGroupName} value={item.id.toString()} />
                                    )
                                })}
                            </Tabs>
                        </Box>
                        {subGroups.map((item) => {
                            return (
                                <TabPanel key={item.id} value={item.id.toString()}>
                                    <Card>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>#</TableCell>
                                                    <TableCell>ФИО</TableCell>
                                                    <TableCell align="center">Добавить в подгруппу</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {item.students.map((student, studentIndex) => {
                                                    return (
                                                        <TableRow key={student.id}>
                                                            <TableCell>{studentIndex+1}</TableCell>
                                                            <TableCell>{student.lastName}<br />{student.firstName} {student.middleName}</TableCell>
                                                            <TableCell align="center">
                                                                {student.employee != null && student.employee.length > 0
                                                                    ? <>{"Преподаватель — "} {student.employee}</>
                                                                    : <Checkbox onChange={(event, value) => handleStudentCheckChange(event, value, student)} 
                                                                                checked={student.accepted}
                                                                      />}
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })}
                                            </TableBody>
                                        </Table>
                                        
                                        <br />
                                        
                                        <Stack alignContent="center" fullWidth>
                                            <Button color="primary" variant="contained">Сохранить</Button>
                                        </Stack>
                                    </Card>
                                </TabPanel>
                            )
                        })}
                    </Box>
                </TabContext>
            </Container>
        </>
    );
}