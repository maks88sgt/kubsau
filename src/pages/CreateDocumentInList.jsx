// mui components
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import TextField from "@mui/material/TextField"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

// other
import { useState } from "react"
import { Helmet } from 'react-helmet-async';

// my components
import { PageSubheaderWithBackButton } from '../components/page-subheader-with-back-button/PageSubheaderWithBackButton';
import { GeneralLayout } from '../layouts/GeneralLayout';

const documentTypes = ["Справка", "Рапорт"]
const skipTypes = ["Пропуск по болезни", "Пропуск по командировке"]

const fill = (from, to) => Array.from(Array(to).keys()).map(e => e + from)

const minClassNumber = 1
const maxClassNumber = 8
const classNumbers = fill(minClassNumber, maxClassNumber)

const groups = [
	{
		id: 1,
		name: "Группа 1",
		students: [
			{
				id: 1,
				name: "Иванов Иван Иванович", 
			},
			{
				id: 2,
				name: "Александров Александр Александрович",
			},
		],
	},
	{
		id: 2,
		name: "Группа 2",
		students: [
			{
				id: 3,
				name: "Иванов Иван Иванович", 
			},
			{
				id: 4,
				name: "Иванов Иван Иванович",
			},
		],
	},
	{
		id: 3,
		name: "Группа 3",
		students: [
			{
				id: 5,
				name: "Андреев Андрей Андреевич",
			}
		]
	},
]

const CreateDocumentInList = () => {

	const [group, setGroup] = useState(groups[0])
	const [student, setStudent] = useState(group.students)

	const [documentType, setDocumentType] = useState()
	const [skipType, setSkipType] = useState()
	const [startDate, setStartDate] = useState()
	const [startClass, setStartClass] = useState()
	const [endDate, setEndDate] = useState()
	const [endClass, setEndClass] = useState()

	return (
    	<GeneralLayout>
			<Helmet>
				<title> Журнал | АИС "Успеваемость" </title>
      		</Helmet>
      		<Container 
				sx={{
					paddingTop: '100px',
				}}
			>
				<PageSubheaderWithBackButton
					subheader="Регистрация документа"
				/>
				<Typography>
					Студенты
				</Typography>
				<Box
					sx={{
						border: "1px solid grey",
						borderRadius: "5px",
						padding: "20px",
						display: "flex",
						flexDirection: "column",
						gap: "10px",
					}}
				>
					<FormControl fullWidth>
						<InputLabel>
							Группа
						</InputLabel>
						<Select
							value={group}
							onChange={(event) => setGroup(event.target.value)}
							label="Группа"
						>
							{
								groups.map(group => (
									<MenuItem
										value={group}
									>
										{ group.name }
									</MenuItem>
								))
							}
						</Select>
					</FormControl>
					<FormGroup>
					{
						group.students.map(student => (
								<FormControlLabel control={<Checkbox />} label={student.name} />		
							))
					}	
					</FormGroup>
				</Box>
				<Typography>
					Информация о документе
				</Typography>
				<Box
					sx={{
						border: "1px solid grey",
						borderRadius: "5px",
						padding: "20px",
						display: "flex",
						flexDirection: "column",
						gap: "10px",
					}}
				>
					<FormControl fullWidth>
						<InputLabel>
							Тип документа
						</InputLabel>
						<Select
							value={documentType}
							onChange={(event) => setDocumentType(event.target.value)}
							label="Тип документа"
						>
							{
								documentTypes.map(type => (
									<MenuItem
										value={type}
									>
										{ type }
									</MenuItem>
								))
							}
						</Select>
					</FormControl>
					<FormControl fullWidth>
						<InputLabel>
							Тип пропуска
						</InputLabel>
						<Select
							value={skipType}
							onChange={(event) => setSkipType(event.target.value)}
							label="Тип пропуска"
						>
							{
								skipTypes.map(type => (
									<MenuItem
										value={type}
									>
										{ type }
									</MenuItem>
								))
							}
						</Select>
					</FormControl>
					<DatePicker />
					<FormControl fullWidth>
						<InputLabel>
							Номер пары
						</InputLabel>
						<Select
							value={startClass}
							onChange={(event) => setStartClass(event.target.value)}
							label="Номер пары"
						>
							{
								classNumbers.map(number => (
									<MenuItem
										value={number}
									>
										{ number }
									</MenuItem>
								))
							}
						</Select>
					</FormControl>
					<DatePicker />
					<FormControl fullWidth>
						<InputLabel>
							Номер пары
						</InputLabel>
						<Select
							value={endClass}
							onChange={(event) => setEndClass(event.target.value)}
							label="Номер пары"
						>
							{
								classNumbers.map(number => (
									<MenuItem
										value={number}
									>
										{ number }
									</MenuItem>
								))
							}
						</Select>
					</FormControl>
					<TextField
						label="Комментарий"
						multiline
					/>
				</Box>
				<Button>
					Подтвердить
				</Button>
				<Button>
					Просмотр
				</Button>
			</Container>
		</GeneralLayout>
	)
}

export default CreateDocumentInList
