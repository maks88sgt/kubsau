import { Box } from '@mui/material';

import { BackButton } from '../back-button/BackButton';

export const PageSubheaderWithBackButton = ({backLink, subheader}) => (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '25px', alignItems: 'center' }}>
      <BackButton backLink={'/documents-register'} />
        {subheader}
    </Box>
  );
