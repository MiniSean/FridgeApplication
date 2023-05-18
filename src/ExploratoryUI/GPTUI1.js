// Design prompt:
// Write the render method that constructs a dry html body (without functionality) based on the following requirements:
// - Use react based elements together with MUI material ui tools.
// - The html page is designed for an desktop application.
// - The page is subdivided in 3 parts: the toolbar, the inventory and the workspace.
// - The toolbar should span the entire top row of the application and should contain contain 3 buttons: load, save and format.
// - The inventory takes up the left side of the remaining space in the application. The inventory should show 1 tab at the time, while the remaining tabs are folded in to the left edge of the application. All tabs are vertically arranged.
// - The workspace can be filled with a placeholder react element for now.

// Make sure to specify the arrangement, ratios and location of each ui element without writing its functionality.
// The color theme should closely represent the dark mode of visual studio code.

import React from 'react';
import { AppBar, Toolbar, Button, Tabs, Tab, Box, Grid } from '@mui/material';
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
        <Toolbar>
          <Button color="inherit">Load</Button>
          <Button color="inherit">Save</Button>
          <Button color="inherit">Format</Button>
        </Toolbar>
      </AppBar>
      <Grid container sx={{ height: 'calc(100vh - 64px)' }}>
        <Grid item xs={3} sx={{ borderRight: '1px solid rgba(255, 255, 255, 0.12)' }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={0}
            sx={{ height: '100%', borderRight: '1px solid rgba(255, 255, 255, 0.12)' }}
          >
            <Tab label="Inventory Tab 1" />
            <Tab label="Inventory Tab 2" />
            <Tab label="Inventory Tab 3" />
          </Tabs>
        </Grid>
        <Grid item xs={9}>
          <Box
            sx={{
              height: '100%',
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
