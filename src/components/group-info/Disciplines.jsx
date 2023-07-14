import {Box, Typography} from "@mui/material";

export const Disciplines = ({ semester }) => <Box sx={{marginTop: "24px"}}>
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
      Дисциплины
      <Typography color={'gray'}>{semester}</Typography>
    </Box>
  </Box>;
