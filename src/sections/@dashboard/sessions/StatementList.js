import {Divider, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import PropTypes, {array} from "prop-types";
import StatementCard from "../../../components/session/StatementCard";

StatementList.propTypes = {
    statements: PropTypes.array  
};

export default function StatementList(props) {
    const disciplines = props.statements.reduce((disciplinesArray, {statementId, statementName, groupName, disciplineName, openingDate, closingDate, deadline}) => {
        if (!disciplinesArray[disciplineName])
            disciplinesArray[disciplineName] = [];
        
        disciplinesArray[disciplineName].push({
            statementId,
            statementName,
            groupName,
            openingDate,
            closingDate,
            deadline
        });
        return disciplinesArray;
    }, {});
    
    console.log(disciplines);
    
    // props.students.map((row, index) => {
    //     const {studentId, lastName, firstName, middleName, attended, grade} = row;
    // }); const {statementId, statementName, groupName} = row;
    const groupedDisciplines = Object.entries(disciplines);
    
    return (
        groupedDisciplines.map((row, index) => {
            return (
                <div>
                    <Typography variant="h5">{row[0]}</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Группа</TableCell>
                                <TableCell>Осн. ведомость</TableCell>
                                <TableCell>Пересдача</TableCell>
                                <TableCell>Комиссионная</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row[1].map((item, groupIndex) => {
                              return (<TableRow>
                                  <TableCell>{item.groupName}</TableCell>
                                  <TableCell>
                                      <StatementCard statementId={item.statementId}
                                                     openingDate={item.openingDate}
                                                     closingDate={item.closingDate}
                                                     deadline={item.deadline}
                                                     statementNumber={item.statementName}/>
                                  </TableCell>
                                  <TableCell>
                                      <StatementCard statementId={item.statementId}
                                                     openingDate={item.openingDate}
                                                     closingDate={item.closingDate}
                                                     deadline={item.deadline}
                                                     statementNumber={item.statementName}/>
                                  </TableCell>
                                  <TableCell>
                                      <StatementCard statementId={item.statementId}
                                                     openingDate={item.openingDate}
                                                     closingDate={item.closingDate}
                                                     deadline={item.deadline}
                                                     statementNumber={item.statementName}/>
                                  </TableCell>
                              </TableRow>)
                            })}
                        </TableBody>
                    </Table>
                    
                    <br />
                </div>
            );
        })
    );
}