import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Portfolio from './components/Portfolio.tsx';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563EB',
      light: '#60A5FA',
      dark: '#1D4ED8',
    },
    secondary: {
      main: '#7C3AED',
      light: '#A78BFA',
      dark: '#5B21B6',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#64748B',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    h1: { fontFamily: "'Inter', sans-serif" },
    h2: { fontFamily: "'Inter', sans-serif" },
    h3: { fontFamily: "'Inter', sans-serif" },
    h4: { fontFamily: "'Inter', sans-serif" },
    h5: { fontFamily: "'Inter', sans-serif" },
    h6: { fontFamily: "'Inter', sans-serif" },
    body1: { fontFamily: "'Inter', sans-serif" },
    body2: { fontFamily: "'Inter', sans-serif" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '12px',
          padding: '10px 20px',
          boxShadow: 'none',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '18px',
          backgroundImage: 'linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(17, 24, 39, 0.92))',
          border: '1px solid rgba(103, 232, 249, 0.16)',
          boxShadow: '0 10px 30px rgba(2, 6, 23, 0.25)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
