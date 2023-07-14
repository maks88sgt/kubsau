import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import LooksTwoIcon from '@mui/icons-material/LooksTwo'
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

JournalGradeSmall.propTypes = {
    grade: PropTypes.number,
    color: PropTypes.string,
    id: PropTypes.number,
    onClick: PropTypes.func
}

export default function JournalGradeSmall(props) {
    return (
        <>
            <IconButton size="small" color={props.color} onClick={(data) => props.onClick(data)}>
                {props.grade === 2
                    ? (<LooksTwoIcon fontSize="inherit"/>)
                    : props.grade === 3
                        ? (<Looks3Icon fontSize="inherit"/>)
                        : props.grade === 4
                            ? (<Looks4Icon fontSize="inherit"/>)
                            : props.grade === 5
                                ? (<Looks5Icon fontSize="inherit"/>)
                                : (<DisabledByDefaultIcon fontSize="inherit"/>)
                }
            </IconButton>
        </>
    );
}