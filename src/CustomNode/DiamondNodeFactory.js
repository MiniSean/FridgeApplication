import DiamondNodeWidget from './DiamondNodeWidget';
import { DiamondNodeModel } from './DiamondNodeModel';
import * as React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

export class DiamondNodeFactory extends AbstractReactFactory {
	constructor() {
		super('diamond');
	}

	generateReactWidget(event) {
		return React.createElement(DiamondNodeWidget, { engine: this.engine, size: 50, node: event.model });
	}
	
	generateModel(event) {
		return new DiamondNodeModel();
	}
}