import {useNavigate} from "react-router-dom";
import {Button, TableCell, TableRow, Typography} from "@mui/material";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import PropTypes from "prop-types";
import DisciplineBindingCard from "./DisciplineBindingCard";

JournalListRow.propTypes = {
    disciplineName: PropTypes.string,
    courseName: PropTypes.string,
    lectures: PropTypes.array,
    seminars: PropTypes.array,
    laboratory: PropTypes.array,
    id: PropTypes.number,
    editAction: PropTypes.func
}

export default function JournalListRow(props){
    const navigate = useNavigate();
    
    function handleEditThemes(bindingId){
        navigate('/editthemes',
            {
                replace: true,
                state: {
                    id: bindingId
                },
            });
    }
    
    function handleEditSubGroups(bindingId){
        navigate('/editsubgroups',
            {
                replace: true,
                state: {
                    disciplineId: bindingId
                },
            });
    }

    function handleEditGroupJournal(bindingId){
        navigate('/disciplinegroupjournal',
            {
                replace: true,
                state: {
                    id: bindingId
                },
            });
    }
    
    function handleStudentSkipStatistic(bindingId) {
        console.log('test');
        navigate('/studentskipstatistic',
            {
                replace: true,
                state: {
                    id: bindingId
                },
            });
    }
    
    return (
        <TableRow key={props.id}>
            <TableCell>{props.disciplineName}</TableCell>
            <TableCell>{props.courseName}</TableCell>
            <TableCell>
                {props.lectures.map((item) => {
                    return (
                        <DisciplineBindingCard bindingId={item.bindingId} 
                                               groups={item.groups} 
                                               filledHours={item.filledHours} 
                                               totalHours={item.totalHours} 
                                               employeeName={item.employeeName}
                                               clickAction={() => props.editAction(item.bindingId)} />
                    );
                })}
            </TableCell>
            <TableCell>
                {props.seminars.map((item) => {
                    return (
                        <DisciplineBindingCard bindingId={item.bindingId} 
                                               groups={item.groups} 
                                               filledHours={item.filledHours} 
                                               totalHours={item.totalHours} 
                                               employeeName={item.employeeName}
                                               clickAction={() => props.editAction(item.bindingId)} />
                    );
                })}
            </TableCell>
            <TableCell>
                {props.laboratory.map((item) => {
                    return (
                        <DisciplineBindingCard bindingId={item.bindingId} 
                                               groups={item.groups} 
                                               filledHours={item.filledHours} 
                                               totalHours={item.totalHours} 
                                               employeeName={item.employeeName}
                                               clickAction={() => props.editAction(item.bindingId)} />
                    );
                })}
            </TableCell>
            <TableCell>
                <Button onClick={()=>handleEditThemes(props.id)}><FormatListBulletedOutlinedIcon /> Список тем</Button> <br />
                <Button onClick={()=>handleEditGroupJournal(props.id)}><AutoStoriesOutlinedIcon /> Журнал</Button> <br />
                <Button color="error" onClick={()=> handleEditSubGroups(props.id)}><Groups3OutlinedIcon /> Подгруппы</Button> <br />
                <Button onClick={() => handleStudentSkipStatistic(props.id)}><InsertDriveFileOutlinedIcon /> Свед. о пропусках студ-ов</Button> <br />
            </TableCell>
        </TableRow>  
    );
}