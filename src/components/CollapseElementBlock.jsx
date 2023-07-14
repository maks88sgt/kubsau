import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Collapse, IconButton } from '@mui/material';
import { useState } from 'react';

import { FlexColumnBlock } from './FlexColumnBlock';
import { FlexRowBlock } from './FlexRowBlock';

export const CollapseElementBlock = ({ children, collapseHeaderComponent }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <FlexColumnBlock
      sx={{
        borderRadius: '8px',
        border: 'solid 1px lightGray',
        my: '24px',
        backgroundColor: expanded ? 'white' : 'lightGray',
        gap: '0px',
      }}
    >
      <FlexRowBlock
        sx={{
          backgroundColor: 'lightGray',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: expanded ? "none" : '8px',
          borderBottomLeftRadius: expanded ? "none" : '8px',
          padding: '24px',
        }}
      >
        <FlexColumnBlock sx={{ backgroundColor: 'lightGray' }}>{collapseHeaderComponent}</FlexColumnBlock>
        <IconButton onClick={() => setExpanded(!expanded)}>
          {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </FlexRowBlock>
      <Collapse in={expanded} collapsedSize={'0px'}>
        {children || <Box sx={{padding: "24px"}}>Нет данных для отображения</Box>}
      </Collapse>
    </FlexColumnBlock>
  );
};
