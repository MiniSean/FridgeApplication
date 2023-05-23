// Design prompt:
// Write a class that extends the DefaultNodeModel from projectstorm react-diagrams library that:
// - Has two output ports 'Output-I' and 'Output-Q'.
// - Both ports should create a RightAnglePortModel, which is an extension of the DefaultPortModel (also from react-diagrams), this model creates a RightAngleLinkModel when calling its createLinkModel method.
// - Make sure the CustomNodeModel and RightAnglePortModel classes have the export key.
// - Create the corresponding CustomNodeFactory and give a comment in the code on where to use these.
// - Create the corresponding CustomNodeWidget and give a comment in the code on where to use these.
// - Make sure to specify where to register the RightAngleLinkFactory and CustomNodeFactory to the engine.
import { 
   NodeModel,
   NodeWidget,
   DefaultNodeModel,
   DefaultPortModel, 
   DefaultLinkModel,
   DefaultPortLabel,
   DiagramEngine,
   DefaultNodeWidget,
   DefaultLinkWidget,
   DefaultNodeFactory,
   DefaultLinkFactory,
   RightAngleLinkModel,
} from '@projectstorm/react-diagrams';
import * as React from 'react';
import * as _ from 'lodash';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import styled from '@emotion/styled';
import { Settings } from '@mui/icons-material';

// Custom Models //

export class CustomNodeModel extends DefaultNodeModel {
   constructor(name) {
      super({
         type: 'custom-node',
         name: name,
         color: 'gray', // Color for the entire node
      });

      // Create the output ports
      const portOutI = this.addPort(new DefaultPortModel({  // RightAnglePortModel
         in: false,
         type: 'right-angle-port',
         name: 'OutputI',
         label: 'I-Out',
         maximumLinks: 1,
         canLinkPort: true,
      }));

      const portOutQ = this.addPort(new DefaultPortModel({
         in: false,
         type: 'right-angle-port',
         name: 'OutputQ',
         label: 'Q-Out',
         maximumLinks: 1,
         canLinkPort: true,
      }));

      // Create the input ports
      const portInI = this.addPort(new DefaultPortModel({
         in: true,
         type: 'right-angle-port',
         name: 'InputI',
         label: 'I-In',
         maximumLinks: 1,
         canLinkPort: true,
      }));

      const portInQ = this.addPort(new DefaultPortModel({
         in: true,
         type: 'right-angle-port',
         name: 'InputQ',
         label: 'Q-In',
         maximumLinks: 1,
         canLinkPort: true,
      }));
   }
}

export class RightAnglePortModel extends DefaultPortModel {
  createLinkModel() {
    return new RightAngleLinkModel();
  }
}

// class RightAngleLinkModel extends DefaultLinkModel {
//   constructor() {
//     super({
//       type: 'right-angle-link',
//     });
//   }
// }

// Custom Factories //

export class CustomNodeFactory extends AbstractReactFactory {
   constructor() {
     super('custom-node');
   }
 
   generateModel(initialConfig) {
     return new CustomNodeModel();
   }
 
   generateReactWidget(event) {
     return <CustomNodeWidget engine={this.engine} node={event.model} />;}
 }
 
//  export class RightAngleLinkFactory extends AbstractReactFactory {
//    constructor() {
//      super('right-angle-link');
//    }
 
//    generateModel(initialConfig) {
//      return new RightAngleLinkModel();
//    }
 
//    generateReactWidget(event) {
//      return <RightAngleLinkWidget engine={this.engine} link={event.model} />;return React.createElement(RightAngleLinkWidget, { engine: this.engine, link: event.model });
//    }
//  }

// Custom Widgets //

const S = {
   Node: styled.div((p) => ({
     backgroundColor: 'transparent',
     borderRadius: '5px',
     fontFamily: 'sans-serif',
     color: 'white',
     overflow: 'visible',
     fontSize: '11px',
     border: `solid 2px ${p.selected ? 'rgb(0,192,255)' : 'black'}`,
     position: 'relative', // Add higher z-index value
   })),
 
   Header: styled.div((p) => ({
      display: 'flex',
      backgroundColor: p.background,
   })),

   Icon: styled.div({
      background: 'rgba(233, 153, 38, 1)',
      display: 'flex',
      whiteSpace: 'nowrap',
      justifyItems: 'center',
   }),

   IconText: styled.div({
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '16px',
      padding: '0 2px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),

   Title: styled.div({
     background: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))',
     display: 'flex',
     whiteSpace: 'nowrap',
     justifyItems: 'center',
   }),
 
   TitleName: styled.div({
     flexGrow: 1,
     padding: '5px 20px',
   }),
 
   Ports: styled.div({
     display: 'flex',
     backgroundColor: 'rgba(0, 90, 255, 0.1)',
   }),
 
   PortsContainer: styled.div((p) => ({
      flexGrow: 1,
      flexDirection: 'column',
      ...(p[':first-of-type'] && { marginRight: '10px' }),
      ...(p[':only-child'] && { marginRight: '0px' }),
      ...(p.type === 'in' && { textAlign: 'left' }), // Added text alignment for PortsInContainer
      ...(p.type === 'out' && { textAlign: 'right' }), // Added text alignment for PortsOutContainer
   })),
 };

/**
 * Source: https://github.com/projectstorm/react-diagrams/blob/master/packages/react-diagrams-defaults/src/node/DefaultNodeWidget.tsx
 */
class CustomNodeWidget extends React.Component {
   generatePort(port) {
     return <DefaultPortLabel engine={this.props.engine} port={port} key={port.getID()} />;
   }

   render() {
      const nodeOptions = this.props.node.getOptions();
    
      return (
        <S.Node
          data-default-node-name={nodeOptions.name}
          selected={this.props.node.isSelected()}
          background={nodeOptions.color}
        >
            <S.Header
               background={nodeOptions.color}
            >
               <S.Icon>
                  <S.IconText>{"UHF"}</S.IconText>
               </S.Icon>
               <S.Title>
                  <S.TitleName>{nodeOptions.name}</S.TitleName>
               </S.Title>
               <S.Icon>
                  <Settings/>
               </S.Icon>
            </S.Header>
            <S.Ports>
               <S.PortsContainer type={"in"}>
                  {_.map(this.props.node.getInPorts(), this.generatePort.bind(this))}
               </S.PortsContainer>
               <S.PortsContainer type={"out"}>
                  {_.map(this.props.node.getOutPorts(), this.generatePort.bind(this))}
               </S.PortsContainer>
            </S.Ports>
        </S.Node>
      );
    }
}
 
//  export class RightAngleLinkWidget extends DefaultLinkWidget {
//    // Custom implementation for rendering the link widget
//  }
