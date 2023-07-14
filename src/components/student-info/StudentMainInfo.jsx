import Box from '@mui/material/Box';
import moment from 'moment';
import { useState } from 'react';

import { CollapseElementBlock } from '../CollapseElementBlock';
import { FlexColumnBlock } from '../FlexColumnBlock';

export const StudentMainInfo = ({ student }) => {
  const {
    name,
    previousName,
    id,
    faculty,
    course,
    group,
    isExcluded,
    login,
    spec,
    studyStartDate,
    studyEndDate,
    averageRate,
  } = student;

  const [expanded, setExpanded] = useState(false);

  return (
    <CollapseElementBlock
      collapseHeaderComponent={
        <>
          <Box component={'h1'} sx={{ p: 0, m: 0 }}>
            {name}
          </Box>
          {previousName && (
            <FlexColumnBlock>
              <Box>Предыдущие имена:</Box>
              <Box>{previousName}</Box>
            </FlexColumnBlock>
          )}
        </>
      }
    >
      <FlexColumnBlock sx={{ p: '24px', gap: '12px' }}>
        <Box>Факультет: {faculty}</Box>
        <Box>ОПОП ВО: {spec}</Box>
        <Box>Группа: {group}</Box>
        <Box>Курс: {course}</Box>
        <Box>
          Периоды обучения:{' '}
          {`c ${moment(studyStartDate).toDate()} по ${studyEndDate ? moment(studyEndDate) : 'настоящее время'}`}
        </Box>
        <Box>Средний балл за весь период обучения: {averageRate}</Box>
      </FlexColumnBlock>
    </CollapseElementBlock>
  );
};
