// hooks
import { useState, useEffect } from "react"

// mui components
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import TableBody from "@mui/material/TableBody"
import Stack from "@mui/material/Stack"

// mui icons
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

// other
import { Helmet } from 'react-helmet-async'

// my components
import { PageSubheaderWithBackButton } from "../components/page-subheader-with-back-button/PageSubheaderWithBackButton";
import { GeneralLayout } from '../layouts/GeneralLayout';

const DocumentsList = () => {

	const groups = [
		{
			id: 0,
			name: "АБВ1",
		},
		{
			id: 1,
			name: "АБВ2",
		},
		{
			id: 2,
			name: "АБВ3",
		},
	]

	const students = [
		{
			id: 0,
			name: "Иванов А.А.",
			group_id: 0,
		},
		{
			id: 1,
			name: "Иванов Б.Б.",
			group_id: 0,
		},
		{
			id: 2,
			name: "Иванов В.В.",
			group_id: 0,
		},
		{
			id: 3,
			name: "Иванов Г.Г.",
			group_id: 1,
		},
		{
			id: 4,
			name: "Иванов Д.Д.",
			group_id: 1,
		},
		{
			id: 5,
			name: "Иванов Е.Е.",
			group_id: 1,
		},
		{
			id: 6,
			name: "Иванов Ж.Ж.",
			group_id: 2,
		},
		{
			id: 7,
			name: "Иванов З.З.",
			group_id: 2,
		},
		{
			id: 8,
			name: "Иванов И.И.",
			group_id: 2,
		},
	]

	const [group, setGroup] = useState({})

	const handleGroupChange = (e) => {
		setGroup(e.target.value)
	}

	const [currentStudents, setCurrentStudents] = useState([])

	useEffect(() => {
		setCurrentStudents(
			students.filter(st => {
				const groupMatches = group === undefined || st.group_id === group.id
				return groupMatches
			})
		)
	}, [group])

	const [student, setStudent] = useState({})

	const handleStudentChange = (e) => {
		setStudent(e.target.value)
	}

	const DUTY_SCHEDULE = "График дежурств"
	const REFERENCE = "Справка"

	const documents = [
		{
			student_id: 0,
			student_name: "Иванов А.А.",
			type: DUTY_SCHEDULE,
			start_date: "17.02.2023",
			start_class: 1,
			end_date: "17.02.2023",
			end_class: 6,
			comment: "",
			edit_available: true,
			delete_available: true,
		},
	]

	const [currentDocuments, setCurrentDocuments] = useState(documents)

	useEffect(() => {
		setCurrentDocuments(
			documents.filter(doc => {
				const groupMatches = group === undefined || doc.group_id === group.id
				const studentMatches = student === undefined || doc.student_id === student.id
				return groupMatches && studentMatches
			})
		)
	}, [group, student])

	return (
		<GeneralLayout>
    		<Helmet>
    			<title>
					Журнал | АИС "Успеваемость"
				</title>
      		</Helmet>
			<Container
				sx={{ paddingTop: '100px' }}
			>
          		<PageSubheaderWithBackButton
					subheader={'Список документов о пропусках'}
				/>
				<Stack
					direction="row"
					justifyContent="space-between"
					gap="20px"
				>
					<FormControl
						fullWidth
					>
						<InputLabel
							id="group-select-label"
						>
							Группа
						</InputLabel>
						<Select
							labelId="group-select-label"
							value={group.name}
							label="Группа"
							onChange={handleGroupChange}
						>
							{
								groups.map(gr => (
									<MenuItem
										value={gr}
									>
										{gr.name}
									</MenuItem>
								))
							}
						</Select>
					</FormControl>
					<FormControl
						fullWidth
					>
						<InputLabel
							id="student-select-label"
						>
							Студент
						</InputLabel>
						<Select
							labelId="student-select-label"
							value={student.name}
							label="Студент"
							onChange={handleStudentChange}
						>
							{
								group.students && group.students.map(st => (
									<MenuItem
										value={st}
									>
										{st.name}
									</MenuItem>
								))
							}
						</Select>
					</FormControl>
					<Button
						fullWidth
					>
						Зарегистировать документ
					</Button>
				</Stack>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>
								Имя студента
							</TableCell>
							<TableCell>
								Тип документа
							</TableCell>
							<TableCell>
								Дата начала действия
							</TableCell>
							<TableCell>
								Дата окончания действия
							</TableCell>
							<TableCell>
								Комментарий
							</TableCell>
							<TableCell>
								Операции
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ currentDocuments.map(doc => (
							<TableRow>
								<TableCell>
									{ doc.student_name }
								</TableCell>
								<TableCell>
									{ doc.type }
								</TableCell>
								<TableCell>
									{ 
										`${doc.start_date} (с ${doc.start_class} пары)`
									}
								</TableCell>
								<TableCell>
									{
										`${doc.end_date} (до ${doc.end_class} пары)`
									}
								</TableCell>
								<TableCell>
									{ doc.comment }
								</TableCell>
								<TableCell>
									{
										doc.edit_available &&
											<Button
												startIcon={<EditIcon />}
											/>
									}
									{
										doc.delete_available &&
											<Button
												startIcon={<DeleteIcon />}	
											/>		
									}
								</TableCell>
							</TableRow>
						)) }
					</TableBody>
				</Table>
			</Container>
		</GeneralLayout>
	)
}

export default DocumentsList
