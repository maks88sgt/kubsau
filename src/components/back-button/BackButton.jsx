import { ArrowBack } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export const BackButton = ({ backLink }) => {
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => {
        navigate(backLink ?? -1);
      }}
      sx={{
        backgroundColor: 'green',
        borderRadius: '50%',
        '&:hover': {
          backgroundColor: 'lime',
        },
      }}
    >
      <ArrowBack sx={{ color: 'white' }} />
    </IconButton>
  );
};
