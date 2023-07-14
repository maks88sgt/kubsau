import SearchIcon from '@mui/icons-material/Search';
import {Box, Container, OutlinedInput} from '@mui/material';
import IconButton from "@mui/material/IconButton";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { PageSubheaderWithBackButton } from '../components/page-subheader-with-back-button/PageSubheaderWithBackButton';
import { GeneralLayout } from '../layouts/GeneralLayout';

const rows = [
  {
    name: 'Петров Петр Петрович',
    id: '12',
    group: 'IT2041',
    isExcluded: false,
    login: 'petrov1996',
    spec: '09.04.02 Информационные системы и технологии',
  },
  {
    name: 'Иванов Иван Иванович',
    id: '21',
    group: 'ИТ1622',
    isExcluded: true,
    login: 'ivanov_ivan',
    spec: '09.03.02 Информационные системы и технологии. Программа прикладного бакалавриата',
  },
];

export const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState(rows);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredRows(rows);
      return;
    }
    setFilteredRows(
      rows.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.group.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.spec.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <GeneralLayout>
      <Helmet>
        <title> Журнал | АИС "Успеваемость" </title>
      </Helmet>
      <Container sx={{ paddingTop: '100px', display: "flex", flexDirection:"column",gap: "24px" }}>
        <PageSubheaderWithBackButton subheader={'Поиск студентов'} />
        <Box>
          <OutlinedInput sx={{width: ["100%", "50%"]}} placeholder={"Введите поисковый запрос"} size={"small"} value={searchTerm} onChange={(ev) => setSearchTerm(ev.target.value)} />
          <IconButton ><SearchIcon/></IconButton>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="center">Ф.И.О.</TableCell>
                <TableCell align="center">Группа (на текущий момент)</TableCell>
                <TableCell align="center">Логин Личного кабинета</TableCell>
                <TableCell align="center">ОПОП ВО</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row, index) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    <Link to={`${row.id}`}>{row.name}</Link>
                  </TableCell>
                  <TableCell align="center">{row.group}</TableCell>
                  <TableCell align="center">{row.login}</TableCell>
                  <TableCell align="center">{row.spec}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </GeneralLayout>
  );
};
