import {BrowserRouter, Navigate, Route, Routes, useRoutes} from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import JournalMainPage from './pages/JournalMainPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import AttestationsPage from "./pages/AttestationsPage";
import SessionsPage from "./pages/SessionsPage";
import JournalEditPage from "./pages/JournalEditPage";

// ----------------------------------------------------------------------

export default function AppRouter() {
  return (<Routes>
            <Route path="dashboard" element={<DashboardLayout />} >
              <Route path="app" element={<DashboardAppPage />} />
            </Route>
          </Routes>);
  // const routes = useRoutes([
  //   {
  //     path: '/dashboard',
  //     element: <DashboardLayout />,
  //     children: [
  //       { path: 'app', element: <DashboardAppPage /> },
  //       { path: 'journal', element: <JournalPage /> },
  //       { path: 'attestations', element: <AttestationsPage /> },
  //       { path: 'sessions', element: <SessionsPage /> },
  //       { path: 'journalEdit', element: <JournalEditPage /> },
  //     ],
  //   },
  //   {
  //     path: 'login',
  //     element: <LoginPage />,
  //   },
  //   {
  //     element: <SimpleLayout />,
  //     children: [
  //       { element: <Navigate to="/dashboard/app" />, index: true },
  //       { path: '404', element: <Page404 /> },
  //       { path: '*', element: <Navigate to="/404" /> },
  //     ],
  //   },
  //   {
  //     path: '*',
  //     element: <Navigate to="/404" replace />,
  //   },
  // ]);
  //
  // return routes;
}
