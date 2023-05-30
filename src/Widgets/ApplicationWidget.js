import createEngine, {
  DefaultDiagramState,
  DiagramModel,
  DiagramEngine,
  PathFindingLinkFactory,
  RightAngleLinkFactory,
} from '@projectstorm/react-diagrams';
// import the custom models
import { DescriptiveNodeFactory } from '../CustomNode/DesciptiveNodeModel';
import { MyCustomPortFactory } from '../CustomNode/DescriptivePortModel';
import { MiniNodeFactory } from '../CustomNode/MiniNodeModel';

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

		this.diagramModel = Application.getModel();
		
  		//5) load model into engine
		this.diagramEngine.setModel(this.diagramModel);
	}

	getEngine() {
		//1) setup the diagram engine
		var engine = createEngine();

		// Custom link factories
		engine.getLinkFactories().registerFactory(new RightAngleLinkFactory(), 'right-angle-link');
		// Custom node factories
		engine.getNodeFactories().registerFactory(new DescriptiveNodeFactory());
		engine.getNodeFactories().registerFactory(new MiniNodeFactory());
		// Custom port factories
		engine.getPortFactories().registerFactory(new MyCustomPortFactory(), 'my.custom.port');

		return engine;
	}

	static getModel() {
		var model = new DiagramModel();
		model.setGridSize(25);
		model.setOffset(13, 13);
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