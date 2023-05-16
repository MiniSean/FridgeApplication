import { LinkModel, NodeModel } from '@projectstorm/react-diagrams';
import * as _ from 'lodash';
import * as React from 'react';
import { DemoButton, DemoWorkspaceWidget } from '../Widgets/DemoWorkspaceWidget';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from '../Widgets/DemoCanvasWidget';

export class CloneSelected extends React.Component {
	constructor(props) {
		super(props);
		this.cloneSelected = this.cloneSelected.bind(this);
	}

	cloneSelected() {
		let { engine } = this.props;
		let offset = { x: 100, y: 100 };
		let model = engine.getModel();

		let itemMap = {};
		_.forEach(model.getSelectedEntities(), (item) => {
			let newItem = item.clone(itemMap);

			if (newItem instanceof NodeModel) {
				newItem.setPosition(newItem.getX() + offset.x, newItem.getY() + offset.y);
				model.addNode(newItem);
			} else if (newItem instanceof LinkModel) {
				newItem.getPoints().forEach((p) => {
					p.setPosition(p.getX() + offset.x, p.getY() + offset.y);
				});
				model.addLink(newItem);
			}
			newItem.setSelected(false);
		});

		this.forceUpdate();
	}

	render() {
		const { engine } = this.props;
		return React.createElement(
			DemoWorkspaceWidget,
			{ buttons: React.createElement(DemoButton, { onClick: this.cloneSelected }, 'Clone Selected') },
			React.createElement(
				DemoCanvasWidget,
				null,
				React.createElement(CanvasWidget, { engine: engine })
			)
		);
	}
}