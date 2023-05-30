import React, { useContext, useState } from 'react';
// import { remote } from 'electron';
// import { writeFile as fsWriteFile, readFile as fsReadFile } from 'fs/promises';
import { AppBar, Toolbar, Button, Tabs, Tab, Box, Grid, Paper, IconButton, Collapse } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Settings, Download, Upload, NoteAdd, DataObject, Folder, ToggleOnOutlined, ToggleOff, ContentCopy, Clear } from '@mui/icons-material';
import { experimentalStyled } from '@mui/material/styles';
import _ from 'lodash';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { TrayItemWidget } from './DragAndDropMenu/TrayItemWidget';
import { DemoCanvasWidget } from './CanvasWidget';
import { CodeSnippetWindow, CodeSnippetContext } from './CodeSnippedPopup/SnippedWindow';
import { Application } from './ApplicationWidget';
import { Collection } from '../CustomNode/NodeCollection';

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

const nodeCollection = new Collection();


export class BodyContent extends React.Component {

    render() {
      return (
        <ThemeProvider theme={theme}>

        {/* MainToolbar */}
        {/* <CustomAppBar app={this.props.app}/> */}
  
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
          {/* <Button color="inherit" onClick={this.handleImport}>
              <Download />
              Import
          </Button>
          <Button color="inherit" onClick={this.handleExport}>
              <Upload />
              Export
          </Button>
          <Button color="inherit" onClick={this.handleClear}>
              <NoteAdd />
              Clear
          </Button>
          <Button color="inherit">
              <Settings />
              Settings
          </Button> */}
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
  renderTrayItems() {
    return nodeCollection.nodes.map((nodeClass, index) => (
      <TrayItemWidget key={index} model={{ type: nodeClass.name }} name={nodeClass.name} color="#008080"/>
    ));
  }

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
          <Grid id="Display" item xs={8} padding= '0px 0px'>
          <Paper style={{ height: '100%', padding: '0px'}} elevation={2} square>
              {/* Tray with items */}
              <div style={{ padding: "30px 0px"}} className="tray-items">{this.renderTrayItems()}</div>
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
          isOpen: false,
        };
      }
    
    toggleToolbar = () => {
    this.setState(prevState => ({
        isExpanded: !prevState.isExpanded,
    }));
    };

    handleDrop = (event) => {
      // Handle the drop event
      // Access event data, perform necessary operations, etc.
      var data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
      var nodesCount = _.keys(this.props.app.getDiagramEngine().getModel().getNodes()).length;

      var node = null;
      for (let i = 0; i < nodeCollection.nodes.length; i++) {
        const nodeClass = nodeCollection.nodes[i];
        if (nodeClass.name === data.type) {
          node = new nodeClass(); // Instantiate the matching node class
          break;
        }
      }
      
      if (node) {
        var point = this.props.app.getDiagramEngine().getRelativeMousePoint(event);
        node.setPosition(point);
        this.props.app.getDiagramEngine().getModel().addNode(node);
        this.forceUpdate();
      }
    };
    
    handleDragOver = event => {
        // Handle the drag over event
        // Access event data, perform necessary operations, etc.
        event.preventDefault();
    };

    openDialog = () => {
      this.setState({ isOpen: true });
    };
  
    closeDialog = () => {
      this.setState({ isOpen: false });
    };

