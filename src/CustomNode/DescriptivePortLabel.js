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

// Your assignment:
// - Create a boilerplate port label based on the DefaultPortLabel (from react-diagram library).
// - Change the part of the port label that is used to connect links (edges) to display as an open circle. Once a link is created, the displayed circle should be closed.
// - Ensure the link starts at the center of the circle.
// - Ensure the circle is drawn on the same verticle height as the label text.
// - Ensure the circle if drawn left of the label text if the port alignment equals 'LEFT' and draw it right of the label text if the port aligment equals 'RIGHT'.
import React from 'react';
import { DefaultPortModel, PortWidget } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';

// Style for the circle
const PortCircle = styled.div`
  width: 8px;
  height: 8px;
  border: 5px solid rgb(30, 43, 66);
  border-radius: 50%;
  background-color: ${props => props.hasLinks ? '#5debf0' : 'transparent'};
`;

// Style for the container
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.alignment === 'right' ? 'flex-end' : 'flex-start'};
  flex-direction: ${props => props.alignment === 'right' ? 'row' : 'row-reverse'};
`;

export class MyCustomPortLabel extends React.Component {
  render() {
    const port = this.props.port;
    const engine = this.props.engine;
    const hasLinks = Object.keys(port.links).length > 0;
    const alignment = port.getOptions().alignment || 'left';
    console.log(port.getOptions());

    return (
      <Container alignment={alignment}>
        <div className="name">{this.props.port.getOptions().label}</div>
        <PortWidget engine={engine} port={port}>
        <PortCircle hasLinks={hasLinks} />
        </PortWidget>
      </Container>
    );
  }
}
