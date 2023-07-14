import {Input, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import PropTypes from "prop-types";

ThemesTable.propTypes = {
    themes: PropTypes.array
};

export default function ThemesTable(props){
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Тема</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.themes.map((item, index) => {
                  return (
                      <TableRow>
                          <TableCell>{index+1}</TableCell>
                          <TableCell>
                              <Input type="text" value={item.value} fullWidth/>
                          </TableCell>
                      </TableRow>
                  );  
                })}
            </TableBody>
        </Table>  
    );
}