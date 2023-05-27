import { BiasTNodeModel } from './Components/BiasTNodeModel';
import { UHFNodeModel } from './Components/UHFNodeModel';
import { Splitter2NodeModel, Splitter4NodeModel } from './Components/SplitterNodeModel';
import { MixerNodeModel } from './Components/MixerNodeModel';
import { LONodeModel } from './Components/LONodeModel';
import { HDAWGNodeModel } from './Components/HDAWGNodeModel';
import { FeedlineNodeModel } from './Components/FeedlineNodeModel';
import { RefDistributorNodeModel } from './Components/RefDistributorNodeModel';
import { S4gNodeModel } from './Components/S4gNodeModel';
import { TransmonNodeModel } from './Components/TransmonNodeModel';

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
  