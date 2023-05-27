import createEngine, {
  DefaultDiagramState,
  DiagramModel,
  DiagramEngine,
  PathFindingLinkFactory,
  RightAngleLinkFactory,
} from '@projectstorm/react-diagrams';
// import the custom models
import { DescriptiveNodeFactory } from '../CustomNode/DesciptiveNodeModel';

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

		// Custom link factories
		engine.getLinkFactories().registerFactory(new RightAngleLinkFactory(), 'right-angle-link');
		// Custom node factories
		engine.getNodeFactories().registerFactory(new DescriptiveNodeFactory());

		return engine;
	}

	getModel() {
		var model = new DiagramModel();
		model.setGridSize(25);
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