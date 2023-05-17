import * as _ from 'lodash';
import * as React from 'react';
import { DemoButton, DemoWorkspaceWidget } from '../Widgets/DemoWorkspaceWidget';

export class Serializer extends React.Component {

	constructor(props) {
		super(props);
		this.serializeDiagram = this.serializeDiagram.bind(this);
	}

	serializeDiagram() {
		let { model } = this.props;
		var str = JSON.stringify(model.serialize());
		console.log(str);
	}

	render() {
		return React.createElement(
			DemoWorkspaceWidget,
			{ buttons: React.createElement(DemoButton, { onClick: this.serializeDiagram }, 'Save Diagram') },
		);
	}
}