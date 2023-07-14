import {Box, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {Link} from "react-router-dom";

import {getAttestation} from "../../../utils/getAttestation";
import {CollapseElementBlock} from "../../CollapseElementBlock";

export const Session = ({ semester, results = [] }) => (
  <CollapseElementBlock
    collapseHeaderComponent={
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
        Сессия
        <Typography color={'gray'}>{semester}</Typography>
      </Box>
    }
  >
    {results.length ? (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">Дисциплина</TableCell>
              <TableCell align="center">Тип контроля</TableCell>
              <TableCell align="center">Преподаватели</TableCell>
              <TableCell align="center">Ведомость</TableCell>
              <TableCell align="center">Оценка</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((discipline) => (
              <TableRow key={discipline.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {discipline.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {discipline.type}
                  {discipline.date}
                </TableCell>
                <TableCell component="th" scope="row">
                  {discipline.teachers.map((it) => <Link to={`/personal/${it.id}`}>{it.name}</Link>)}
                </TableCell>
                <TableCell component="th" scope="row">
                  {`Ведомость №${discipline.statement.id}`}
                  {discipline.statement.status ? '(закрыта)' : '(открыта)'}
                  {discipline.statement.status && discipline.statement.dateOfClose}
                </TableCell>
                <TableCell component="th" scope="row">
                  {getAttestation(discipline.grade)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    ) : null}
  </CollapseElementBlock>
);
