import { Helmet } from 'react-helmet-async';
// @mui
import {
    Card,
    Stack,
    Container,
    Typography,
    TableContainer,
} from '@mui/material';
// components
import Scrollbar from '../components/scrollbar';
// sections
import { StepByStepTable } from "../sections/@dashboard/attestations";

export default function SessionsPage() {    
    function handleClick(parameter){
    }
    
    const steps = [
        {
            fetchUrl : 'session/ListSessionDisciplinesForEmployee',
            tableHead : [ { id: 'value', label: 'Дисциплина', alignRight: false } ],
        },
        {
            fetchUrl : `session/ListSessionDisciplineGroupsForEmployee?disciplineId={step0Value}`,
            tableHead : [ { id: 'value', label: 'Группа', alignRight: false } ],
        },
        {
            fetchUrl : `session/ListStatementsByDisciplineAndGroup?disciplineId={step0Value}&groupId={step1Value}`,
            tableHead : [ { id: 'value', label: 'Ведомость', alignRight: false } ],
        },
    ];
    
    return (
        <>
            <Helmet>
                <title> Сессии | АИС "Успеваемость" </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Сессии
                    </Typography>
                </Stack>

                <Card>
                    <Scrollbar>
                        <TableContainer sx={{ minWidth: 800 }}>
                            <StepByStepTable
                                itemClickHandler={(data)=>handleClick(data)}
                                steps={steps}/>
                        </TableContainer>
                    </Scrollbar>
                </Card>
            </Container>
        </>
    );
}