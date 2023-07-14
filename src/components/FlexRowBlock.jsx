import { Box } from '@mui/material';

export const FlexRowBlock = ({ children, sx }) => (
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      ...sx,
    }}
  >
    {children}
  </Box>
);
