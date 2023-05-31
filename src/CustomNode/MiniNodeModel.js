import * as React from 'react';
import * as _ from 'lodash';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import styled from '@emotion/styled';
import { DescriptiveNodeModel, S as styleDict, TitleInputComponent } from './DesciptiveNodeModel';
import { MyCustomPortLabel } from './DescriptivePortLabel';
 
// Custom Models //
 
export class MiniNodeModel extends DescriptiveNodeModel {
    constructor(props = {}) {
        const {
            unit = 'a.u.',
            ...otherProps
        } = props;

        const defaultProps = {
            type: 'mini-node',
            ...otherProps,
        };
        super(defaultProps);
        this.unit = unit;
    }
 
    // Override the serialize method to define how your custom node should be serialized
    serialize() {
       return {
          ...super.serialize(), // Call the parent's serialize method to include default serialized data
          unit: this.unit,
       };
    }
 
    // Override the deserialize method to define how your custom node should be deserialized
    deserialize(event, engine) {
       super.deserialize(event, engine);
       this.unit = event.data.unit;
    }
}
MiniNodeModel.propTypes = {
    ...DescriptiveNodeModel.propTypes, // Include the existing propTypes from DescriptiveNodeModel
    unit: String, // Additional prop type for 'unit'
};
 
// Custom Factories //
 
export class MiniNodeFactory extends AbstractReactFactory {
    constructor() {
      super('mini-node');
    }
  
    generateModel(initialConfig) {
      return new MiniNodeModel();
    }
  
    generateReactWidget(event) {
      return <MiniNodeWidget engine={this.engine} node={event.model} />;}
}
 
 // Custom Widgets //

export const iconType = Object.freeze({
  LowPassFilter: 'lowpassIcon',
})

const S = {
    ...styleDict,
    // Extends style dict
    TitleInputContainer: styled.div({
        display: 'flex',
        alignItems: 'center',
    }),

    TitleUnit: styled.div({
        background: 'transparent',
        padding: '2px',
        fontSize: '14px',
    }),

    TitleInput: styled(styleDict.TitleInput)({
        maxWidth: '60px',
        textAlign: 'right',
    }),

    PortsContainer: styled(styleDict.PortsContainer)((p) => ({
        flexDirection: 'row',  // Specifies that the alignment tag should take effect as if it is a row element.
        alignItems: 'center',
    })),
};

class NumericInputComponent extends TitleInputComponent {
    render() {
        const { node } = this.props;
    
        return (
          <S.TitleInputContainer>
            <S.TitleInput
              type="number"
              min={0}
              step={1}
              maxLength={5}
              placeholder="Value"
              onKeyDown={this.handleKeyDown}
              onChange={this.handleInputChange}
              value={node.titleName}
              unit={node.unit}
            />
            <S.TitleUnit>{node.unit}</S.TitleUnit>
          </S.TitleInputContainer>
        );
    }
}

/**
* Source: https://github.com/projectstorm/react-diagrams/blob/master/packages/react-diagrams-defaults/src/node/DefaultNodeWidget.tsx
*/
 export class MiniNodeWidget extends React.Component {
    generatePort(port) {
       return (
         <MyCustomPortLabel 
           engine={this.props.engine} 
           port={port} 
           key={port.getID()} 
         />
       );
    }

    renderSwitch(param) {
      switch(param) {
        // case iconType.LowPassFilter:
        //   return <LowPassFilterIcon/>;
        default:
          return <S.IconText>{param}</S.IconText>;
      }
    };
 
    render() {
       const nodeOptions = this.props.node.getOptions();
     
       return (
         <S.Node
           data-default-node-name={nodeOptions.name}
           selected={this.props.node.isSelected()}
           background={nodeOptions.color}
         >
             <S.Header background={nodeOptions.color}>
                <S.PortsContainer type={"in"}>
                   {_.map(this.props.node.getInPorts(), this.generatePort.bind(this))}
                </S.PortsContainer>
                <S.Icon color={this.props.node.colorHighlight}>
                   {this.renderSwitch(this.props.node.nameHighlight)}
                </S.Icon>
                <S.Title>
                   <NumericInputComponent node={this.props.node} onChange={this.handleInputChange} />
                </S.Title>
                <S.PortsContainer type={"out"}>
                   {_.map(this.props.node.getOutPorts(), this.generatePort.bind(this))}
                </S.PortsContainer>
             </S.Header>
         </S.Node>
       );
     }
}