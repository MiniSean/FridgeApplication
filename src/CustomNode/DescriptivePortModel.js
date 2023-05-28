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
// - Create a boilerplate port model and widget based on the DefaultPortModel (from react-diagram library).
// - Extend the render method of the port widget to mimic the colors of an "smp connector" (yellow/gold-ish).
// - Ensure the rendered shape of the port widget is opaque with a gradient from yellow to gold. 
// - Ensure it has a 1px black border. 
// - Ensure it displays text at the center with fontsize 10, color white and bold.
// - Ensure the rendered shape is a rectangle with small rounded edges.
import React from 'react';
import {
    AbstractReactFactory,
} from '@projectstorm/react-canvas-core';
import { 
    DefaultPortModel,
    PortWidget as StormPortWidget,
    DefaultPortLabel,
} from '@projectstorm/react-diagrams';

// Custom Models //

class MyCustomPortModel extends DefaultPortModel {
    constructor(options = {}) {
        super({
            ...options,
            type: 'my.custom.port'
        });
    }
    
    serialize() {
        return {
            ...super.serialize(),
            // Custom serialization steps go here
        };
    }

    deserialize(event, engine) {
        super.deserialize(event, engine);
        // Custom deserialization steps go here
    }
}

// Custom Widgets //

class MyCustomPortWidget extends React.Component {
    render() {
        const port = this.props.port;
        const engine = this.props.engine;

        const style = {
            background: 'linear-gradient(to bottom, yellow, gold)',
            border: '1px solid black',
            borderRadius: '5px',
            // color: 'white',
            fontSize: '10px',
            fontWeight: 'bold',
            // display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20px',
            // width: '40px',
        };

        return (
            <StormPortWidget style={style}  port={port} engine={engine}>
                {/* <StormPortWidget style={style} port={port} engine={engine}>
                    <div>My Port</div>
                </StormPortWidget> */}
                <DefaultPortLabel port={port} engine={engine}/>
            </StormPortWidget>
        );
    }
}

// Custom Factories //

class MyCustomPortFactory extends AbstractReactFactory {
    constructor() {
        super('my.custom.port');
    }

    generateModel(event) {
        return new MyCustomPortModel();
    }

    generateReactWidget(event) {
        return <MyCustomPortWidget engine={this.engine} port={event.model} />;
    }
}

export {
    MyCustomPortModel,
    MyCustomPortWidget,
    MyCustomPortFactory,
};
