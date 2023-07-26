// mui components
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"

// other
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

// my components
import { PageSubheaderWithBackButton } from '../components/page-subheader-with-back-button/PageSubheaderWithBackButton';
import { GeneralLayout } from '../layouts/GeneralLayout';

// mui icons
import AddIcon from '@mui/icons-material/Add'
import CheckIcon from '@mui/icons-material/Check';
import PlaceIcon from '@mui/icons-material/Place';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShieldIcon from '@mui/icons-material/Shield';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DescriptionIcon from '@mui/icons-material/Description';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';

const practiceTypes = {
	diploma: "Преддимпломная",
	educational: "Учебная",
}

const examTypes = {
	exam: "Экзамен",
	testWithPoint: "Зачёт с оценкой",
	test: "Зачёт",
}

const statementTypes = {
	main: "Основная",
	optional: "Дополнительная",
	commissional: "Коммиссионная",
}

const getGroupFromUrl = (url) => {
	return {
		id: 1,
		name: "А0",
		practices: [
			{
				type: practiceTypes.diploma,
				isApproved: true,
				isInternship: true,
				examType: examTypes.testWithPoint,
				practiceStartDate: "01.01.2021",
				practiceEndDate: "01.02.2021",
				defenseStartDate: "01.03.2021",
				defenseEndDate: "01.04.2021",
				statements: [
					{
						id: 1,
						type: statementTypes.main,
						isNeeded: true,
						endDate: "01.02.2021",
						isDelivered: true,
					},
					{
						id: null,
						type: statementTypes.optional,
						isNeeded: false,
					},
					{
						id: null,
						type: statementTypes.commissional,
						isNeeded: false,
					},
				],
			},
			{
				type: practiceTypes.educational,
				isApproved: false,
				isInternship: false,
				examType: examTypes.exam,
				practiceStartDate: "01.01.2021",
				practiceEndDate: "01.02.2021",
				defenseStartDate: "01.03.2021",
				defenseEndDate: "01.04.2021",
				statements: [
					{
						id: 2,
						type: statementTypes.main,
						isNeeded: true,
						endDate: "01.02.2021",
						isDelivered: true,
					},
					{
						id: 3,
						type: statementTypes.optional,
						isNeeded: true,
						endDate: "01.02.2021",
						isDelivered: false,
					},
					{
						id: 4,
						type: statementTypes.commissional,
						isNeeded: true,
						endDate: "01.02.2021",
						isDelivered: false,
					},
				],
			},
		],
	}
}

const ManagePracticesForGroup = () => {

	const group = getGroupFromUrl()

	return (
		<GeneralLayout>
			<Helmet>
        		<title> Журнал | АИС "Успеваемость" </title>
      		</Helmet>
      		<Container sx={{ paddingTop: '100px', display: "flex", flexDirection: "column", gap: "24px" }}>
        		<PageSubheaderWithBackButton subheader={`Список практик группы ${group.name}`} />
				<Button
					startIcon={<AddIcon />}
					onClick={() => {}}
				>
					Добавить практику
				</Button>
				<Stack
					direction="column"
					divider={<Divider orientation="horizontal" flexItem />}
					spacing={2}
				>
					{
						group.practices.map(practice => (
						<>
							<Card
								sx={{
									display: "flex",
									flexDirection: "column",
									alignContent: "center",
								}}
							>
								<CardContent>
									<Stack
										direction="column"
										spacing={1}
									>
										<Typography>
											{ `${practice.type} практика` }
										</Typography>
										{
											practice.isApproved
											? 
											<Chip 
												icon={<CheckIcon />} 
												label="Утверждено" 
											/> 
											: 
											<Chip 
												icon={<CloseIcon />} 
													label="Не утверждено" 
											/>	
										}
										{ 
											practice.isInternship
											?
											<Chip
												icon={<PlaceIcon />}
												label="Производственная"
											/>
											:
												<Chip
												icon={<PlaceIcon />}
												label="Не производственная"
											/>
										}
										<Chip
											icon={<RadioButtonCheckedIcon />}
											label={practice.examType}
										/>
										<Chip
											icon={<CalendarMonthIcon />}
											label={`Практика: ${practice.practiceStartDate} - ${practice.practiceEndDate}`} 
										/>
										<Chip
											icon={<ShieldIcon />}
											label={ `Защита: ${practice.defenseStartDate} - ${practice.defenseEndDate}` }
										/>
									</Stack>
								</CardContent>
								<CardActions
									
								>
									<Button
										startIcon={<EditIcon />}
										onClick={() => {}}
									>
										Редактировать
									</Button>
									<Button
										startIcon={<DeleteIcon />}
										onClick={() => {}}
									>
										Удалить
									</Button>
								</CardActions>
							</Card>
							<Stack
								direction="row"
								spacing={2}
								justifyContent="space-between"
							>
							{
								practice.statements.map(statement => (
									<Card>
										<CardContent>
											<Stack
												direction="column"
												spacing={1}
											>
												<Typography>
													{ `${statement.type} ведомость` }
												</Typography>
												{
													statement.isNeeded
														?
														<>
															<Chip
																label={ `Ведомость №${statement.id}` }
															/>
															<Chip
																label={ `Дата закрытия: ${statement.endDate}` }
															/>
															{ 
																statement.isDelivered
																?
																<Chip
																	icon={<DoneAllIcon />}
																	label={`Ведомость ${ statement.isDelivered ? "сдана" : "не сдана" }`}
																/>
																:
																<Chip
																	icon={<CloseIcon />}
																	label={`Ведомость ${ statement.isDelivered ? "сдана" : "не сдана" }`}
																/>
															}
														</>
														:
														<Chip
															label="Ведомость не требуется"
														/>
												}
											</Stack>
										</CardContent>
										{ statement.isNeeded &&
											<CardActions>
												<Stack
													direction="column"
													spacing={1}
												>
													<Button
														startIcon={<DescriptionIcon />}
														onClick={() => {}}
													>
														Подробности и результаты											
													</Button>
													<Button
														startIcon={<PrintIcon />}
														onClick={() => {}}
													>
														Печать
													</Button>
													<Button
														startIcon={<DownloadIcon />}
														onClick={() => {}}
													>
														Скачать приложения
													</Button>
													<Button
														startIcon={<DeleteIcon />}
														onClick={() => {}}
													>
														Удалить
													</Button>
												</Stack>
											</CardActions>	
										}
									</Card>
								))
							}
							</Stack>
						</>
					))
				}
				</Stack>
			</Container>
		</GeneralLayout>
	)
}

export default ManagePracticesForGroup
