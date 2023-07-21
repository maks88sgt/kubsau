// mui components
import Container from "@mui/material/Container"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

// other
import { useState, useEffect } from "react"
import { Helmet } from 'react-helmet-async';

// my components
import { PageSubheaderWithBackButton } from '../components/page-subheader-with-back-button/PageSubheaderWithBackButton';
import { GeneralLayout } from '../layouts/GeneralLayout';

const getGroups = () => {
	return [
		{
			id: 1,
			name: "Группа 1",
			classes: [
				{
					id: 1,
					name: "Безопасность жизнедеятельности",
				},
				{
					id: 2,
					name: "Иностранный язык",
				},
			],
			students: [
				{
					id: 1,
					name: "Иванов Иван Иванович",
					points: [
						{
							id: 1,
							point: "-",
							total: 4,
						},
						{
							id: 2,
							point: "-",
							total: 12,
						},
					],
					total: 10,
					max: 16,
				},
				{
					id: 2,
					name: "Александров Александр Александрович",
					points: [
						{
							id: 1,
							point: "5",
							total: 0,
						},
						{
							id: 2,
							point: "3",
							total: 1,
						},
					],
					total: 1,
					max: 1,
				},
			],
		},
		{
			id: 2,
			name: "Группа 2",
			classes: [
				{
					id: 3,
					name: "Математический анализ",
				},
			],
			students: [
				{
					id: 3,
					name: "Иванов Иван Иванович",
					points: [
						{
							id: 3,
							point: "3",
							total: 0,
						},
					],
					total: 0,
					max: 0,
				},
				{
					id: 4,
					name: "Иванов Иван Иванович",
					points: [
						{
							id: 3,
							point: "5",
							total: 0,
						},
					],
					total: 0,
					max: 0,
				},
			],
		},
	]
}

const pointColors = {
	"-": "red",
	"2": "red",
	"3": "orange",
	"4": "green",
	"5": "green",
}

const Statements = () => {

	const groups = getGroups()

	const [tabIndex, setTabIndex] = useState(0)
	const [group, setGroup] = useState(groups[tabIndex])

	useEffect(() => {
		setGroup(groups[tabIndex])
	}, [tabIndex])

	return (
    	<GeneralLayout>
			<Helmet>
				<title> Журнал | АИС "Успеваемость" </title>
      		</Helmet>
      		<Container sx={{ paddingTop: '100px' }}>
				<PageSubheaderWithBackButton subheader={"Аттестационные ведомости"}/>
				<Tabs
					value={group}
					onChange={(e, newTabIndex) => setTabIndex(newTabIndex)}
				>
					{
						groups.map(group => (
							<Tab
								value={group}
								label={group.name}
							/>
						))
					}
				</Tabs>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>
								#			
							</TableCell>
							<TableCell>
								ФИО
							</TableCell>
							{	
								group.classes.map(cl => (
									<TableCell>
										{ cl.name }
									</TableCell>
								))
							}
							<TableCell>
								Итого
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							group.students.map((student, idx) => (
								<TableRow>
									<TableCell>
										{ idx }
									</TableCell>
									<TableCell>
										{ student.name }
									</TableCell>
									{
										student.points.map(point => (
											<TableCell>
												<Stack
													backgroundColor={
														pointColors[point.point]
													}
													width="25px"
													height="25px"
													borderRadius="25%"
													justifyContent="center"
													alignItems="center"
												>
													<Typography
														color="white"
													>
														{ point.point }	
													</Typography>
												</Stack>
												<Stack
													width="15px"
													height="15px"
													border="1px solid grey"
													borderRadius="25%"
													justifyContent="center"
													alignItems="center"
												>
													<Typography
														fontSize="60%"
													>
														{ point.total }
													</Typography>
												</Stack>
											</TableCell>
										))
									}
									<TableCell>
										{ `${student.total}/${student.max}` }
									</TableCell>
								</TableRow>
							))
						}
					</TableBody>
				</Table>
			</Container>
		</GeneralLayout>
	)
}

export default Statements
