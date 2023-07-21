// mui components
import Container from "@mui/material/Container"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Button from "@mui/material/Button"

// other
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// my components
import { PageSubheaderWithBackButton } from '../components/page-subheader-with-back-button/PageSubheaderWithBackButton';
import { GeneralLayout } from '../layouts/GeneralLayout';

// mui icons
import GroupIcon from '@mui/icons-material/Group';
import PrintIcon from '@mui/icons-material/Print';

const ManagePracticesByCourses = () => {
	
	const courses = [
		{
			name: "00.00.00 Направление подготовки 1 курс",
			groupId: 1,
		},
		{
			name: "00.00.00 Направление подготовки 2 курс",
			groupId: 2,
		},
		{
			name: "00.00.00 Направление подготовки 3 курс",
			groupId: 3,
		},
		{
			name: "00.00.00 Направление подготовки 4 курс",
			groupId: 4,
		},	
	]

	return (
		<GeneralLayout>
			<Helmet>
        		<title> Журнал | АИС "Успеваемость" </title>
      		</Helmet>
      		<Container sx={{ paddingTop: '100px', display: "flex", flexDirection:"column",gap: "24px" }}>
        		<PageSubheaderWithBackButton subheader={'Управление практиками по курсам'} />
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>
								Курс
							</TableCell>
							<TableCell>
								Операции
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							courses.map(course => (
								<TableRow>
									<TableCell>
										{ course.name }
									</TableCell>
									<TableCell>
										<Button
											startIcon={<GroupIcon />}
										>
											Перейти
										</Button>
										<Button
											startIcon={<PrintIcon />}
										>
											Печать расписания курса
										</Button>
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

export default ManagePracticesByCourses
