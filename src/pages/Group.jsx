import { Box, Checkbox, Container, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { semesters } from '../_mock/semesters';
import { FlexColumnBlock } from '../components/FlexColumnBlock';
import { Disciplines } from "../components/group-info/Disciplines";
import { Exams } from "../components/group-info/Exams";
import { PageSubheaderWithBackButton } from '../components/page-subheader-with-back-button/PageSubheaderWithBackButton';
import { SelectSemester } from '../components/select-semester/SelectSemester';
import { GeneralLayout } from '../layouts/GeneralLayout';

const group = {
  name: 'ИТ 2021',
  faculty: 'Прикладная информатика',
  spec: '09.03.02 Информационные системы и технологии. Программа прикладного бакалавриата',
  course: 'ИТ-1Б',
  form: 'Очная',
};

const Group = () => {
  const [selectedSemester, setSelectedSemester] = useState(semesters[0]);

  return (
    <GeneralLayout>
      <Helmet>
        <title> Группа | АИС "Успеваемость" </title>
      </Helmet>
      <Container sx={{ paddingTop: '100px' }}>
        <PageSubheaderWithBackButton subheader={'Информация о группе'} />
        <SelectSemester onSelect={setSelectedSemester} selectedSemester={selectedSemester} semesters={semesters}>
          <FormControlLabel control={<Checkbox />} label="Показать отчисленных" />
        </SelectSemester>
        <FlexColumnBlock sx={{
          gap: '12px',
          borderRadius: '8px',
          border: 'solid 1px lightGray',
          justifyContent: 'space-between',
        }}>
          <Box sx={{backgroundColor: "lightGray", padding: "24px", fontSize: "24px"}}>{group.name}</Box>
          <FlexColumnBlock sx={{padding: "24px"}}>
            <Box>{`Факультет: ${group.faculty}`}</Box>
            <Box>{`ОПОП ВО: ${group.spec}`}</Box>
            <Box>{`Курс: ${group.course}`}</Box>
            <Box>{`Форма обучения: ${group.form}`}</Box>
          </FlexColumnBlock>
        </FlexColumnBlock>
        <Disciplines semester={selectedSemester.label}/>
	  	<Exams semester={selectedSemester.label}/>
      </Container>
    </GeneralLayout>
  );
};

export default Group
