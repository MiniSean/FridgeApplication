import * as _ from 'lodash';
import * as React from 'react';
import { DemoButton, DemoWorkspaceWidget } from '../Widgets/DemoWorkspaceWidget';

function downloadTextFile(text, filename) {
	const element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
  
	element.style.display = 'none';
	document.body.appendChild(element);
  
	element.click();
  
	document.body.removeChild(element);
  }

export class Serializer extends React.Component {

	constructor(props) {
		super(props);
		this.serializeDiagram = this.serializeDiagram.bind(this);
	}

	serializeDiagram() {
		let { model } = this.props;
		var str = JSON.stringify(model.serialize());
		console.log(str);
		const filename = 'example.txt';
		downloadTextFile(str, filename);
	}

	render() {
		return React.createElement(
			DemoWorkspaceWidget,
			{ buttons: React.createElement(DemoButton, { onClick: this.serializeDiagram }, 'Save Diagram') },
		);
	}
}