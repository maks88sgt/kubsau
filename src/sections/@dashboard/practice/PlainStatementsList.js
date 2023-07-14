import PropTypes from "prop-types";
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import {useNavigate} from "react-router-dom";

PlainPracticeStatementsList.propTypes = {
    statements: PropTypes.array
}

export default function PlainPracticeStatementsList(props) {
    const navigate = useNavigate();
    
    function statementTypeNameByNumber(number) {
        switch (number) {
            case 1:
                return 'Основная';
            case 2:
                return 'Дополнительная';
            case 3:
                return 'Комиссионная';
            default:
                return 'Неизвестный тип ведомости';
        }
    }

    function toDateString(date) {
        return new Date(date).toLocaleDateString("ru-RU");
    }
    
    function handleOpenStatement(statement) {
        if (statement.closingDate != null) {
            navigate('/statementresults',
                {
                    replace: false,
                    state: {
                        statementId: statement.statementId
                    }
                });
        }
        else {
            navigate('/statementedit',
                {
                    replace: false,
                    state: {
                        statementId: statement.statementId
                    }
                });
        }
    }

    return (
        props.statements.map((statementCategoryRow) => {
            return (
                <div>
                    <Typography variant="h6">{statementCategoryRow.practiceTypeName}</Typography>

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Тип сдачи</TableCell>
                                    <TableCell>№ ведомости</TableCell>
                                    <TableCell>Операции</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {statementCategoryRow.statements.map((statement) => {
                                    return (
                                        <TableRow key={statement.statementId}
                                                  style={statement.closingDate !== null ? {background: "#5AD72A33"} : {}}>
                                            <TableCell>
                                                {statementTypeNameByNumber(statement.numberInOrder)}
                                            </TableCell>
                                            <TableCell>{statement.statementName}</TableCell>
                                            <TableCell>
                                                <Button onClick={() => handleOpenStatement(statement)}>
                                                    {
                                                        statement.closingDate != null 
                                                        ? (<InsertDriveFileOutlinedIcon/>)  
                                                        : (<BorderColorOutlinedIcon/>)  
                                                    }
                                                    {
                                                        statement.closingDate != null
                                                            ? 'Подробности'
                                                            : 'Редактировать'
                                                    }
                                                </Button>
                                                <br/>
                                                <Button><LocalPrintshopOutlinedIcon/> Печать</Button>
                                                <br/>
                                                <Button><ReceiptLongOutlinedIcon/> Справочная вед.</Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br/>
                </div>
            );
        })
    );
}