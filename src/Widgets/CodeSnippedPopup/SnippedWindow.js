// Design prompt:
// Respond as if you are a senior react application developer.
// You are knowledgable about the react-diagram library, mui-material library, javascript and html.
// When writing code you make sure the functions and comments are a little verbose to explain what you are doing.
// After writing the code, give a short explanation of how to use the code.

// For context: 
// - The project is about creating an application in which the user can make a custom diagram based on nodes and edges.
// - The standard way of describing an object in the react-diagram library is through the use of a model class and a widget class.
// The model class describes functionalities like serialization, while the widget class describes the html (or react.component) visualization.
// - In order for the engine to understand how to construct these classes, we make use of factory classes that tell the engine how to construct individual nodes, ports and edges.

// Your next assignment:
// - Create a floating window for the react application that appears when pressing a button.
// - Ensure the floating window has a clean style layout.
// - Make it possible for code snippets to be visualized in the floating window.
// - Ensure that the code (python) is correctly syntaxed highlighted.
// - Add a 'copy code' button to the top right of the window, with a corresponding MUI copy icon.
// - Ensure the floating window inherits from react.component.
// - Provide a good practice code structure. Where the button that opens the dialog content is located in a separate toolbar (react.component). Also explain the best way of passing information between the components using contentAPI.
// - Ensure the code snippet background is black.
// - Ensure the gray border is has 0px on the left, right and bottom side and 50px on the top side.
// - Add 'copy code' text besides the copy button.
// - Ensure both the copy text and button are aligned vertically to the same height. Let them align to the top right side of the dialog window with a reasonable margin.
// - Ensure to use the dark (a11yDark) theme for the SyntaxHighlighter component.
// - Add a maximal width for the syntaxhighlighter component and a minimalistic light gray horizontal scroll bar at the bottom of the window to scroll through the code.
// - Ensure the scrollbar is without arrows, has a transparent background and has a rounded bar.
// - Ensure SyntaxHighlighter has some way of wrapping long lines of text.
// - Ensure SyntaxHighlighter shows line numbers.
import React, { createContext } from 'react';
import { Dialog, IconButton, DialogContent, Box, Typography } from '@mui/material';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import { solarizedLight, a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import FileCopyIcon from '@mui/icons-material/FileCopy';


SyntaxHighlighter.registerLanguage('python', python);

export const CodeSnippetContext = createContext();

export const S = {
    dialogPaper: {
        backgroundColor: 'black',
        border: 0,
    },
    headerArea: {
        backgroundColor: 'gray',
        height: '50px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: '20px',
    },
    copyButton: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        width: '120px', // increased width to accommodate nowrap text and icon
        justifyContent: 'center',
        borderRadius: '5px',
        padding: '6px 16px', // for MUI default button padding
    },
    copyText: {
        marginRight: '5px',
        whiteSpace: 'nowrap', // prevents the text from wrapping
    },
    codeContainer: {
        maxHeight: "500px",
        overflowX: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "lightgray black",
        '&::-webkit-scrollbar': {
          height: '6px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'black',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'lightgray',
          borderRadius: '3px',
        },
    },
};

export class CodeSnippetWindow extends React.Component {
    static contextType = CodeSnippetContext;

    handleCopy = () => {
        copyToClipboard(this.props.codeSnippet);
    };

    render() {
        const { isOpen, closeDialog } = this.context;
    
        return (
            <Dialog open={isOpen} onClose={closeDialog} PaperProps={{ style: S.dialogPaper }}>
            <div style={S.headerArea}>
                <IconButton onClick={this.handleCopy} style={S.copyButton}>
                    <Typography variant="button" style={S.copyText}>
                    Copy Code
                    </Typography>
                    <FileCopyIcon />
                </IconButton>
            </div>
            <DialogContent>
              <Box sx={S.codeContainer}>
                <SyntaxHighlighter language="python" style={a11yDark} wrapLines={true} showLineNumbers={true}>
                  {this.props.codeSnippet}
                </SyntaxHighlighter>
              </Box>
            </DialogContent>
          </Dialog>
        );
    }
}
CodeSnippetWindow.propTypes = {
    codeSnippet: String,
};

export function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.textContent = text;
    document.body.appendChild(textarea);
  
    const selection = document.getSelection();
    const range = document.createRange();
    range.selectNode(textarea);
    selection.removeAllRanges();
    selection.addRange(range);
  
    document.execCommand('copy');
    selection.removeAllRanges();
  
    document.body.removeChild(textarea);
  }
  