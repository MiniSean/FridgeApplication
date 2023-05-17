import * as React from 'react';
import createEngine, { DiagramModel, DefaultNodeModel } from '@projectstorm/react-diagrams';
import { DemoButton, DemoWorkspaceWidget } from '../Widgets/DemoWorkspaceWidget';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from '../Widgets/DemoCanvasWidget';

export class CanvasDragToggle extends React.Component {
	enableDrag = () => {
		const { engine } = this.props;
		const state = engine.getStateMachine().getCurrentState();
		state.dragCanvas.config.allowDrag = true;
	};

	disableDrag = () => {
		const { engine } = this.props;
		const state = engine.getStateMachine().getCurrentState();
		state.dragCanvas.config.allowDrag = false;
	};

	render() {
		const { engine } = this.props;
		return (
			<DemoWorkspaceWidget
				buttons={[
					<DemoButton key={1} onClick={this.enableDrag}>
						Enable canvas drag
					</DemoButton>,
					<DemoButton key={2} onClick={this.disableDrag}>
						Disable canvas drag
					</DemoButton>
				]}
			>
				<DemoCanvasWidget>
					<CanvasWidget engine={engine} />
				</DemoCanvasWidget>
			</DemoWorkspaceWidget>
		);
	}
}