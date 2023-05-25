import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "./DescriptiveNode/DesciptiveNodeModel";

export class LONodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            type: 'lo-node',
            nameMain: '',
            nameHighlight: 'LO',
            colorMain: 'blue',
            colorHighlight: 'lightblue',
        });

        this.addPort(new DefaultPortModel({
            in: true,
            type: 'right-angle-port',
            name: 'InputRef',
            label: 'Ref',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            type: 'right-angle-port',
            name: 'OutputRef',
            label: 'Ref',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            type: 'right-angle-port',
            name: 'OutputRF',
            label: 'RF',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}