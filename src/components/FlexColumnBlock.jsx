import { Box } from '@mui/material';

export const FlexColumnBlock = ({ children, sx }) => (
  <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: "12px", ...sx }}>{children}</Box>
);
