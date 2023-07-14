import EditIcon from '@mui/icons-material/Edit';
import {Box, Button, Container} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Helmet } from 'react-helmet-async';
import {Link, useNavigate} from 'react-router-dom';

import {PageSubheaderWithBackButton} from "../components/page-subheader-with-back-button/PageSubheaderWithBackButton";
import { GeneralLayout } from '../layouts/GeneralLayout';

function createData(documentNumber, documentDate, semesters, student, documentLink) {
  return { documentNumber, documentDate, semesters, student, documentLink };
}

const rows = [
  createData('4', '10-08-2023', [1, 2, 3, 4, 5, 6], { name: 'Иванов Иван Иванович', link: '232323' }, '/documents/123'),
  createData(
    '5',
    '10-08-2023',
    [1, 2, 3, 4, 5, 6],
    {
      name: 'Петров Петр Петрович',
      id: '1',
    },
    '/documents/1234'
  ),
  createData(
      '5',
      '10-08-2023',
      [1, 2, 3, 4, 5, 6],
      {
        name: 'Петров Петр Петрович',
        id: '12',
      },
      '/documents/1234'
  ),
  createData(
      '5',
      '10-08-2023',
      [1, 2, 3, 4, 5, 6],
      {
        name: 'Петров Петр Петрович',
        id: '123',
      },
      '/documents/1234'
  ),
  createData(
      '5',
      '10-08-2023',
      [1, 2, 3, 4, 5, 6],
      {
        name: 'Петров Петр Петрович',
        id: '12346',
      },
      '/documents/1234'
  ),
  createData(
      '5',
      '10-08-2023',
      [1, 2, 3, 4, 5, 6],
      {
        name: 'Петров Петр Петрович',
        id: '1234',
      },
      '/documents/1234'
  ),
];

export const DocumentsRegister = () => {
  const navigate = useNavigate();
  return (
    <GeneralLayout>
      <Helmet>
        <title> Журнал | АИС "Успеваемость" </title>
      </Helmet>

      <Container sx={{ paddingTop: '100px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <PageSubheaderWithBackButton subheader={'Реестр документов'} />
          <Button
            onClick={() => {
              navigate('/documents-register/new');
            }}
            variant={'contained'}
          >
            Добавить новый документ
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="center">№ документа</TableCell>
                <TableCell align="center">Дата документа</TableCell>
                <TableCell align="center">Семестры</TableCell>
                <TableCell align="center">Студент</TableCell>
                <TableCell align="center">Документ</TableCell>
                <TableCell align="center">Действия</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.documentNumber} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {index}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.documentNumber}
                  </TableCell>
                  <TableCell align="center">{row.documentDate}</TableCell>
                  <TableCell align="center">{row.semesters.join(', ')}</TableCell>
                  <TableCell align="center">
                    <Link to={`/students/${row.student.id}`}>{row.student.name}</Link>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => {
                        navigate(`/document/${row.documentNumber}`);
                      }}
                    >
                      Открыть
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton color={'warning'}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </GeneralLayout>
  );
};
