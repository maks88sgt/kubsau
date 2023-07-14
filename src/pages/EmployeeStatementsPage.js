import { Helmet } from 'react-helmet-async';
import {useEffect, useState} from "react";
// @mui
import {
    Card,
    Stack,
    Container,
    Typography,
    Box, Tab, CardContent,
} from '@mui/material';
import {TabContext, TabList, TabPanel} from "@mui/lab";
import StatementList from "../sections/@dashboard/sessions/StatementList";

export default function EmployeeStatementsPage() {
    const [tabIndex, setTabIndex] = useState(1);
    const [statements, setStatements] = useState([]);
    
    function handleTabChange(event, value){
        setTabIndex(value);
    }
    
    useEffect(()=>{
        fetch(`session/employeestatements?statementType=${tabIndex}`)
            .then((data)=>data.json())
            .then((data)=>setStatements(data.statements));
    }, [tabIndex]);
    
    return (
        <>
            <Helmet>
                <title> Ведомости | АИС "Успеваемость" </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Ведомости
                    </Typography>
                </Stack>

                <Card>
                    <CardContent>
                        <TabContext value={tabIndex}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={(event, data)=>handleTabChange(event, data)}>
                                    <Tab label="Зачеты" value={1} />
                                    <Tab label="Курсовые работы" value={2} />
                                    <Tab label="Экзамены" value={3} />
                                </TabList>
                            </Box>
                            <TabPanel value={1}>
                                <StatementList statements={statements} />
                            </TabPanel>
                            <TabPanel value={2}>
                                <StatementList statements={statements} />
                            </TabPanel>
                            <TabPanel value={3}>
                                <StatementList statements={statements} />
                            </TabPanel>
                        </TabContext>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}