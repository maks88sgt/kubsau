import {Box, Button, Grid, Link, Paper, Stack, Typography} from "@mui/material";
import {PrintOutlined} from "@mui/icons-material";
import PropTypes from "prop-types";
import {styled} from "@mui/material/styles";

StatementInfoBlock.propTypes = {
    statement: PropTypes.object,
    printEnabled: PropTypes.bool
}

export default function StatementInfoBlock(props){
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: '#F9FAFB',
        ...theme.typography.body2,
        textAlign: 'start',
    }));
    
    return (
        <>
            <Stack direction="row" spacing={4}>
                <Typography variant="h5">Информация о ведомости</Typography>
                {props.printEnabled
                ? (<Button variant="outlined" color="primary"><PrintOutlined /> Печать</Button>)
                : (<></>)}
            </Stack>

            <br/>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Item>
                            <Stack spacing={3}>
                                <Typography><strong>Тип ведомости: </strong>{props.statement.statementType}</Typography>
                                <Typography><strong>Дисциплина: </strong>{props.statement.disciplineName}</Typography>
                                <Typography><strong>Группа: </strong>{props.statement.group}</Typography>
                                <Typography><strong>Преподаватели: </strong>{props.statement.employees.map((item) => {
                                    return (
                                        <span><Link>{item.fullName}</Link>, </span>
                                    )
                                })}</Typography>
                            </Stack>
                        </Item>
                    </Grid>
                    <Grid item md={6}>
                        <Item>
                            <Stack spacing={3}>
                                <Typography><strong>Статус: </strong>{props.statement.dateOfClose != null ? 'Ведомость закрыта' : 'Ведомость открыта'}</Typography>
                                <Typography><strong>Сканированный документ: </strong> {props.printEnabled && props.statement.scannedDocumentId != null && props.statement.scannedDocumentId > 0
                                    ? (<Link>Просмотреть</Link>)
                                    : (<span>-</span>)}
                                </Typography>
                                <Typography><strong>Дата экзамена: </strong>{props.statement.eventDate}</Typography>
                                <Typography><strong>Дата выдачи: </strong>{props.statement.creationDate}</Typography>
                                <Typography><strong>Рекомендуемая крайняя дата закрытия: </strong>{props.statement.deadline}</Typography>
                                <Typography><strong>Дата закрытия: </strong>{props.statement.dateOfClose}</Typography>
                            </Stack>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}