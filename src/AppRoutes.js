import HomePage from "./pages/Home"
import AttestationEditPage from "./pages/AttestationEditPage";
import AttestationsPage from "./pages/AttestationsPage";
import {DashboardAppPage} from "./pages/DashboardAppPage";
import DisciplineGroupJournalPage from "./pages/DisciplineGroupJournalPage";
import {DocumentEdit} from "./pages/DocumentEdit";
import {DocumentsRegister} from "./pages/DocumentsRegister";
import EditSubGroupsPage from "./pages/EditSubGroupsPage";
import EditThemesPage from "./pages/EditThemesPage";
import EmployeeStatementsPage from "./pages/EmployeeStatementsPage";
import {GroupInfo} from "./pages/GroupInfo";
import JournalEditPage from "./pages/JournalEditPage";
import JournalMainPage from "./pages/JournalMainPage";
// import MyPracticeStatementsPage from "./pages/MyPracticeStatementsPage";
import MyStatementsPage from "./pages/MyStatementsPage";
import SessionsPage from "./pages/SessionsPage";
import StatementEditPage from "./pages/StatementEditPage";
import StatementResultsPage from "./pages/StatementResultsPage";
import StudentOldPage from "./pages/StudentOld";
import StudentsOldPage from "./pages/StudentsOld";
import StudentSkipStatisticPage from "./pages/StudentSkipStatisticPage";

import SubgroupsPage from "./pages/Subgroups"
import DocumentsRegistryPage from "./pages/DocumentsRegistry"
import CreateDocumentInRegistryPage from "./pages/CreateDocumentInRegistry"
import StudentsPage from "./pages/Students"
import StudentPage from "./pages/Student"
import GroupPage from "./pages/Group"
import DocumentsListPage from "./pages/DocumentsList"
import CreateDocumentInListPage from "./pages/CreateDocumentInList"
import StatementsPage from "./pages/Statements"
import CreateStatementPage from "./pages/CreateStatement"
import ManageRetakesPage from "./pages/ManageRetakes"
import StatementsForCoursePage from "./pages/StatementsForCourse"
import ManagePracticesByCoursesPage from "./pages/ManagePracticesByCourses"
import ManagePracticesForGroupPage from "./pages/ManagePracticesForGroup"
import CreatePracticePage from "./pages/CreatePractice"
import {Auth} from "./pages/Auth";

export const AppRoutes = [
	{
		element: <HomePage />,
		path: "/",
	},
    {
        element: <DashboardAppPage />,
        path: "/app",
    },
    {
        path: '/journalmain',
        element: <JournalMainPage />
    },
    {
        path: '/journaledit',
        element: <JournalEditPage />
    },
    {
        path: '/attestations',
        element: <AttestationsPage />
    },
    {
        path: '/attestationedit',
        element: <AttestationEditPage />
    },
    {
        path: '/sessions',
        element: <SessionsPage />
    },
    {
        path: '/employeestatements',
        element: <EmployeeStatementsPage />
    },
    {
        path: '/mystatements',
        element: <MyStatementsPage />
    },
    {
        path: '/editthemes',
        element: <EditThemesPage />
    },
    {
        path: '/disciplinegroupjournal',
        element: <DisciplineGroupJournalPage />
    },
    {
        path: '/editsubgroups',
        element: <EditSubGroupsPage />
    },
    {
        path: '/studentskipstatistic',
        element: <StudentSkipStatisticPage />
    },
    {
        path: '/statementresults',
        element: <StatementResultsPage />
    },
    {
        path: '/statementedit',
        element: <StatementEditPage />
    },
	/* {
        path: '/mypracticestatements',
        element: <MyPracticeStatementsPage />
    }, */
    {
        path: '/documents-register',
        element: <DocumentsRegister/>,
        exact: true
    },
    {
        path: '/documents-register/:id',
        element: <DocumentEdit/>,
    },
    {
        path: '/students-old',
        element: <StudentsOldPage />,
    },
    {
        path: '/students-old/:id',
        element: <StudentOldPage />,
    },
    {
        path: '/group-info',
        element: <GroupInfo/>,
    },
	{
		path: '/department/subgroups',
		element: <SubgroupsPage />,
	},
	{
		path: '/faculty/documents-registry',
		element: <DocumentsRegistryPage />,
	},
	{
		path: '/faculty/documents-registry/new',
		element: <CreateDocumentInRegistryPage />,
	},
	{
		path: '/faculty/statements',
		element: <StatementsPage />,
	},
	/* {
		path: '/faculty/documents-registry/:id',
		element: <DocumentPage />
	}, */
	{
		path: '/faculty/students',
		element: <StudentsPage />,
	},
	{
		path: '/faculty/students/:id',
		element: <StudentPage />,
	},
	{
		path: '/faculty/groups/:id',
		element: <GroupPage />,
	},
	{
		path: '/faculty/documents-list',
		element: <DocumentsListPage />,
	},
	{
		path: '/faculty/create-statement',
		element: <CreateStatementPage />,
	},
	{
		path: '/faculty/documents-list/new',
		element: <CreateDocumentInListPage />
	},
	{
		path: '/faculty/manage-retakes/:courseId',
		element: <ManageRetakesPage />,
	},
	{
		path: '/faculty/statements-for-courses/:courseId',
		element: <StatementsForCoursePage />,
	},
	{
		path: '/faculty/practices-by-courses',
		element: <ManagePracticesByCoursesPage />,
	},
	{
		path: '/faculty/practices-for-group/:groupId',
		element: <ManagePracticesForGroupPage />,
	},
	{
		path: '/faculty/create-practice',
		element: <CreatePracticePage />
	},
    {
        path: '/auth',
        element: <Auth />
    },
];

export default AppRoutes;
