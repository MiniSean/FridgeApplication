import createEngine, {
  DefaultDiagramState,
  DefaultNodeModel,
  DiagramModel,
  DiagramEngine,
  PortModelAlignment,
} from '@projectstorm/react-diagrams';
// import the custom models
import { DiamondNodeModel } from '.././CustomNode/DiamondNodeModel';
import { DiamondNodeFactory } from '.././CustomNode/DiamondNodeFactory';
import { SimplePortFactory } from '.././CustomNode/SimplePortFactory';
import { DiamondPortModel } from '.././CustomNode/DiamondPortModel';

export class Application {
	diagramModel;
	diagramEngine;

	constructor() {
		this.diagramEngine = this.getEngine();  // SRD.default();
		
		// ############################################ MAGIC HAPPENS HERE
		const state = this.diagramEngine.getStateMachine().getCurrentState();
		if (state instanceof DefaultDiagramState) {
			state.dragNewLink.config.allowLooseLinks = false;
		}
		// ############################################ MAGIC HAPPENS HERE

		this.diagramModel = this.getModel();
		
  		//5) load model into engine
		this.diagramEngine.setModel(this.diagramModel);
	}

	getEngine() {
		//1) setup the diagram engine
		var engine = createEngine();

		// register other factories as well
		engine.getPortFactories().registerFactory(new SimplePortFactory('diamond', (config) => new DiamondPortModel(PortModelAlignment.LEFT)));
		engine.getNodeFactories().registerFactory(new DiamondNodeFactory());

		return engine;
	}

	getModel() {
		var model = new DiagramModel();
		model.setGridSize(25);

		//3-A) create a default node
		var node1 = new DefaultNodeModel('UHFQC', 'rgb(0,192,255)');
		var port1 = node1.addOutPort('Out');
		node1.setPosition(100, 100);

		var node5 = new DefaultNodeModel('LO', 'rgb(0,192,255)');
		var port5 = node5.addOutPort('Out');
		node5.setPosition(100, 300);

		//3-B) create another default node
		var node2 = new DefaultNodeModel('Feed in', 'rgb(192,255,0)');
		var port2 = node2.addInPort('In');
		node2.setPosition(400, 100);

		//3-C) link the 2 nodes together
		// var link1 = port1.link(port2);

		//3-D) create an orphaned node
		var node3 = new DefaultNodeModel('Node 3', 'rgb(0,192,255)');
		node3.addOutPort('Out');
		node3.setPosition(100, 200);

		//3-E) create orphaned diamond node
		var node4 = new DiamondNodeModel('Mixer');
		node4.setPosition(200, 200);

		//4) add the models to the root graph
		model.addAll(node1, node2, node3, node4, node5);

		return model
	}

	getActiveDiagram() {  // : SRD.DiagramModel
		return this.diagramModel;
	}

	getDiagramEngine() {  // : SRD.DiagramEngine
		return this.diagramEngine;
	}
}

Application.propTypes = {
	activeModel: DiagramModel,
	diagramEngine: DiagramEngine
  };