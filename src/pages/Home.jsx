import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'

const HomePage = () => {
	return (
		<Box>
			<h1>Список страниц</h1>
			<h2>ТЗ</h2>
			<List>
				<ListItem>
					<Link href="/department/subgroups">
						Учетная запись кафедры. Страница создания подгрупп по дисциплине и гурппе, а также закрепление преподавателя за подгруппой (есть новая недоделанная реализация)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/documents-registry">
					Учетная запись факультета. Реестр зарегистрированных документов по студентам (есть новая реализация)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/documents-registry/new">
						Учетная запись факультета. Внесение новой записи в реестр документов по студентам (есть новая реализация)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/students">
						Учетная запись факультета. Поиск студентов (есть новая реализация)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/students/1">
						Учетная запись факультета. Карточка студента (есть новая реализация)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/groups/1">
						Учетная запись факультета. Информация о группе (есть новая реализация)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/documents-list">
						Учетная запись факультета. Список зарегистрированных документов по студентам (справки о пропусках и т.п.)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/documents-list/new">
						Учетная запись факультета. Регистрация документа по студенту (справки и т.п.)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/statements">
						Учетная запись факультета. Аттестационная ведомость (есть новая недоделанная реализация)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/create-statement">
						Учетная запись факультета. Создание внеплановой ведомости
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/manage-retakes/:courseId">
						Учетная запись факультета. Редактирование расписания пересдач сессии. 
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/statements-for-courses/:courseId">
						Учетная запись факультета. Список ведомостей по факультету (есть новая реализация)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/practices-by-courses">
						Учетная запись факультета. Список практик по курсам
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/practices-for-group/1">
						Учетная запись факультета. Список практик группы
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/faculty/create-practice">
						Учетная запись факультета. Создание практики
					</Link>
				</ListItem>
			</List>
			<h2>Другое</h2>
			<List>
				<ListItem>
					<Link href="/app">
						Какой-то дашборд, не работал изначально ("list is undefined"); там должны рендерится успеваемость, расписание, текущие задачи (например, закрыть ведомость или заполнить журнал)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/journalmain">
						Журнал успеваемости, видимо преподаватель здесь должен проставлять оценки или посещаемость (не знаю, где использовать)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/journaledit">
						Редактирование журнала успеваемости, не работало изначально ("props is null")
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/attestations">
						Список с аттестациями, использует компонент src/sections/@dashboard/attestations/StepByStepTable.js и там не может зафетчить данные на урле attestation/listemployeeattestations
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/attestationedit">
						Тут должна быть страница с редактированием/созданием аттестаций, выкидывает ошибку в консоль
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/sessions">
						Какие-то сессии, не знаю что это, но не может зафетчить данные на урле session/ListSessionDisciplinesForEmployee
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/employeestatements">
						Список ведомостей (видимо, для конкретной группы, или для того, чтобы один преподаватель мог смотреть ведомости другого... не может распарсить json в компоненте StatementList)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/mystatements">
						Список своих ведомостей, скорее всего использует ту же логику, что и страница выше, также не может распарсить json
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/editthemes">
						Редактирование тем (лекций, практических занятий, лабораторных занятий) (не знаю, где это использовать)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/disciplinegroupjournal">
						Журнал посещаемости дисциплины у преподавателя, вроде полностью работает (не знаю, где это использовать)
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/editsubgroups">
						Редактирование подгрупп, вроде полностью работает
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/studentskipstatistic">
						Сведения о пропусках студентов, рендерится без ошибок
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/statementresults">
						Результаты ведомости, есть ошибка связанная с печатью страницы, но рендерится нормально	
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/statementedit">
						Редактирование ведомости, использует те же компоненты что и страница выше, вроде работает
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/documents-register">
						Реестр документов, вроде работает
					</Link>
				</ListItem>
        		<ListItem>
					<Link href="/documents-register/:id">
						Добавление документа в реестр, вроде работает
					</Link>
				</ListItem>
        		<ListItem>
					<Link href="/students-old">
						Поиск студентов, вроде работает
					</Link>
				</ListItem>
        		<ListItem>
					<Link href="/students/:id">
						Информация о студенте, вроде работает
					</Link>
				</ListItem>
        		<ListItem>
					<Link href="/group-info">
						Информация о группе, вроде работает
					</Link>
				</ListItem>
			</List>
		</Box>
	)
}

export default HomePage