    render() {
        const { isExpanded, isOpen } = this.state;

      return (
        <Grid item xs={9}>
            <Grid item xs={12} style={{ position: 'relative' }}>
            {/* Workspace Content */}
            <div id="Workspace Content" onDrop={this.handleDrop} onDragOver={this.handleDragOver} style={{ backgroundColor: '#1E1E1E', height: '100vh', position: 'relative', zIndex: 1 }}>
              <DemoCanvasWidget>
                <CanvasWidget engine={this.props.app.getDiagramEngine()} />
              </DemoCanvasWidget>
            </div>

            <CodeSnippetContext.Provider value={{ isOpen, openDialog: this.openDialog, closeDialog: this.closeDialog }}>
              {/* Popup Code Snippet Window */}
              <CodeSnippetWindow codeSnippet={"print('Hello... world... This is a very long piece of string to be printed.')"}/>

              {/* Right Toolbar */}
              <WorkspaceToolbar app={this.props.app} isExpanded={isExpanded}/>
            </CodeSnippetContext.Provider>

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

export class WorkspaceToolbar extends React.Component {
  static contextType = CodeSnippetContext;  // Code snippet context

  /**
   * Handle the export button click.
   * Serializes the model and prompts the user to save the serialized JSON to a file.
   */
  handleExport = () => {
    const engine = this.props.app.getDiagramEngine();
    const model = engine.getModel();
    const serializedModel = JSON.stringify(model.serialize());
    console.log(serializedModel);
  
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(serializedModel));
    element.setAttribute('download', 'diagram.json');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  /**
   * Handle the import button click.
   * Prompts the user to select a JSON file.
   * Reads the selected file, deserializes the model, and sets it to the engine.
   */
  handleImport = () => {
    // Create a file input element dynamically
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json'; // Restrict to .json files only
  
    // Set up event listener for file selection
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        // const contents = e.target.result;
        const contents = reader.result;
        const jsonDataString = contents.toString();
        const jsonData = JSON.parse(jsonDataString);
        const engine = this.props.app.getDiagramEngine();
        const model = Application.getModel();
        model.deserializeModel(jsonData, engine);
        engine.setModel(model);
      };
  
      reader.readAsText(file);
    });
  
    // Trigger the file input click event
    fileInput.click();
  };

  /**
   * Handle the clear button click.
   * Clears all elements inside the model.
   * Future update: Remove all listeners from both nodes and links before replacing model.
   */
  handleClear = () => {
    const engine = this.props.app.getDiagramEngine();
    const model = engine.getModel();
  
    // Remove all nodes from the model
    model.getNodes().forEach((node) => {
      model.removeNode(node);
    });

    // Remove all links from the model
    model.getLinks().forEach((link) => {
      model.removeLink(link);
    });
  
    // Force update the component to reflect the changes
    // Create a new instance of DiagramModel
    const newModel = Application.getModel();

    // Set the new model on the diagram engine
    engine.setModel(newModel);
    console.log('Model cleared successfully!');
  };

  render() {
    const { openDialog } = this.context;

    return (
      <Collapse id="Workspace Collapsable" in={this.props.isExpanded} collapsedWidth={64} timeout="auto" unmountOnExit>
      <AppBar id="Toolbar" position="absolute" style={{ right: 0, top: '10%', bottom: '20%', width: 64, zIndex: 2 }}>
          <Toolbar id="Toolbar Container" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
          <IconButton color="inherit" aria-label="Copy" title="New" onClick={this.handleClear}>
              <NoteAdd />
          </IconButton>
          <IconButton color="inherit" aria-label="Copy" title="Import" onClick={this.handleImport}>
              <Download />
          </IconButton>
          <IconButton color="inherit" aria-label="Copy" title="Export" onClick={this.handleExport}>
              <Upload />
          </IconButton>
          <IconButton color="inherit" aria-label="Copy" title="Copy">
              <ContentCopy />
          </IconButton>
          <IconButton color="inherit" aria-label="Copy" title="Config" onClick={openDialog}>
              <DataObject />
          </IconButton>
          <IconButton color="inherit" aria-label="Delete" title="Delete">
              <Clear />
          </IconButton>
          <IconButton color="inherit" aria-label="Format" title="Settings">
              <Settings />
          </IconButton>
          </Toolbar>
      </AppBar>
      </Collapse>
    );
  }
}
WorkspaceToolbar.propTypes = {
  app: Application,
  isExpanded: Boolean,
  snippedWindow: CodeSnippetWindow,
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
