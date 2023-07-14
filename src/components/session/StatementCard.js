import PropTypes from "prop-types";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Typography
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

StatementCard.propTypes = {
    statementId: PropTypes.number,
    statementNumber: PropTypes.string,
    openingDate: PropTypes.object,
    closingDate: PropTypes.object,
    deadline: PropTypes.object,
}

export default function StatementCard(props){
    const isClosed = props.closingDate !== null;
    
    function toDateString(date){
        return new Date(date).toLocaleDateString("ru-RU");
    }
    
    return (
        <Card variant="outlined">
            <CardActionArea>
                <CardContent>
                    <Typography variant="h6">№ {props.statementNumber}</Typography>
                    <p>
                        <strong>Дата открытия: </strong>
                        {toDateString(props.openingDate)}
                    </p>
                    {(isClosed 
                    ? (<p>
                        <strong>Дата закрытия: </strong>
                        {toDateString(props.closingDate)}
                    </p>) 
                    : <></>)}
                    
                    <p>
                        <strong>Крайняя дата закрытия: </strong>
                        {toDateString(props.deadline)}
                    </p>
                </CardContent>
                <CardActions>
                    <Button>
                        Печать
                    </Button>
                    
                    <Button>
                        Справочная вед.
                    </Button>

                    {!isClosed 
                        ? (<Button>
                            Закрыть вед.
                        </Button>)
                        : <></>}
                </CardActions>
            </CardActionArea>
        </Card>
    )
}