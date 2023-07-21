// @mui
import {
    Card,
    Stack,
    Container,
    Typography,
    Button,
} from '@mui/material';

// components
import {useEffect, useState} from "react";
import Scrollbar from '../components/scrollbar';
import StudentGradeEditTable from "../sections/@dashboard/common/StudentGradeEditTable";

import { Helmet } from 'react-helmet-async';

export default function AttestationEditPage() {

	console.log("...")

    const [students, setStudents] = useState([]);
    const [groupName, setGroupName] = useState('');
    
    useEffect(() => {
        fetch(`attestation/GetEmployeeAttestationResult?attestationId=1&groupId=1`)
            .then((data) => data.json())
            .then((data) => {
                setStudents(data.students);
                setGroupName(data.groupName);
            });
    }, []);
    return (
        <>
            <Helmet>
                <title> Аттестация | АИС "Успеваемость" </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Аттестация - {groupName}
                    </Typography>
                </Stack>

                <Card>
                    <Scrollbar>
                        <StudentGradeEditTable students={students} useStatementsView="true" />
                    </Scrollbar>
                    
                    <Stack fullWidth>
                        <Button variant="contained" color="primary">Сохранить</Button>
                    </Stack>
                </Card>
            </Container>
        </>
    );
}
