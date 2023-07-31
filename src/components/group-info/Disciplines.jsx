import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
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
	SKIP: "Неявка",
}

const classTypes = {
	lectures: "Лекции",
	seminars: "Семинары",
	labs: "Лабораторные работы",
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

const students = [
	{
		id: 1,
		name: "Иванов Иван Иванович",
		classes: [
			{
				id: 1,
				name: "Безопасность жизнедеятельности",
				skips: {
					"lectures": {
						total: 16,
						skipped: 0,
					},
				},
				attestations: [
					grades.B,
					grades.A,
				],
			},
			{
				id: 2,
				name: "Иностранный язык",
				skips: {
					"seminars": {
						total: 16,
						skipped: 5,
					},
				},
				attestations: [
					grades.B,
					grades.A,
				],
			},
		],
		total: {
			hoursSkipped: 70,
			hoursTotal: 290,
			averageGrade: 4,
		},
	},
	{
		id: 2,
		name: "Петров Петр Петрович",
		classes: [
			{
				id: 1,
				name: "Безопасность жизнедеятельности",
				skips: {
					"lectures": {
						total: 16,
						skipped: 2,
					},
					"labs": {
						total: 16,
						skipped: 2,
					},
				},
				attestations: [
					grades.B,
					grades.A,
				],
			},
			{
				id: 2,
				name: "Иностранный язык",
				skips: {
					"lectures": {
						total: 16,
						skipped: 2,
					},
					"seminars": {
						total: 16,
						skipped: 2,
					},
				},
				attestations: [
					grades.B,
					grades.A,
				],
			},
		],
		total: {
			hoursSkipped: 70,
			hoursTotal: 290,
			averageGrade: 4,
		},
	}
]

export const Disciplines = ({ semester }) => <Box sx={{marginTop: "24px"}}>
	<Stack
		direction="column"
	>
		Дисциплины
		<Typography color={'gray'}>{semester}</Typography>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>
						Студент
					</TableCell>
					{
						classes.map(cl => (
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
					students.map(student => (
						<TableRow>
							<TableCell>
								{ student.name }
							</TableCell>
							{
								student.classes.map(cl => (
									<TableCell>
										Пропущено часов:
										{ 
											cl.skips.lectures &&
												<p>{ classTypes.lectures }: { cl.skips.lectures.skipped } из { cl.skips.lectures.total }</p>
										}
										{
											cl.skips.seminars && 
												<p>{ classTypes.seminars }: { cl.skips.seminars.skipped } из { cl.skips.seminars.total }</p>

										}
										{
											cl.skips.labs && 
												<p>{ classTypes.labs }: { cl.skips.lectures.skipped } из { cl.skips.lectures.total }</p>
										}
										{
											cl.attestations.map((attestation, idx) => (
												<p>
													Аттестация { idx }: { attestation }
												</p>
											))
										}
									</TableCell>
								))
							}
							<TableCell>
								<p>
									Пропущено часов: {student.total.hoursSkipped} из {student.total.hoursTotal}
								</p>
								<p>
									Средний аттестационный балл: {student.total.averageGrade}
								</p>
							</TableCell>
						</TableRow>
					))
				}
			</TableBody>
		</Table>
    </Stack>
  </Box>;
