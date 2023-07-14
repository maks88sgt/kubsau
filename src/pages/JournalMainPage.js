import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer, TableHead, CardContent, Button, Select, FormControl, InputLabel, MenuItem,
} from '@mui/material';
// components
import Scrollbar from '../components/scrollbar';
import JournalListRow from "../sections/@dashboard/journal/JournalListRow";
// sections

// ----------------------------------------------------------------------

export default function JournalMainPage() {
  
  const navigate = useNavigate();
  const [bindings, setBindings] = useState([]);

  useEffect(()=>{
    
    fetch(`journal/employeeBindings`)
        .then((data)=>data.json())
        .then((data)=> setBindings(data.bindings));
  }, []);
  
  function handleClick(bindingId){
    navigate('/journaledit',
        {
          replace: false,
          state: {
            bindingId
          }
        });
  }

  return (
      <>
        <Helmet>
          <title> Журнал | АИС "Успеваемость" </title>
        </Helmet>

        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Журнал
            </Typography>
          </Stack>
          
          <Card variant="outlined">
            <CardContent>
              <Stack direction="row" spacing={3}>
                <Typography>Фильтр</Typography>
                
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Дисциплина</InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={10}
                      label="Дисциплина"
                  >
                    <MenuItem value={10}>Все дисциплины</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{minWidth:150}}>
                  <InputLabel id="demo-simple-select-label">Курс</InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={10}
                      label="Курс"
                  >
                    <MenuItem value={10}>Все курсы</MenuItem>
                  </Select>
                </FormControl>
                
                <Button variant="outlined" color="primary">Сбросить фильтр</Button>
              </Stack>
            </CardContent>
          </Card>

          <br />
          
          <Card>
            <Scrollbar>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Дисциплина</TableCell>
                    <TableCell>Курс</TableCell>
                    <TableCell>Лекции</TableCell>
                    <TableCell>Семинары</TableCell>
                    <TableCell>Лабораторные</TableCell>
                    <TableCell>Операции</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bindings.map((item)=>{
                    return (
                        <JournalListRow courseName={item.courseName}
                                        disciplineName={item.disciplineName}
                                        id={item.bindingId}
                                        laboratory={item.flows.filter((flow) => flow.flowType === 2)} 
                                        lectures={item.flows.filter((flow) => flow.flowType === 0)} 
                                        seminars={item.flows.filter((flow) => flow.flowType === 1)}
                                        editAction={(bindingId)=> handleClick(bindingId)}/>
                    )
                  })}
                </TableBody>
              </Table>
            </Scrollbar>
          </Card>
        </Container>
      </>
  );
}
