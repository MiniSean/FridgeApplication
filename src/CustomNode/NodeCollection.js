import { BiasTNodeModel } from './BiasTNodeModel';
import { UHFNodeModel } from './UHFNodeModel';
import { Splitter2NodeModel, Splitter4NodeModel } from './SplitterNodeModel';
import { MixerNodeModel } from './MixerNodeModel';
import { LONodeModel } from './LONodeModel';
import { HDAWGNodeModel } from './HDAWGNodeModel';
import { FeedlineNodeModel } from './FeedlineNodeModel';
import { RefDistributorNodeModel } from './RefDistributorNodeModel';
import { S4gNodeModel } from './S4gNodeModel';
import { TransmonNodeModel } from './TransmonNodeModel';

export class Collection {
    constructor() {
        this.nodes = []; // Array to store NodeModel classes

        this.addNode(UHFNodeModel);
        this.addNode(LONodeModel);
        this.addNode(HDAWGNodeModel);
        this.addNode(MixerNodeModel);
        this.addNode(Splitter2NodeModel);
        this.addNode(Splitter4NodeModel);
        this.addNode(BiasTNodeModel);
        this.addNode(FeedlineNodeModel);
        this.addNode(RefDistributorNodeModel);
        this.addNode(S4gNodeModel);
        this.addNode(TransmonNodeModel);
        // Add more NodeModel classes as needed
    }

    addNode(nodeClass) {
        this.nodes.push(nodeClass);
    }
}
  