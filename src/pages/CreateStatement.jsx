// mui components
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Checkbox from "@mui/material/Checkbox"
import Select from "@mui/material/Select"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"

// other
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// my components
import { PageSubheaderWithBackButton } from '../components/page-subheader-with-back-button/PageSubheaderWithBackButton';
import { GeneralLayout } from '../layouts/GeneralLayout';

const CreateStatement = () => {

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

	const [group, setGroup] = useState(groups[0])
	const [students, setStudents] = useState([])
	const [selectedStudents, setSelectedStudents] = useState([])

	useEffect(() => {
		setStudents(group.students)
		setSelectedStudents([])
	}, [group])

	const addStudent = () => {
		setSelectedStudents([...selectedStudents, []])
	}

	const removeStudent = (idx) => {
		setSelectedStudents(selectedStudents.filter(student => student.id !== idx))
	}
	
	return (
		<GeneralLayout>
			<Helmet>
        		<title> Журнал | АИС "Успеваемость" </title>
      		</Helmet>
      		<Container sx={{ paddingTop: '100px', display: "flex", flexDirection:"column",gap: "24px" }}>
        		<PageSubheaderWithBackButton subheader={'Создание ведомости на внеплановую сдачу сессии'} />
				<TextField 
					label="Номер распоряжения"
				/>
				<FormControlLabel
					control={<Checkbox />}
					label="Индивидуальный график"
				/>
				<FormControlLabel
					control={<Checkbox />}
					label={`Пересдача оценок "3" и "4"`}
				/>
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
									value={group.name}
								>
									{ group.name }
								</MenuItem>
							))
						}
					</Select>
				</FormControl>
				<DatePicker />
				<TimePicker />
				<TextField
					label="Место проведения"
				/>
				{
					selectedStudents.map((selectedStudent, idx) => (
						<>
							<Select>
								{
									students.filter(student => !selectedStudents.includes(student)).map(student => (
										<MenuItem
											value={student}
										>
											{student.name}
										</MenuItem>
									))
								}
							</Select>
							<Button
								onClick={() => removeStudent(idx)}
							>
								Удалить
							</Button>
						</>
					))
				}
				<Button
					onClick={() => addStudent()}
				>
					Добавить
				</Button>
			</Container>
		</GeneralLayout>
	)
}

export default CreateStatement
