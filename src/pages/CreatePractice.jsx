// mui components
import Container from "@mui/material/Container"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

// mui icons
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

// other
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import * as dayjs from 'dayjs'; // used for DatePicker (https://mui.com/x/react-date-pickers/date-picker/)

// my components
import { PageSubheaderWithBackButton } from '../components/page-subheader-with-back-button/PageSubheaderWithBackButton';
import { GeneralLayout } from '../layouts/GeneralLayout';

const CreatePractice = () => {

	const practiceKinds = ["Учебная", "Производственная"]
	const examTypes = ["Экзамен", "Зачёт с оценкой", "Зачёт"]

	const today = dayjs()
	const [dateOfPracticeStart, setDateOfPracticeStart] = useState()
	const [dateOfPracticeEnd, setDateOfPracticeEnd] = useState()
	const [dateOfDefenseStart, setDateOfDefenseStart] = useState()
	const [dateOfDefenseEnd, setDateOfDefenseEnd] = useState()

	const allCommissionMembers = ["Иванов Иван Иванович", "Александров Александр Александрович", "Андреев Андрей Андреевич"] 
	const [commissionMembers, setCommissionMembers] = useState([])

	const addCommisionMember = () => {
		const newCommisionMembers = [...commissionMembers, []]
		setCommissionMembers(newCommisionMembers)
	}

	const deleteCommissionMember = (idx) => {
		const newCommisionMembers = commissionMembers.filter((member, memberIdx) => memberIdx !== idx)
		setCommissionMembers(newCommisionMembers)
	}

	return (
		<GeneralLayout>
			<Helmet>
        		<title> Журнал | АИС "Успеваемость" </title>
      		</Helmet>
      		<Container sx={{ paddingTop: '100px', display: "flex", flexDirection: "column", alignContent: "start", gap: "24px" }}>
        		<PageSubheaderWithBackButton subheader={'Создание практики'} />
				<Grid
					container
					spacing={2}
					direction="row"
					justifyContent="flex-start"
					alignItems="flex-start"
				>
					<Grid
						item
						xs={4}
					>
						<FormControl fullWidth>
							<InputLabel 
								id="practice-kind-label"
							>
								Вид практики
							</InputLabel>
							<Select
								labelId="practice-kind-label"
							>
								{
									practiceKinds.map(kind => (
										<MenuItem 
											value={kind}
										>
											{kind}
										</MenuItem>
									))
								}
							</Select>
						</FormControl>
					</Grid>
					<Grid
						item
						xs={8}
					>
						<TextField
							label="Тип практики"
							fullWidth
						/>
					</Grid>
					<Grid
						item
						xs={4}
					>
						<FormControl fullWidth>
							<InputLabel 
								id="exam-type-label"
							>
								Тип контроля
							</InputLabel>
							<Select
								labelId="exam-type-label"
							>
								{
									examTypes.map(type => (
										<MenuItem 
											value={type}
										>
											{type}
										</MenuItem>
									))
								}
							</Select>
						</FormControl>
					</Grid>
					<Grid
						item
						xs={8}
					>
						<TextField
							label="Приказ на практику"
							fullWidth
						/>	
					</Grid>
					<Grid
						item
						xs={6}
					>
						<Typography>
							Сроки проведения
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}
					>
						<Button
							startIcon={<AddIcon />}
							onClick={() => {}}
						/>
					</Grid>
					<Grid
						item
						xs={4}
					>
						<DatePicker
							fullWidth
							label="Дата начала"
							onChange={(date) => setDateOfPracticeStart(date)}
						/>
					</Grid>
					<Grid
						item
						xs={4}
					>
						<DatePicker
							fullWidth
							label="Дата окончания"
							onChange={(date) => setDateOfPracticeEnd(date)}
						/>
					</Grid>
					<Grid
						item
						xs={4}
					>
						<Button
							fullWidth
							startIcon={<DeleteIcon />}
							onClick={() => {}}
						/>
					</Grid>
					<Grid
						item
						xs={12}
					>
						<Typography>
							Сроки защиты
						</Typography>
					</Grid>
					<Grid
						item
						xs={4}
					>
						<DatePicker
							label="Дата начала"
							onChange={(date) => setDateOfDefenseStart(date)}
						/>
					</Grid>
					<Grid
						item
						xs={4}
					>
						<DatePicker
							label="Дата окончания"
							onChange={(date) => setDateOfDefenseEnd(date)}
						/>
					</Grid>
					<Grid
						item
						xs={6}
					>
						<Typography>
							Состав комиссии по защите отчетов
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}
					>
						<Button
							startIcon={<AddIcon />}
							onClick={() => addCommisionMember()}
						/>
					</Grid>
					{
						commissionMembers.map((chosenMember, chosenMemberIdx) => (
							<>
								<Grid
									item
									xs={8}
								>
									<FormControl fullWidth>
										<Select>
											{
												allCommissionMembers.filter(mem => !commissionMembers.includes(mem)).map(availableMember => (
													<MenuItem 
														value={availableMember}
													>
														{availableMember}
													</MenuItem>
												))
											}
										</Select>
									</FormControl>
								</Grid>
								<Grid
									item
									xs={4}
								>
									<Button
										startIcon={<DeleteIcon />}
										onClick={() => deleteCommissionMember(chosenMemberIdx)}
									/>
								</Grid>
							</>
						))
					}
				</Grid>
				<Button
					onClick={() => {}}
				>
					Сохранить
				</Button>
			</Container>
		</GeneralLayout>
	)
}

export default CreatePractice
