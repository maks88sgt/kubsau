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
import MyPracticeStatementsPage from "./pages/MyPracticeStatementsPage";
import MyStatementsPage from "./pages/MyStatementsPage";
import SessionsPage from "./pages/SessionsPage";
import StatementEditPage from "./pages/StatementEditPage";
import StatementResultsPage from "./pages/StatementResultsPage";
import {Student} from "./pages/Student";
import {Students} from "./pages/Students";
import StudentSkipStatisticPage from "./pages/StudentSkipStatisticPage";

export const AppRoutes = [
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
    {
        path: '/mypracticestatements',
        element: <MyPracticeStatementsPage />
    },
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
        path: '/students',
        element: <Students/>,
    },
    {
        path: '/students/:id',
        element: <Student/>,
    },
    {
        path: '/group-info',
        element: <GroupInfo/>,
    }
];

export default AppRoutes;
