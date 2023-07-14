import { Helmet } from 'react-helmet-async';
// @mui
import {
    Card,
    Stack,
    Container,
    Typography,
    TableContainer,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

// components
import Scrollbar from '../components/scrollbar';
// sections
import { StepByStepTable } from "../sections/@dashboard/attestations";

export default function AttestationsPage() {
    const navigate = useNavigate();
    function handleClick(step, stepResults){
        if (step >= steps.length - 1){
            navigate('/attestationedit', { replace: false });
        }
    }
    
    const steps = [
        {
            fetchUrl : 'attestation/listemployeeattestations',
            tableHead : [ { id: 'value', label: 'Аттестация', alignRight: false } ],
        },
        {
            fetchUrl : `attestation/ListAttestationDisciplines?id={step0Value}`,
            tableHead : [ { id: 'value', label: 'Дисциплина', alignRight: false } ],
        },
        {
            fetchUrl : `attestation/ListGroupsByAttestationDiscipline?attestationId={step0Value}&disciplineId={step1Value}`,
            tableHead : [ { id: 'value', label: 'Группа', alignRight: false } ],
        },
    ];
    
    return (
        <>
            <Helmet>
                <title> Аттестации | АИС "Успеваемость" </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Аттестации
                    </Typography>
                </Stack>

                <Card>
                    <Scrollbar>
                        <TableContainer sx={{ minWidth: 800 }}>
                            <StepByStepTable
                                itemClickHandler={(step, stepResults)=>handleClick(step, stepResults)}
                                steps={steps}/>
                        </TableContainer>
                    </Scrollbar>
                </Card>
            </Container>
        </>
    );
}