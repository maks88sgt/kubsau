import { CssBaseline } from '@mui/material';
import { ruRU as coreRuRU } from '@mui/material/locale';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { ruRU } from '@mui/x-date-pickers/locales';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
// @mui

//
import customShadows from './customShadows';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions, ruRU, coreRuRU );
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
