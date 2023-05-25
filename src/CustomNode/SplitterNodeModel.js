import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "./DescriptiveNode/DesciptiveNodeModel";

export class Splitter2NodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            type: 'splitter2-node',
            nameMain: '',
            nameHighlight: 'SPLT',
            colorMain: 'grey',
            colorHighlight: 'darkgrey',
        });

        this.addPort(new DefaultPortModel({
            in: true,
            type: 'right-angle-port',
            name: 'Input',
            label: 'In',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            type: 'right-angle-port',
            name: 'Output1',
            label: '1-Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            type: 'right-angle-port',
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
            type: 'splitter4-node',
            nameMain: '',
            nameHighlight: 'SPLT',
            colorMain: 'grey',
            colorHighlight: 'darkgrey',
        });

        this.addPort(new DefaultPortModel({
            in: true,
            type: 'right-angle-port',
            name: 'Input',
            label: 'In',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            type: 'right-angle-port',
            name: 'Output1',
            label: '1-Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            type: 'right-angle-port',
            name: 'Output2',
            label: '2-Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            type: 'right-angle-port',
            name: 'Output3',
            label: '3-Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            type: 'right-angle-port',
            name: 'Output4',
            label: '4-Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}