import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "./DescriptiveNode/DesciptiveNodeModel";

export class S4gNodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            type: 's4g-node',
            name: 'S4g Module',
            nameHighlight: 'S4G',
            color: 'grey',
            colorHighlight: 'darkgrey',
        });

        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output1',
            label: 'Channel 1',
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output2',
            label: 'Channel 2',
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output3',
            label: 'Channel 3',
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output4',
            label: 'Channel 4',
            canLinkPort: true,
        }));
    }
}