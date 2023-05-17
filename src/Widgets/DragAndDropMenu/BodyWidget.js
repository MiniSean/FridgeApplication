import React from 'react';
import _ from 'lodash';
import { TrayWidget } from './TrayWidget';
import { CloneSelected } from "../../InteractFunctionality/CloneSelect";
import { CanvasDragToggle } from '../../InteractFunctionality/EnableDrag';
import { TrayItemWidget } from './TrayItemWidget';
import { DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from '../DemoCanvasWidget';
import styled from '@emotion/styled';
import { Application } from '../ApplicationWidget';

export class BodyWidget extends React.Component {

  render() {
    return (
      React.createElement(S.Body, null,
        React.createElement(S.Header, null,
          React.createElement("div", { className: "title" }, "Fridge WireDiagram"),
          <CloneSelected engine={this.props.app.getDiagramEngine()} model={this.props.app.getActiveDiagram()}/>,
          <CanvasDragToggle engine={this.props.app.getDiagramEngine()} model={this.props.app.getActiveDiagram()} />
        ),
        React.createElement(S.Content, null,
          React.createElement(TrayWidget, null,
            React.createElement(TrayItemWidget, { model: { type: 'in' }, name: "In Node", color: "rgb(192,255,0)" }),
            React.createElement(TrayItemWidget, { model: { type: 'out' }, name: "Out Node", color: "rgb(0,192,255)" })
          ),
          React.createElement(S.Layer, {
            onDrop: (event) => {
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
            },
            onDragOver: (event) => {
              event.preventDefault();
            }
          },
            React.createElement(DemoCanvasWidget, null,
              React.createElement(CanvasWidget, { engine: this.props.app.getDiagramEngine() })
            )
          )
        )
      )
    );
  }
}

BodyWidget.propTypes = {
  app: Application,
  cloneSelect: CloneSelected
};

const S = {};

S.Body = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

S.Header = styled.div`
  display: flex;
  background: rgb(30, 30, 30);
  flex-grow: 0;
  flex-shrink: 0;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  padding: 10px;
  align-items: center;
`;

S.Content = styled.div`
  display: flex;
  flex-grow: 1;
`;

S.Layer = styled.div`
  position: relative;
  flex-grow: 1;
`;
