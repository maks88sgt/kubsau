import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import {
    Box, Button,
    Card,
    Container, Input,
    Stack, Tab, Table, TableBody, TableCell, TableHead, TableRow, ToggleButton, ToggleButtonGroup,
    Typography
} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import Scrollbar from "../components/scrollbar/Scrollbar";
import ThemesTable from "../sections/@dashboard/journal/ThemesTable";

EditThemesPage.propTypes = {
    id: PropTypes.number
}

export default function EditThemesPage(props) {
    const { state } = useLocation();

    const [forCourse, setForCourse] = useState(1);
    const [lessonType, setLessonType] = useState('1');
    const [disciplineName, setDisciplineName] = useState('Математика');
    const [courseName, setCourseName] = useState('38.03.04 Государственное и муниципальное управление, «Государственное и муниципальное управление» (программа бакалавриата) 1 курс');
    const [themes, setThemes] = useState([]);

    useEffect(()=>{
        fetch(`journal/themeslistforemployee`)
            .then((data)=>data.json())
            .then((data)=> setThemes(data.themes));
    }, []);
    
    function handleFillTypeChange(value){
        setForCourse(value);
    }

    function handleTabChange(event,data){
        setLessonType(data);
    }
    
    return (
        <>
            <Helmet>
                <title> Список тем | АИС "Успеваемость" </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Список тем
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={3}>
                    <Typography variant="h5">Для дисциплины "{disciplineName}" для {courseName}</Typography>

                    <ToggleButtonGroup orientation="horizontal"
                                       exclusive
                                       value={forCourse}
                                       aria-label="Оценка"
                                       color="primary"
                                       onChange={(event, value) => handleFillTypeChange(value)}>
                        <ToggleButton value={1} area-label="Для всего курса" color="info">Для всего курса</ToggleButton>
                        <ToggleButton value={2} area-label="Для потока" color="info">Для потока</ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

                <br />

                <Card>
                    <Scrollbar>
                        <TabContext value={lessonType}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={(event, data)=>handleTabChange(event, data)}>
                                    <Tab label="Лекции" value="1" />
                                    <Tab label="Практические занятия" value="2" />
                                    <Tab label="Лабораторные занятия" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <ThemesTable themes={themes.filter((item) => item.type === 1)}/>
                            </TabPanel>
                            <TabPanel value="2">
                                <ThemesTable themes={themes.filter((item) => item.type === 2)}/>
                            </TabPanel>
                            <TabPanel value="3">
                                <ThemesTable themes={themes.filter((item) => item.type === 3)}/>
                            </TabPanel>
                        </TabContext>
                        
                        <Stack alignContent="flex-end">
                            <Button size="large" variant="contained" align="right">Сохранить</Button>
                        </Stack>
                    </Scrollbar>
                </Card>
            </Container>
        </>
    );
}