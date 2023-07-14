import React, {useState} from "react";
import PropTypes from "prop-types";
import {Box, Button, Popper, Typography} from "@mui/material";

DisciplineBindingCard.propTypes = {
    totalHours: PropTypes.number,
    filledHours: PropTypes.number,
    groups: PropTypes.array,
    bindingId: PropTypes.number,
    employeeName: PropTypes.string,
    clickAction: PropTypes.func
}

export default function DisciplineBindingCard(props){
    const [openPopup, setOpenPopup] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleHover = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setOpenPopup(!openPopup);
    };
    
    return (<div>
        <Button variant="contained"
                color={(props.filledHours >= props.totalHours ? "success" : (props.employeeName === null || props.employeeName === undefined || props.employeeName === '' ? "error" : "info"))} 
                fullWidth
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onClick={()=>props.clickAction()}>
            {props.groups.map((item) => {
              return (
                  <>
                      {item}
                      <br />
                  </>
              )  
            })}
        </Button><br />

        <Popper id={props.bindingId.toString()} open={openPopup} anchorEl={anchorEl}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                {props.employeeName ?? "Преподаватель не выбран"}
            </Box>
        </Popper>
        
        <Typography align="center">{props.filledHours}/{props.totalHours}</Typography>
    </div>);
}