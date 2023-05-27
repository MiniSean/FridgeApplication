import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "../DesciptiveNodeModel";

export class HDAWGNodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            type: 'hdawg-node',
            name: '',
            nameHighlight: 'HDAWG',
            color: 'blue',
            colorHighlight: 'rgba(233, 153, 38, 1)',
        });

        this.addPort(new DefaultPortModel({
            in: true,
            name: 'InputRef',
            label: 'Ref',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output1',
            label: '1',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output2',
            label: '2',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output3',
            label: '3',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output4',
            label: '4',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output5',
            label: '5',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output6',
            label: '6',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output7',
            label: '7',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output8',
            label: '8',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}