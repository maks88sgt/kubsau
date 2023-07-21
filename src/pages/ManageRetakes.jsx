// mui components
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"

// other
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

// my components
import { PageSubheaderWithBackButton } from '../components/page-subheader-with-back-button/PageSubheaderWithBackButton';
import { GeneralLayout } from '../layouts/GeneralLayout';

const getCourseFromUrl = (url) => {
	return {
		id: 1,
		code: "00.00.00",
		name: "Бизнес-информатика",
		isBachelor: true,
		year: 1,
	}
}

const getRetakesForCourse = (course) => {
	return [
		{
			name: "Дисциплина 1",
			department: "Кафедра 1",
			retakesForGroups: [
				{
					group: "Группа 1",
					retakeNumber: 1,
					date: new Date(),
					room: "кафедра",
				},
				{
					group: "Группа 2",
					retakeNumber: 1,
					date: new Date(),
					room: "кафедра",
				},
			],
		},
		{
			name: "Дисциплина 2",
			department: "Кафедра 2",
			retakesForGroups: [
				{
					group: "Группа 1",
					retakeNumber: 2,
					date: new Date(),
					room: "100A",
				},
				{
					group: "Группа 2",
					retakeNumber: 2,
					date: new Date(),
					room: "100A",
				},
			],
		},
	]
}

const ManageRetakes = () => {

	const course = getCourseFromUrl()
	const [retakesForCourse, setRetakesForCourse] = useState(getRetakesForCourse(course))

	return (
		<GeneralLayout>
			<Helmet>
        		<title> Журнал | АИС "Успеваемость" </title>
      		</Helmet>
      		<Container sx={{ paddingTop: '100px', display: "flex", flexDirection:"column",gap: "24px" }}>
        		<PageSubheaderWithBackButton subheader={`Расписание пересдач ${course.code} ${course.name} (программа ${course.isBachelor ? "бакалавриата" : "магистратуры"}) ${course.year} курс`} />
				<Stack
					direction="column"
					gap="10px"
					divider={<Divider orientation="horizontal" flexItem />}
				>
				{
					retakesForCourse.map(retakeForCourse => (
						<>
							<Typography>
									{ retakeForCourse.name }
							</Typography>
							<Typography>
								{ retakeForCourse.department }
							</Typography>
							{
								retakeForCourse.retakesForGroups.map(retakeForGroup => (
									<Stack
										direction="row"
										gap="10px"
										flexWrap="wrap"
									>
										<Typography>
											{ retakeForGroup.group }
										</Typography>
										<Typography>
											{ `${retakeForGroup.retakeNumber} пересдача` }
										</Typography>
										<DatePicker
											label="Дата проведения"
										/>	
										<TimePicker
											label="Время проведения"
										/>
										<TextField
											label="Место проведения"
										/>
									</Stack>
								))
							}
						</>
					))
				}
				</Stack>
			</Container>
		</GeneralLayout>
	)
}

export default ManageRetakes
