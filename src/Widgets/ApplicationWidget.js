import createEngine, {
  DefaultDiagramState,
  DefaultNodeModel,
  DefaultPortModel,
  DiagramModel,
  DiagramEngine,
  PortModelAlignment,
  PathFindingLinkFactory,
  RightAngleLinkFactory,
} from '@projectstorm/react-diagrams';
// import the custom models
import { DiamondNodeModel } from '.././CustomNode/DiamondNodeModel';
import { DiamondNodeFactory } from '.././CustomNode/DiamondNodeFactory';
import { SimplePortFactory } from '.././CustomNode/SimplePortFactory';
import { DiamondPortModel } from '.././CustomNode/DiamondPortModel';
import { CustomNodeModel, CustomNodeFactory } from '../CustomNode/DescriptiveNode/DesciptiveNodeModel';

export class Application {
	diagramModel;
	diagramEngine;
	pathFinding;

	constructor() {
		this.diagramEngine = this.getEngine();  // SRD.default();
		
		// ############################################ MAGIC HAPPENS HERE
		const state = this.diagramEngine.getStateMachine().getCurrentState();
		if (state instanceof DefaultDiagramState) {
			state.dragNewLink.config.allowLooseLinks = false;
		}
		// Smart link routing
		this.pathfinding = this.diagramEngine.getLinkFactories().getFactory<PathFindingLinkFactory>(PathFindingLinkFactory.NAME);
		// ############################################ MAGIC HAPPENS HERE

		this.diagramModel = this.getModel();
		
  		//5) load model into engine
		this.diagramEngine.setModel(this.diagramModel);
	}

	getEngine() {
		//1) setup the diagram engine
		var engine = createEngine();
		// var engine = new DiagramEngine();

		// register other factories as well
		engine.getPortFactories().registerFactory(new SimplePortFactory('diamond', (config) => new DiamondPortModel(PortModelAlignment.LEFT)));
		engine.getNodeFactories().registerFactory(new DiamondNodeFactory());
		// Smart link routing
		// const pathfinding = engine.getLinkFactories().getFactory<PathFindingLinkFactory>(PathFindingLinkFactory.NAME);
		// Right angle link factory
		engine.getLinkFactories().registerFactory(new RightAngleLinkFactory(), 'right-angle-link');
		// Custom node factory
		engine.getNodeFactories().registerFactory(new CustomNodeFactory());

		return engine;
	}

	getModel() {
		var model = new DiagramModel();
		model.setGridSize(25);

		// //3-A) create a default node
		// var node1 = new DefaultNodeModel('UHFQC', 'rgb(0,192,255)');
		// var port1 = node1.addOutPort('Out');
		// node1.setPosition(100, 100);

		// var node5 = new DefaultNodeModel('LO', 'rgb(0,192,255)');
		// var port5 = node5.addOutPort('Out');
		// node5.setPosition(100, 300);

		// //3-B) create another default node
		// var node2 = new DefaultNodeModel('Feed in', 'rgb(192,255,0)');
		// var port2 = node2.addInPort('In');
		// node2.setPosition(400, 100);

		// //3-C) link the 2 nodes together
		// var link1 = port1.link(port2, this.pathFinding);

		// //3-D) create an orphaned node
		// var node3 = new DefaultNodeModel('Node 3', 'rgb(0,192,255)');
		// // node3.addPort(new RightAnglePortModel(true, 'in-1', 'In'));
		// node3.addOutPort('I')
		// node3.addOutPort('Q')
		// node3.setPosition(100, 200);

		// //3-E) create orphaned diamond node
		// var node4 = new DiamondNodeModel('Mixer');
		// node4.setPosition(200, 200);

		// var node6 = new CustomNodeModel('NodeName');
		// node6.setPosition(400, 200)

		// //4) add the models to the root graph
		// model.addAll(node1, node2, node3, node4, node5, node6, link1);

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