import React from 'react';
import { AppBar, Toolbar, Button, Tabs, Tab, Box, Grid, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1e1e1e',
      paper: '#252526',
    },
    primary: {
      main: '#008080',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar style={{ width: '50%', margin: '0 auto' }}>
          <Button color="inherit">
            <span style={{ width: '16px', height: '16px', backgroundColor: 'blue', display: 'inline-block' }}></span>
          </Button>
          <Button color="inherit">
            <span style={{ width: '16px', height: '16px', backgroundColor: 'blue', display: 'inline-block' }}></span>
          </Button>
          <Button color="inherit">
            <span style={{ width: '16px', height: '16px', backgroundColor: 'blue', display: 'inline-block' }}></span>
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={2} style={{ width: '20%', borderRight: '1px solid rgba(255, 255, 255, 0.12)' }}>
          <Box style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={0}
              style={{ flex: 1 }}
            >
              <Tab icon={<span style={{ width: '16px', height: '16px', backgroundColor: 'blue', display: 'inline-block' }}></span>} />
              <Tab icon={<span style={{ width: '16px', height: '16px', backgroundColor: 'blue', display: 'inline-block' }}></span>} />
              <Tab icon={<span style={{ width: '16px', height: '16px', backgroundColor: 'blue', display: 'inline-block' }}></span>} />
            </Tabs>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box
            style={{
              height: 'calc(100vh - 64px)',
              backgroundColor: '#252526',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Placeholder element for the workspace */}
            <span style={{ color: '#ccc', fontSize: '24px' }}>Workspace</span>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
