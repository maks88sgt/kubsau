import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"

const grades = {
	A: "Отлично",
	B: "Хорошо",
	C: "Удовлетворительно",
	D: "Неудовлетворительно",
	PASSED: "Зачтено",
	NOT_PASSED: "Не зачтено",
	SKIPPED: "Неявка",
}

const examTypes = {
	EXAM: "Дифф. зачет",
	TEST: "Зачет",
	COURSE_WORK: "Курсовая работа",
	COURSE_PROJECT: "Курсовой проект",
}

const classes = [
	{
		id: 1,
		name: "Безопасность жизнедеятельности",
	},
	{
		id: 2,
		name: "Иностранный язык",
	},
]

const exams = [
	{
		id: 1,
		class: {
			id: 1,
			name: "Безопасность жизнедеятельности",
		},
		type: examTypes.EXAM,
		date: "30.05.2023",
		professors: [
			{
				id: 1,
				name: "Иванов Иван Иванович",
			},
			{
				id: 2,
				name: "Петров Петр Петрович",
			},
		],
		statement: {
			id: 1,
			isClosed: true,
			dateOfClosing: "04.06.2023",
		},
		grade: grades.B,
	},
	{
		id: 2,
		class: {
			id: 2,
			name: "Иностранный язык",
		},
		type: examTypes.TEST,
		date: "01.06.2023",
		professors: [
			{
				id: 1,
				name: "Иванов Иван Иванович",
			},
			{
				id: 2,
				name: "Петров Петр Петрович",
			},
		],
		statement: {
			id: 2,
			isClosed: false,
		},
		grade: grades.PASSED,
	}
]

export const Exams = ({ semester }) => <Box sx={{marginTop: "24px"}}>
	<Stack
		direction="column"
	>
		Сессия
		<Typography color={'gray'}>{semester}</Typography>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>
						Дисциплина
					</TableCell>
					<TableCell>
						Тип контроля
					</TableCell>
					<TableCell>
						Преподаватели
					</TableCell>
					<TableCell>
						Ведомость
					</TableCell>
					<TableCell>
						Оценка
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{
					exams.map(exam => (
						<TableRow>
							<TableCell>
								{ exam.class.name }
							</TableCell>
							<TableCell>
								{ exam.type }
								Дата: { exam.date }
							</TableCell>
							<TableCell>
								{
									exam.professors.map(professor => (
										professor.name
									))
								}
							</TableCell>
							<TableCell>
								Ведомость №{ exam.statement.id } ({ exam.statement.isClosed ? "закрыта" : "открыта" })
								Дата закрытия: { exam.statement.dateOfClosing }
							</TableCell>
							<TableCell>
								{ exam.grade }
							</TableCell>
						</TableRow>
					))
				}
			</TableBody>
		</Table>
    </Stack>
  </Box>;
