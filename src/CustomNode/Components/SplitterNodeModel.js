import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "../DesciptiveNodeModel";

export class Splitter2NodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            // type: 'splitter2-node',
            name: '',
            nameHighlight: 'SPLT',
            color: 'grey',
            colorHighlight: 'darkgrey',
        });

        this.addPort(new DefaultPortModel({
            in: true,
            name: 'Input',
            label: 'In',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output1',
            label: '1-Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output2',
            label: '2-Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}

export class Splitter4NodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            // type: 'splitter4-node',
            nameMain: '',
            nameHighlight: 'SPLT',
            colorMain: 'grey',
            colorHighlight: 'darkgrey',
        });

        this.addPort(new DefaultPortModel({
            in: true,
            name: 'Input',
            label: 'In',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output1',
            label: '1-Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output2',
            label: '2-Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output3',
            label: '3-Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output4',
            label: '4-Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}

export class Splitter2InvertedNodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            // type: 'splitter2-inversed-node',
            name: '',
            nameHighlight: 'SPLT',
            color: 'grey',
            colorHighlight: 'darkgrey',
        });

        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output',
            label: 'Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            name: 'Input1',
            label: '1-In',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            name: 'Input2',
            label: '2-In',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}

export class Splitter4InvertedNodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            // type: 'splitter4-inverted-node',
            nameMain: '',
            nameHighlight: 'SPLT',
            colorMain: 'grey',
            colorHighlight: 'darkgrey',
        });

        this.addPort(new DefaultPortModel({
            in: true,
            name: 'Output',
            label: 'Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            name: 'Input1',
            label: '1-In',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            name: 'Input2',
            label: '2-In',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            name: 'Input3',
            label: '3-In',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            name: 'Input4',
            label: '4-In',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}