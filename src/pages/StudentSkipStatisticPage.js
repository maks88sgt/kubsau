import {useState} from "react";
import {Helmet} from "react-helmet-async";
import {Button, Card, CardContent, Container, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";
import DropdownButton from "../sections/@dashboard/common/DropdownButton";

StudentSkipStatisticPage.propTypes = {
    id: PropTypes.number
}

export default function StudentSkipStatisticPage(props) {
    const [courseName, setCourseName] = useState('-');
    const [disciplineName, setDisciplineName] = useState('-');
    const [groups, setGroups] = useState([
        {
            groupId: 1,
            groupName: 'ИТ2041'
        },
        {
            groupId: 2,
            groupName: 'ПИ1602'
        }
    ]);

    function handleGroupSelected(value) {
        console.log(value);
    }

    return (
        <>
            <Helmet>
                <title> Сведения о пропусках студентов | АИС "Успеваемость" </title>
            </Helmet>

            <Container>
                <Stack direction="column" alignItems="left" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Сведения о пропусках студентов
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Курс {courseName}, Дисциплина "{disciplineName}"
                    </Typography>
                </Stack>

                <Card>
                    <CardContent>
                        <Typography>Сформировать для группы</Typography>
                        <Stack direction="column" spacing={2}>
                            {groups.map((item) => {
                                return (
                                    <Button variant="outlined">{item.groupName}</Button>
                                )
                            })}
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}