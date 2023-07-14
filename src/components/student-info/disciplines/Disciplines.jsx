import {Box, Divider, Typography} from '@mui/material';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import {getAttestation} from "../../../utils/getAttestation";
import {CollapseElementBlock} from "../../CollapseElementBlock";

export const Disciplines = ({ semester, disciplines }) => (
  <CollapseElementBlock
    collapseHeaderComponent={
      <Box sx={{display: "flex", flexDirection: "row", gap: "12px", alignItems: "center"}}>
        Дисциплины
        <Typography color={"gray"}>{semester}</Typography>
      </Box>
    }
  >
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} stickyHeader>
              <TableHead>
                  <TableRow>
                      <TableCell align="center">Наименование</TableCell>
                      <TableCell align="center">Тип</TableCell>
                      <TableCell align="center">Пропущено часов</TableCell>
                      <TableCell align="center">Аттестация 1 (Оценка)</TableCell>
                      <TableCell align="center">Аттестация 2 (Оценка)</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {disciplines.map((discipline) => (
                      <TableRow key={discipline.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component="th" scope="row">
                              <Box>{discipline.name}</Box>
                              <Box>{discipline.department}</Box>
                          </TableCell>
                          <TableCell align="center">{discipline.control.map(({type})=><TableRow><TableCell>{type}</TableCell></TableRow>)}</TableCell>
                          <TableCell align="center">{discipline.control.map(({missedHours})=><TableRow><TableCell>{missedHours}</TableCell></TableRow>)}</TableCell>
                          <TableCell align="center">{discipline.control.map(({attestation1})=><TableRow><TableCell>{getAttestation(attestation1)}</TableCell></TableRow>)}</TableCell>
                          <TableCell align="center">{discipline.control.map(({attestation2})=><TableRow><TableCell>{getAttestation(attestation2)}</TableCell></TableRow>)}</TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
  </CollapseElementBlock>
);
