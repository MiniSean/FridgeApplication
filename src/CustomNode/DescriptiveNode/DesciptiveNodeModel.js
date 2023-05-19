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
   DefaultNodeModel,
   DefaultPortModel, 
   DefaultLinkModel, 
   DiagramEngine,
   DefaultNodeWidget,
   DefaultLinkWidget,
   DefaultNodeFactory,
   DefaultLinkFactory,
   RightAngleLinkModel ,
} from '@projectstorm/react-diagrams';
import * as React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

// Custom Models //

export class CustomNodeModel extends DefaultNodeModel {
   constructor() {
      super({
         type: 'custom-node',
      });

      // Create the output ports
      const portI = this.addPort(new RightAnglePortModel({ type: 'right-angle-port', name: 'Output-I', maximumLinks: 1, canLinkPort: true }));
      const portQ = this.addPort(new RightAnglePortModel({ type: 'right-angle-port', name: 'Output-Q', maximumLinks: 1, canLinkPort: true }));
      
      // Set the desired position of the ports
      portI.setPosition('right');
      portQ.setPosition('right');

      // Set properties for all ports
      Object.values(this.ports).forEach((port) => {
         port.canLinkPort = true;
         port.maximumLinkCount = 1;
      });
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

export class CustomNodeWidget extends DefaultNodeWidget {
   // Custom implementation for rendering the node widget
}
 
//  export class RightAngleLinkWidget extends DefaultLinkWidget {
//    // Custom implementation for rendering the link widget
//  }
