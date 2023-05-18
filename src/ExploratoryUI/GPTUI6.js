// Design prompt:
// Now lets put everything together:
// Create an additional toolbar at the right of the workspace such that it can toggle in and out of view. If necessary make use of mui materials
// Ensure that the toolbar collapses from right (closed) left (open).
// Ensure that the app buttons are arranged vertically above each other.
// Ensure the toolbar bleeds into and overlaps the workspace.
// Once expanded, the toolbar should be vertically centered on the workspace, aligned to the rightside of the workspace, with a 10% margin at the top and bottom, and a width of 64px.
import React, { useState } from 'react';
import { Grid, AppBar, Toolbar, IconButton, Collapse, Box } from '@mui/material';
import { CloudUpload, Save, FormatAlignLeft, ArrowRight, ArrowLeft } from '@mui/icons-material';

const Render = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleToolbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        {/* Workspace */}
        <div style={{ backgroundColor: '#1E1E1E', height: '100vh', position: 'relative', zIndex: 1 }}>
          {/* Workspace Content */}
        </div>
      </Grid>
      <Grid item xs={2} style={{ position: 'relative' }}>
        {/* Right Toolbar */}
        <Collapse in={isExpanded} collapsedWidth={64} timeout="auto" unmountOnExit>
          <AppBar position="absolute" style={{ right: 0, top: '10%', bottom: '10%', width: 64, zIndex: 2 }}>
            <Toolbar style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
              <IconButton color="inherit" aria-label="Load">
                <CloudUpload />
              </IconButton>
              <IconButton color="inherit" aria-label="Save">
                <Save />
              </IconButton>
              <IconButton color="inherit" aria-label="Format">
                <FormatAlignLeft />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Collapse>
        {/* Toggle Button */}
        <IconButton
          color="inherit"
          aria-label="Toggle Toolbar"
          style={{ position: 'absolute', right: 0, top: 0, zIndex: 3 }}
          onClick={toggleToolbar}
        >
          {isExpanded ? <ArrowLeft /> : <ArrowRight />}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Render;
