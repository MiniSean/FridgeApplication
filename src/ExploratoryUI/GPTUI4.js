// Design prompt:
// Write the render method that constructs a dry html body (without functionality) based on the following requirements:
// - Use react based elements together with MUI material ui tools.
// - The html page is designed for an desktop application.
// - The page is subdivided in 3 parts: the toolbar, the inventory and the workspace.
// - The toolbar should span the entire top row of the application and should contain contain 3 buttons: load, save and format.
// - Each toolbar button should have a small placeholder icon and its name in text.
// - Align the toolbar buttons such that the container is centered with a width equal to 50% of the total window width. While the buttons inside the container are left-aligned.
// - The inventory takes up the left side of the remaining space in the application.
// - The inventory is subdivided in 2 parts: the tabs and the display items.
// - The tabs are vertically aligned with small placeholder icons and a name.
// - The tabs act like browser tabs, each displaying their own items.
// - The display items are arranged in a 2 column, 4 row grid, respecting the size constraints of the parent inventory.
// - The workspace can be filled with a placeholder react element for now.

// Make sure to specify the arrangement, ratios and location of each ui element without writing its functionality.
// The color theme should closely represent the dark mode of visual studio code.
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Grid, Paper, Tabs, Tab } from '@mui/material';
import { CloudUpload, Save, FormatAlignLeft, Folder, Code } from '@mui/icons-material';

const App = () => {
  return (
    <div>
      {/* Toolbar */}
      <AppBar position="static">
        <Toolbar style={{ width: '50%', margin: '0 auto' }}>
          <IconButton color="inherit" aria-label="Load">
            <CloudUpload />
            <Typography variant="body2">Load</Typography>
          </IconButton>
          <IconButton color="inherit" aria-label="Save">
            <Save />
            <Typography variant="body2">Save</Typography>
          </IconButton>
          <IconButton color="inherit" aria-label="Format">
            <FormatAlignLeft />
            <Typography variant="body2">Format</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Grid container spacing={2}>
        {/* Inventory */}
        <Grid item xs={2}>
          <Paper style={{ height: '100%' }}>
            {/* Tabs */}
            <Tabs orientation="vertical" variant="scrollable" textColor="primary" indicatorColor="primary">
              <Tab icon={<Folder />} label="Tab 1" />
              <Tab icon={<Folder />} label="Tab 2" />
              <Tab icon={<Folder />} label="Tab 3" />
            </Tabs>
          </Paper>
        </Grid>

        {/* Workspace */}
        <Grid item xs={10}>
          {/* Placeholder React element */}
          <div style={{ backgroundColor: '#1E1E1E', height: '100vh' }}></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
