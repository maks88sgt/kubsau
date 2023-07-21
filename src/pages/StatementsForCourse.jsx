import { Helmet } from 'react-helmet-async';
import {useEffect, useState} from "react";
// @mui
import {
    Card,
    Stack,
    Container,
    Typography,
    Box, Tab, CardContent,
} from '@mui/material';
import {TabContext, TabList, TabPanel} from "@mui/lab";

// mui components
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"

// my components
import { PageSubheaderWithBackButton } from '../components/page-subheader-with-back-button/PageSubheaderWithBackButton';
import { GeneralLayout } from '../layouts/GeneralLayout';

const tests = "Зачеты"
const courseWorks = "Курсовые работы"
const exams = "Экзамены" 
const checkpoints = [tests, courseWorks, exams]
const statementTypes = {
	main: "Основная",
	optional: "Дополнительная",
	commissional: "Коммиссионная",
}

const getCourseFromUrl = (url) => {
	return {
		code: "00.00.00",
		name: "Бизнес-информатика",
		isBachelor: true,
		year: 1,
		tests: {
			classes: [
				{
					id: 1,
					name: "Дисциплина 1",
					department: "Кафедра 1",
					entries: [
						{
							group: {
								id: 1,
								name: "А0",
							},
							statements: {
								[statementTypes.main]: {
									id: 1,
									endDate: "01.01.2021",
									deliveryDate: "01.02.2021",
									isNeeded: true,
								},
								[statementTypes.optional]: {
									isNeeded: false,
								},
								[statementTypes.commissional]: {
									isNeeded: false,
								},
							},
						},
					],
				},
			],
		},
		courseWorks: {
			classes: [
				{
					id: 1,
					name: "Дисциплина 1",
					department: "Кафедра 1",
					entries: [
						{
							group: {
								id: 1,
								name: "А0",
							},
							statements: {
								[statementTypes.main]: {
									id: 1,
									endDate: "01.01.2021",
									deliveryDate: "01.02.2021",
									isNeeded: true,
								},
								[statementTypes.optional]: {
									isNeeded: false,
								},
								[statementTypes.commissional]: {
									isNeeded: false,
								},
							},
						},
					],
				},
			],
		},
		exams: {
			classes: [
				{
					id: 1,
					name: "Дисциплина 1",
					department: "Кафедра 1",
					entries: [
						{
							group: {
								id: 1,
								name: "А0",
							},
							statements: {
								[statementTypes.main]: {
									id: 1,
									endDate: "01.01.2021",
									deliveryDate: "01.02.2021",
									isNeeded: true,
								},
								[statementTypes.optional]: {
									isNeeded: false,
								},
								[statementTypes.commissional]: {
									isNeeded: false,
								},
							},
						},
					],
				},
			],
		},
	}
}

const course = getCourseFromUrl()

const TableForClass = ({cl}) => {
	return (
		<>
			<Typography>
				{ cl.name }
			</Typography>
			<Typography>
				{ cl.department }
			</Typography>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>
							Группа
						</TableCell>
						<TableCell>
							{ `${statementTypes.main} ведомость` }
						</TableCell>
						<TableCell>
							{ `${statementTypes.optional} ведомость` }
						</TableCell>
						<TableCell>
							{ `${statementTypes.commissional} ведомость` }
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						cl.entries.map(entry => (
							<TableRow>
								<TableCell>
									{ entry.group.name }
								</TableCell>
								<TableCell>
									{ 
										entry.statements[statementTypes.main].isNeeded && 
											entry.statements[statementTypes.main].id 
									}
								</TableCell>
								<TableCell>
									{ 
										entry.statements[statementTypes.optional].isNeeded && 
											entry.statements[statementTypes.optional].id 
									}
								</TableCell>
								<TableCell>
									{ 
										entry.statements[statementTypes.commissional].isNeeded && 
											entry.statements[statementTypes.commissional].id 
									}
								</TableCell>
							</TableRow>
						))
					}
				</TableBody>
			</Table>
		</>
	)
}

const StatementsForCourse = () => {
    const [tabIndex, setTabIndex] = useState(1);
    const [statements, setStatements] = useState([]);
    
    const handleTabChange = (event, value) => {
        setTabIndex(value);
    }
    
    return (
    	<GeneralLayout>
            <Helmet>
                <title> Ведомости | АИС "Успеваемость" </title>
            </Helmet>
            <Container sx={{ paddingTop: '100px' }}>
				<PageSubheaderWithBackButton subheader={`Ведомости сессии ${course.code} ${course.name} (программа ${ course.isBachelor ? "бакалавриата" : "магистратуры" }) ${course.year} курс`}/>
                <Card>
                    <CardContent>
                        <TabContext value={tabIndex}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={(event, data)=>handleTabChange(event, data)}>
                                    <Tab label="Зачеты" value={1} />
                                    <Tab label="Курсовые работы" value={2} />
                                    <Tab label="Экзамены" value={3} />
                                </TabList>
                            </Box>
                            <TabPanel value={1}>
								{
									course.tests.classes.map(cl => (
										<TableForClass 
											cl={cl}
										/>
									))
								}
                            </TabPanel>
                            <TabPanel value={2}>
                            	{
									course.courseWorks.classes.map(cl => (
										<TableForClass 
											cl={cl}
										/>
									))
								}
                            </TabPanel>
                            <TabPanel value={3}>
                                {
									course.exams.classes.map(cl => (
										<TableForClass 
											cl={cl}
										/>
									))
								}
                            </TabPanel>
                        </TabContext>
                    </CardContent>
                </Card>
            </Container>
        </GeneralLayout>
    );
}

export default StatementsForCourse
