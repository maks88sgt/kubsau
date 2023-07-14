// routes
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from "moment";
import {Route, Routes} from "react-router-dom";
// theme

import {StyledChart} from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import ThemeProvider from './theme';
// components
import 'moment/locale/ru';

export default function App({children}) {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="ru">
            <ThemeProvider>
                <StyledChart/>
                {children}
            </ThemeProvider>
        </LocalizationProvider>
    );
}
