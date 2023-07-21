import { ArrowBack } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { DateField, DesktopDatePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import moment from 'moment';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';

import { BackButton } from '../components/back-button/BackButton';
import {PageSubheaderWithBackButton} from "../components/page-subheader-with-back-button/PageSubheaderWithBackButton";
import { GeneralLayout } from '../layouts/GeneralLayout';

const CreateDocument = () => {
  const { id } = useParams();

  const [documentNumber, setDocumentNumber] = useState('');
  const [documentDate, setDocumentDate] = useState(moment(moment.now()));

  return (
    <GeneralLayout>
      <Helmet>
        <title> Журнал | АИС "Успеваемость" </title>
      </Helmet>

      <Container sx={{ paddingTop: '100px' }}>
        <PageSubheaderWithBackButton backLink={'/documents-register'} subheader={"Добавить документ"}/>
        <Box sx={{ display: 'grid', gridTemplateColumns: ["1fr", '1fr 1fr'], gap: '24px', paddingTop: '12px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <FormControl variant="standard" sx={{ width: '100%' }}>
              <FormLabel htmlFor="document-number-input">Номер документа:</FormLabel>
              <OutlinedInput
                value={documentNumber}
                onChange={(ev) => setDocumentNumber(ev.target.value)}
                id="document-number-input"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ width: '100%' }}>
              <FormLabel htmlFor="document-date-input">Дата документа:</FormLabel>
              <DemoContainer components={['DatePicker']}>
                <DesktopDatePicker
                  localeText={{}}
                  value={documentDate}
                  onChange={(newValue) => setDocumentDate(newValue)}
                />
              </DemoContainer>
            </FormControl>
            <FormControl variant="standard" sx={{ width: '100%' }}>
              <FormLabel htmlFor="document-file-input">Выбор файла:</FormLabel>
              <OutlinedInput type={'file'} />
            </FormControl>
            <FormControl variant="standard" sx={{ width: '100%' }}>
              <FormLabel htmlFor="document-file-input">Поиск студента:</FormLabel>
              <OutlinedInput id="document-file-input" />
            </FormControl>
            <FormControl variant="standard" sx={{ width: '100%' }}>
              <FormLabel htmlFor="document-file-input">Выбор студента:</FormLabel>
              <OutlinedInput id="document-file-input" />
            </FormControl>
          </Box>
          <Box>
            <FormLabel htmlFor="document-file-input">Семестр:</FormLabel>
            <FormControl sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FormControlLabel control={<Checkbox />} label="1-й" />
                <FormControlLabel control={<Checkbox />} label="2-й" />
                <FormControlLabel control={<Checkbox />} label="3-й" />
                <FormControlLabel control={<Checkbox />} label="4-й" />
                <FormControlLabel control={<Checkbox />} label="5-й" />
                <FormControlLabel control={<Checkbox />} label="6-й" />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FormControlLabel control={<Checkbox />} label="7-й" />
                <FormControlLabel control={<Checkbox />} label="8-й" />
                <FormControlLabel control={<Checkbox />} label="9-й" />
                <FormControlLabel control={<Checkbox />} label="10-й" />
                <FormControlLabel control={<Checkbox />} label="11-й" />
              </Box>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{mt: "12px"}}>
          <Button size={'large'} variant={'contained'}>
            Загрузить
          </Button>
        </Box>
      </Container>
    </GeneralLayout>
  );
};

export default CreateDocument
