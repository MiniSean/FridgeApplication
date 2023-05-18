import React, { useState } from 'react';
import { Grid, AppBar, Toolbar, IconButton, Collapse } from '@mui/material';
import { CloudUpload, Save, FormatAlignLeft, ArrowLeft, ArrowRight } from '@mui/icons-material';

const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleToolbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        {/* Workspace */}
        <div style={{ backgroundColor: '#1E1E1E', height: '100vh' }}></div>
      </Grid>
      <Grid item xs={2}>
        {/* Right Toolbar */}
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Load">
                <CloudUpload />
              </IconButton>
              <IconButton color="inherit" aria-label="Save">
                <Save />
              </IconButton>
              <IconButton color="inherit" aria-label="Format">
                <FormatAlignLeft />
              </IconButton>
              <IconButton color="inherit" onClick={toggleToolbar}>
                <ArrowLeft />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Collapse>

        {/* Toggle Button */}
        <IconButton
          color="inherit"
          aria-label="Toggle Toolbar"
          style={{ position: 'absolute', right: '16px', top: '16px', zIndex: 1 }}
          onClick={toggleToolbar}
        >
          {isExpanded ? <ArrowRight /> : <ArrowLeft />}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default App;
