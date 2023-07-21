import { Helmet } from "react-helmet-async";
import { useState } from "react";

// mui components
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import TextField from "@mui/material/TextField"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import InputAdornment from "@mui/material/InputAdornment"
import OutlinedInput from "@mui/material/OutlinedInput"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"

// mui icons
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save';

// my components
import { PageSubheaderWithBackButton } from '../components/page-subheader-with-back-button/PageSubheaderWithBackButton';
import { GeneralLayout } from '../layouts/GeneralLayout';

const Group = ({
	group, 
	useSameAmountOfHoursForAllGroups, 
	amountOfHours 
}) => {
	return (
		<Box
			sx={{
				padding: "10px",
				border: "1px solid grey",
				borderRadius: "5px",
			}}
		>
			<Stack
				direction="row"
				justifyContent="space-between"
			>
				<Typography
					variant="h3"
				>
					{ group.name }
				</Typography>
				{
					useSameAmountOfHoursForAllGroups
					?
					<OutlinedInput
						disabled
						value={amountOfHours}
						endAdornment={
							<InputAdornment>
								ч.
							</InputAdornment>
						}
					/>
					:
					<OutlinedInput
						endAdornment={
							<InputAdornment>
								ч.
							</InputAdornment>
						}				
					/>
				}
			</Stack>
			{
				group.subgroups.map(subgroup => (
					<Subgroup 
						subgroup={subgroup}
					/>
				))
			}
		</Box>
	)
}

const Subgroup = ({
	subgroup
}) => {

	const [professor, setProfessor] = useState(subgroup.professors[0])

	const handleProfessorSelect = (e) => {
		setProfessor(e.target.value)
	}

	return (
		<Box
			sx={{
				marginTop: "10px",
				marginBottom: "10px",
				padding: "10px",
				border: "1px solid blue",
				borderRadius: "5px",
			}}
		>
			<Stack
				direction="row"
				justifyContent="space-between"
			>
				<Typography>
					{ subgroup.name }
				</Typography>
				<Button
					startIcon={<ClearIcon />}
				/>
			</Stack>
			<Stack
				direction="row"
				justifyContent="space-between"
			>
				<FormControl>
					<InputLabel
						id="professor-select-label"
					>
						Преподаватель
					</InputLabel>
					<Select
						value={professor}
						labelId="professor-select-label"
						label="Преподаватель"
						onChange={handleProfessorSelect}
					>
						{
							subgroup.professors.map(prof => (
								<MenuItem
									value={prof}
								>
									{ prof.name }
								</MenuItem>
							))
						}
					</Select>
				</FormControl>
				<Button
					startIcon={<SaveIcon />}
				/>
			</Stack>
		</Box>
	)
}

