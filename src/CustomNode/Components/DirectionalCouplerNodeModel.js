import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "../DesciptiveNodeModel";

export class DirectionalCouplerNodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            // type: 'directionalcoupler-node',
            name: '',
            nameHighlight: 'DIR',
            color: 'grey',
            colorHighlight: 'royalblue',
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
            label: 'Main-Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output2',
            label: 'Side-Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}