import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Tabs, Tab, Box, Grid, Paper, IconButton, Collapse } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Settings, Download, Upload, Folder, ToggleOnOutlined, ToggleOff, ContentCopy, Clear } from '@mui/icons-material';
import { experimentalStyled } from '@mui/material/styles';
import _ from 'lodash';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DefaultNodeModel } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';
import { TrayWidget } from '../Widgets/DragAndDropMenu/TrayWidget';
import { TrayItemWidget } from '../Widgets/DragAndDropMenu/TrayItemWidget';
import { DemoCanvasWidget } from '../Widgets/DemoCanvasWidget';
import { Application } from '../Widgets/ApplicationWidget';

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

const Item = experimentalStyled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export class BodyContent extends React.Component {

    render() {
      return (
        <ThemeProvider theme={theme}>

        {/* MainToolbar */}
        <CustomAppBar/>
  
        {/* Main Content */}
        <MainContent app={this.props.app}/>
  
        </ThemeProvider>
      );
    }
}
BodyContent.propTypes = {
    app: Application,
};

export class CustomAppBar extends React.Component {

    render() {
      return (
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
      );
    }
}

export class MainContent extends React.Component {

    render() {
      return (
        <Grid id="MainContent" container sx={{ height: 'calc(100vh - 64px)' }}>

        {/* Inventory */}
        <InventoryPanel/>

        {/* Workspace */}
        <WorkspacePanel app={this.props.app}/>
        
        </Grid>
      );
    }
}
MainContent.propTypes = {
    app: Application,
};

export class InventoryPanel extends React.Component {

    render() {
        const tabs = ['Sources', 'Mixers', 'Local Oscillators', 'Attenuation'];
        const buttons = ['#1', '#2', '#3', '#4', '#5', '#6'];
      return (
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
            <Paper style={{ height: '100%', padding: '0px' }} elevation={2} square>
                {/* Grid with Buttons */}
                <Grid container spacing={0}>
                    {buttons.map((button, index) => (
                        <Grid key={index} item xs={12} lg={6}>
                        <Button variant="outlined" color="primary" fullWidth square>
                            {button}
                        </Button>
                        </Grid>
                    ))}
                    <TrayItemWidget model={{ type: 'in' }} name="In Node" color="rgb(192,255,0)"/>
                </Grid>
            </Paper>
            </Grid>
        </Grid>
      );
    }
}

export class WorkspacePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isExpanded: true,
        };
      }
    
    toggleToolbar = () => {
    this.setState(prevState => ({
        isExpanded: !prevState.isExpanded,
    }));
    };

    render() {
        const { isExpanded } = this.state;

      return (
        <Grid item xs={9}>
            <Grid item xs={12} style={{ position: 'relative' }}>
            {/* Workspace Content */}
            <div id="Workspace Content" style={{ backgroundColor: '#1E1E1E', height: '100vh', position: 'relative', zIndex: 1 }}>
                <WorkspaceContent app={this.props.app}/>
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
            onClick={this.toggleToolbar}
            >
            {isExpanded ? <ToggleOff /> : <ToggleOnOutlined />}
            </IconButton>
            </Grid>
        </Grid>
      );
    }
}
WorkspacePanel.propTypes = {
    app: Application,
};

export class WorkspaceContent extends React.Component {

    handleDrop = event => {
        // Handle the drop event
        // Access event data, perform necessary operations, etc.
        var data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
        var nodesCount = _.keys(this.props.app.getDiagramEngine().getModel().getNodes()).length;

        var node = null;
        if (data.type === 'in') {
            node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(192,255,0)');
            node.addInPort('In');
        } else {
            node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(0,192,255)');
            node.addOutPort('Out');
        }
        
        var point = this.props.app.getDiagramEngine().getRelativeMousePoint(event);
        node.setPosition(point);
        this.props.app.getDiagramEngine().getModel().addNode(node);
        this.forceUpdate();
    };
    
    handleDragOver = event => {
        // Handle the drag over event
        // Access event data, perform necessary operations, etc.
        event.preventDefault();
    };

    render() {
        return(
            <DemoCanvasWidget onDrop={this.handleDrop} onDragOver={this.handleDragOver}>
                <CanvasWidget engine={this.props.app.getDiagramEngine()} />
            </DemoCanvasWidget>
        );
    }
}
WorkspaceContent.propTypes = {
    app: Application,
};

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      {/* MainToolbar */}
      <CustomAppBar/>

      {/* Main Content */}
      <MainContent/>

    </ThemeProvider>
  );
};
