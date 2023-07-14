import {Helmet} from "react-helmet-async";
import {useEffect, useState} from "react";
import {Box, Card, CardContent, Container, Stack, Tab, Typography} from "@mui/material";
import {Alert, AlertTitle, TabContext, TabList, TabPanel} from "@mui/lab";
import EmployeeStatementsPage from "./EmployeeStatementsPage";
import PlainStatementsList from "../sections/@dashboard/sessions/PlainStatementsList";

MyStatementsPage.propTypes = {
    
}

export default function MyStatementsPage(){
    const [tabIndex, setTabIndex] = useState("1");
    const [statementCategories, setStatementCategories] = useState([]);
    
    function handleTabChange(event,data){
        setTabIndex(data);
    }
    
    useEffect(()=>{
        fetch(`session/mystatements?statementType=${tabIndex}`)
            .then((data)=>data.json())
            .then((data)=> setStatementCategories(data.categories));
    }, [tabIndex]);
    
    return ( <>
        <Helmet>
            <title> Ведомости | АИС "Успеваемость" </title>
        </Helmet>

        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    Ведомости
                </Typography>
            </Stack>
            
            <Alert color="info" variant="outlined">
                <AlertTitle align="center">Внимание!<br/>(из Кодекса корпоративной этики Кубанского ГАУ)</AlertTitle>
                <p>Коррупцией считается злоупотребление служебным положением, дача взятки, получение взятки, злоупотребление полномочиями, коммерческий подкуп либо иное незаконное использование физическим лицом своего должностного положения вопреки законным интересам общества и государства в целях получения выгоды в виде денег, ценностей, иного имущества или услуг имущественного характера, иных имущественных прав для себя или для третьих лиц либо незаконное предоставление такой выгоды указанному лицу другими физическими лицами, а также совершение указанных деяний от имени или в интересах юридического лица. К коррупционным деяниям относятся следующие преступления: злоупотребление должностными полномочиями (ст. 285 УК РФ), дача взятки (ст. 291 УК РФ), получение взятки (ст. 290 УК РФ), посредничество во взяточничестве (ст. 291.1 УК РФ), мелкое взяточничество (ст. 291.2 УК РФ), злоупотребление полномочиями (ст. 201 УК РФ), коммерческий подкуп (ст. 204 УК РФ), а также иные деяния, попадающие под понятия «коррупция», указанное выше. За указанные преступления предусмотрено наказание вплоть до лишения свободы на срок до пятнадцати лет со штрафом в размере до семидесятикратной суммы взятки и с лишением права занимать определенные должности или заниматься определенной деятельностью на срок до пятнадцати лет.</p>
            </Alert>

            <br />
            
            <Card>
                <CardContent>
                    <TabContext value={tabIndex}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={(event, data)=>handleTabChange(event, data)}>
                                <Tab label="Зачеты" value="1" />
                                <Tab label="Курсовые работы" value="2" />
                                <Tab label="Экзамены" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <PlainStatementsList statementCategories={statementCategories}/>
                        </TabPanel>
                        <TabPanel value="2">
                            <PlainStatementsList statementCategories={statementCategories}/>
                        </TabPanel>
                        <TabPanel value="3">
                            <PlainStatementsList statementCategories={statementCategories}/>
                        </TabPanel>
                    </TabContext>
                </CardContent>
            </Card>
        </Container>
    </>);
}