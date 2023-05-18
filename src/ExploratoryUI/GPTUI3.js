// Design prompt:
// Write the render method that constructs a dry html body (without functionality) based on the following requirements:
// - Use react based elements together with MUI material ui tools.
// - The html page is designed for an desktop application.
// - The page is subdivided in 3 parts: the toolbar, the inventory and the workspace.
// - The toolbar should span the entire top row of the application and should contain contain 3 buttons: load, save and format.
// - Each toolbar button should have a small placeholder icon.
// - Align the toolbar buttons such that the container is centered with a width equal to 50% of the total window width. While the buttons inside the container are left-aligned.
// - The inventory takes up the left side of the remaining space in the application. 
// - It acts like a game inventory where each of the 3 item containers can be switched between using small icon tabs vertically aligned on the left.
// - The active (selected) tab shows a 2 by 3 item grid, respecting the size constraints of the parent inventory.
// - The workspace can be filled with a placeholder react element for now.

// Make sure to specify the arrangement, ratios and location of each ui element without writing its functionality.
// The color theme should represent an old rogue like game.
import React from 'react';
import { AppBar, Toolbar, IconButton, Grid } from '@mui/material';
import { Save, Publish, FormatAlignLeft } from '@mui/icons-material';

const App = () => {
  return (
    <div>
      {/* Toolbar */}
      <AppBar position="static">
        <Toolbar style={{ width: '50%', margin: '0 auto' }}>
          <IconButton color="inherit" aria-label="Load">
            <Publish />
          </IconButton>
          <IconButton color="inherit" aria-label="Save">
            <Save />
          </IconButton>
          <IconButton color="inherit" aria-label="Format">
            <FormatAlignLeft />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Grid container spacing={2}>
        {/* Inventory */}
        <Grid item xs={2}>
          {/* Vertical Tabs */}
          <div>
            {/* Tab 1 */}
            <div style={{ backgroundColor: '#333', padding: '10px', marginBottom: '5px' }}></div>
            {/* Tab 2 */}
            <div style={{ backgroundColor: '#333', padding: '10px', marginBottom: '5px' }}></div>
            {/* Tab 3 */}
            <div style={{ backgroundColor: '#333', padding: '10px', marginBottom: '5px' }}></div>
          </div>
        </Grid>

        {/* Workspace */}
        <Grid item xs={10}>
          {/* Placeholder React element */}
          <div style={{ backgroundColor: '#444', height: '100vh' }}></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
