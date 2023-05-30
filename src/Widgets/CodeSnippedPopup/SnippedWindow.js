// Design prompt:
import React, { createContext } from 'react';
import { Dialog, IconButton, DialogContent } from '@mui/material';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import FileCopyIcon from '@mui/icons-material/FileCopy';

SyntaxHighlighter.registerLanguage('python', python);

export const CodeSnippetContext = createContext();

export class CodeSnippetWindow extends React.Component {
    static contextType = CodeSnippetContext;

    handleCopy = () => {
        copyToClipboard(this.props.codeSnippet);
    };

    render() {
        const { isOpen, closeDialog } = this.context;
    
        return (
          <Dialog open={isOpen} onClose={closeDialog}>
            <IconButton onClick={this.handleCopy} style={{ position: 'absolute', right: '10px', top: '10px' }}>
              <FileCopyIcon />
            </IconButton>
            <DialogContent>
              <SyntaxHighlighter language="python" style={solarizedLight}>
                {this.props.codeSnippet}
              </SyntaxHighlighter>
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
  