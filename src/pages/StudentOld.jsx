import { Box, Container, FormControl, FormLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import {disciplines} from "../_mock/disciplines";
import {results} from "../_mock/results";
import {semesters} from "../_mock/semesters";
import {student} from "../_mock/student";
import { PageSubheaderWithBackButton } from '../components/page-subheader-with-back-button/PageSubheaderWithBackButton';
import {SelectSemester} from "../components/select-semester/SelectSemester";
import { Disciplines } from '../components/student-info/disciplines/Disciplines';
import { Documents } from '../components/student-info/documents/Documents';
import { Practices } from '../components/student-info/practices/Practices';
import { Session } from '../components/student-info/session/Session';
import { StudentMainInfo } from '../components/student-info/StudentMainInfo';
import { GeneralLayout } from '../layouts/GeneralLayout';

const Student = () => {
  const { id } = useParams();

  const [selectedSemester, setSelectedSemester] = useState(semesters[0]);

  return (
    <GeneralLayout>
      <Helmet>
        <title> Журнал | АИС "Успеваемость" </title>
      </Helmet>
      <Container sx={{ paddingTop: '100px' }}>
        <PageSubheaderWithBackButton subheader={'Информация о студенте'} />
        <SelectSemester onSelect={setSelectedSemester} selectedSemester={selectedSemester} semesters={semesters}/>
        <StudentMainInfo student={student} />
        <Disciplines semester={selectedSemester.label} disciplines={disciplines} />
        <Documents semester={selectedSemester.label} />
        <Practices semester={selectedSemester.label} />
        <Session semester={selectedSemester.label} results={results} />
      </Container>
    </GeneralLayout>
  );
};

export default Student
