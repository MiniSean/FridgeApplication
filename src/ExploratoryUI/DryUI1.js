
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Tabs, Tab, Box, Grid, Paper, IconButton, Collapse } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Settings, Download, Upload, Folder, ToggleOnOutlined, ToggleOff, ContentCopy, Clear } from '@mui/icons-material';
import { experimentalStyled as styled } from '@mui/material/styles';

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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const App = () => {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  const buttons = ['#1', '#2', '#3', '#4', '#5', '#6']; // Example buttons
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleToolbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Toolbar */}
      <AppBar id="Toolbar" position="static">
        <Toolbar style={{ width: '80%', margin: '0 auto', justifyContent: 'flex-end' }}>
          <Button color="inherit">
            <Download />
            Import
          </Button>
          <Button color="inherit">
            <Upload />
            Export
          </Button>
          <Button color="inherit">
            <Settings />
            Settings
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Grid id="MainContent" container sx={{ height: 'calc(100vh - 64px)' }}>

        {/* Inventory */}
        <Grid id="Inventory" item xs={3} container spacing={0}>
            {/* Tabs */}
            <Grid id="Tabs" item xs={4}>
            <Paper style={{ height: '100%', padding: '0px' }} elevation={1} square>
                {/* Vertical Tabs */}
                <Tabs orientation="vertical" value={0}>
                {tabs.map((tab, index) => (
                    <Tab key={index} icon={<Folder />} label={tab} />
                ))}
                </Tabs>
            </Paper>
            </Grid>

            {/* Display */}
            <Grid id="Display" item xs={8}>
            <Paper style={{ height: '100%', padding: '0px' }} elevation={1} square>
                {/* Grid with Buttons */}
                <Grid container spacing={0}>
                {buttons.map((button, index) => (
                    <Grid key={index} item xs={12} lg={6}>
                    <Button variant="outlined" color="primary" fullWidth square>
                        {button}
                    </Button>
                    </Grid>
                ))}
                </Grid>
            </Paper>
            </Grid>
        </Grid>

        {/* Workspace */}
        <Grid item xs={9}>
            <Grid item xs={12} style={{ position: 'relative' }}>
            {/* Workspace Content */}
            <div id="Workspace Content" style={{ backgroundColor: '#1E1E1E', height: '100vh', position: 'relative', zIndex: 1 }}>
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
            </div>

            {/* Right Toolbar */}
            <Collapse id="Workspace Collapsable" in={isExpanded} collapsedWidth={64} timeout="auto" unmountOnExit>
            <AppBar id="Toolbar" position="absolute" style={{ right: 0, top: '10%', bottom: '20%', width: 64, zIndex: 2 }}>
                <Toolbar id="Toolbar Container" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                <IconButton color="inherit" aria-label="Copy">
                    <ContentCopy />
                </IconButton>
                <IconButton color="inherit" aria-label="Delete">
                    <Clear />
                </IconButton>
                <IconButton color="inherit" aria-label="Format">
                    <Settings />
                </IconButton>
                </Toolbar>
            </AppBar>
            </Collapse>

            {/* Toggle Button */}
            <IconButton
            id="Toolbar Toggle"
            color="white"
            aria-label="Toggle Toolbar"
            style={{ position: 'absolute', right: 10, top: 10, zIndex: 3 }}
            onClick={toggleToolbar}
            >
            {isExpanded ? <ToggleOff /> : <ToggleOnOutlined />}
            </IconButton>
            </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
