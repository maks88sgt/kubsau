import { Box, FormControl, FormLabel, MenuItem, Select } from '@mui/material';

import {FlexRowBlock} from "../FlexRowBlock";

export const SelectSemester = ({ semesters, selectedSemester, onSelect, children }) => (
  <FormControl
    sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '12px',
      padding: '24px',
      borderRadius: '8px',
      border: 'solid 1px lightGray',
      my: '24px',
      justifyContent: 'space-between',
    }}
  >
    <FlexRowBlock sx={{justifyContent: "flex-start", gap: "12px"}}>
      <FormLabel htmlFor="semester-input">Выберете семестр:</FormLabel>
      <Select
        id={'semester-input'}
        value={selectedSemester}
        onChange={(ev) => onSelect(ev.target.value)}
        renderValue={(item) => <Box>{item.label}</Box>}
        size={'small'}
      >
        {semesters.map((semester) => (
          <MenuItem value={semester}>{semester.label}</MenuItem>
        ))}
      </Select>
    </FlexRowBlock>
    {children}
  </FormControl>
);