const Subgroups = (props) => {
    
	const [subGroups, setSubGroups] = useState([
        {
            id: 1,
            subGroupName: 'ИТ2041 - Подгруппа 1',
            students: [
                {
                    id: 1,
                    lastName: 'Иванов',
                    firstName: 'Иван',
                    middleName: 'Иванович',
                    accepted: false,
                    employee: 'Ильин Владимир Викторович'
                },
                {
                    id: 2,
                    lastName: 'Скворцов',
                    firstName: 'Петр',
                    middleName: 'Михайлович',
                    accepted: true
                },
            ]
        },
        {
            id: 2,
            subGroupName: 'ПИ2041 - Подгруппа 2',
            students: [
                {
                    id: 3,
                    lastName: 'Иванова',
                    firstName: 'Анастасия',
                    middleName: 'Ивановна',
                    accepted: false
                },
                {
                    id: 4,
                    lastName: 'Скворцова',
                    firstName: 'Полина',
                    middleName: 'Михайловна',
                    accepted: true,
                    employee: ''
                },
            ]
        }
    ]);

	const LECTURES = "lectures"
	const PRACTICES = "practices"
	const LABS = "labs"
	const tabs = [LECTURES, PRACTICES, LABS]

	const [tabIndex, setTabIndex] = useState(0)
	const [tab, setTab] = useState(LECTURES)

	const handleTabChange = (e, newTabIndex) => {
		setTabIndex(newTabIndex)
		setTab(tabs[newTabIndex])
	}

	const [useSameAmountOfHoursForAllGroups, setUseSameAmountOfHoursForAllGroups] = useState(false)

	const handleUseSameAmountOfHoursForAllGroupsChange = (e) => {
		setUseSameAmountOfHoursForAllGroups(!useSameAmountOfHoursForAllGroups)
	}

	const [amountOfHoursForAllGroups, setAmountOfHoursForAllGroups] = useState(0)

	const handleAmountOfHoursForAllGroupsChange = (e) => {
		console.log(e)
	}

	const [groups, setGroups] = useState({
		"lectures": [
			{
				name: "ПИ1901-ЛЕКЦИИ",
				subgroups: [
					{
						name: "Подгруппа 1",
						professors: [
							{
								name: "Коляда Валентина Владимировна",
							},
							{
								name: "Дунская Лада Константиновна",
							},
						],
					},
					{
						name: "Подгруппа 2",
						professors: [
							{
								name: "Коляда Валентина Владимировна",
							},
							{
								name: "Дунская Лада Константиновна",
							},
						],
					},
				]
			},
			{
				name: "ПИ1902-ЛЕКЦИИ",
				subgroups: [
					{
						name: "Подгруппа 1",
						professors: [
							{
								name: "Коляда Валентина Владимировна",
							},
							{
								name: "Дунская Лада Константиновна",
							},
						],
					},
					{
						name: "Подгруппа 2",
						professors: [
							{
								name: "Коляда Валентина Владимировна",
							},
							{
								name: "Дунская Лада Константиновна",
							},
						]
					},
				]
			},
		],
		"practices": [
			{
				name: "ПИ1901-ПРАКТИКИ",
				subgroups: [
					{
						name: "Подгруппа 1",
						professors: [
							{
								name: "Коляда Валентина Владимировна",
							},
							{
								name: "Дунская Лада Константиновна",
							},
						]
					},
					{
						name: "Подгруппа 2",
						professors: [
							{
								name: "Коляда Валентина Владимировна",							
							},
							{
								name: "Дунская Лада Константиновна",
							},
						],
					},
				]
			},
			{
				name: "ПИ1902-ПРАКТИКИ",
				subgroups: [
					{
						name: "Подгруппа 1",
						professors: [
							{
								name: "Коляда Валентина Владимировна",
							},
							{
								name: "Дунская Лада Константиновна",
							},
						]
					},
					{
						name: "Подгруппа 2",
						professors: [
							{
								name: "Коляда Валентина Владимировна",							
							},
							{
								name: "Дунская Лада Константиновна",
							},
						],
					},
				]
			},
		],
		"labs": [
			{
				name: "ПИ1901-ЛАБЫ",
				subgroups: [
					{
						name: "Подгруппа 1",
						professors: [
							{
								name: "Коляда Валентина Владимировна",
							},
							{
								name: "Дунская Лада Константиновна",
							},
						]
					},
					{
						name: "Подгруппа 2",
						professors: [
							{
								name: "Коляда Валентина Владимировна",							
							},
							{
								name: "Дунская Лада Константиновна",
							},
						],
					},
				]
			},
			{
				name: "ПИ1902-ЛАБЫ",
				subgroups: [
					{
						name: "Подгруппа 1",
						professors: [
							{
								name: "Коляда Валентина Владимировна",
							},
							{
								name: "Дунская Лада Константиновна",
							},
						]
					},
					{
						name: "Подгруппа 2",
						professors: [
							{
								name: "Коляда Валентина Владимировна",							
							},
							{
								name: "Дунская Лада Константиновна",
							},
						],
					},
				]
			},
		],
	})
	
    return (
        <GeneralLayout>
        	<Helmet>
                <title> Редактирование курса | АИС "Успеваемость" </title>
            </Helmet>
			<Container
				sx={{
					padding: "100px"
				}}
			>
				<PageSubheaderWithBackButton subheader="Редактирование курса"/>
				<Typography>
					IT-инфраструктура предприятий (организаций)
				</Typography>
				<Alert severity="warning">
					<AlertTitle>
						Панель администратора
					</AlertTitle>
					Внимание! Для изменения закрепленного преподавателя...
				</Alert>
				<Stack
					direction="column"
					gap="10px"
				>
					<Tabs
						value={tabIndex}
						onChange={handleTabChange}
					>
						<Tab
							label="Лекции"
						/>
						<Tab
							label="Практические занятия"
						/>
						<Tab
							label="Лабораторные занятия"
						/>
					</Tabs>
					<Stack
						direction="row"
						justifyContent="space-between"
					>
						<FormControlLabel 
							control={<Checkbox />}
							label="Одинаковое количество часов для всех групп"
							onChange={handleUseSameAmountOfHoursForAllGroupsChange}
						/>
						<OutlinedInput
							disabled={!useSameAmountOfHoursForAllGroups}
							endAdornment={
								<InputAdornment>
									ч.
								</InputAdornment>
							}
						/>
					</Stack>
					{
						groups[tab].map(group => (
							<Group 
								group={group}
								useSameAmountOfHoursForAllGroups={useSameAmountOfHoursForAllGroups}
								amountOfHours={useSameAmountOfHoursForAllGroups ? amountOfHoursForAllGroups : undefined}
							/>
						))
					}
				</Stack>
			</Container>
   	    </GeneralLayout>
    );
}

export default Subgroups
