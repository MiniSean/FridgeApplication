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
            name: '',
            nameHighlight: 'LO',
            color: 'blue',
            colorHighlight: 'rgb(60, 126, 232)',
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
            name: 'OutputRef',
            label: 'Ref',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'OutputRF',
            label: 'RF',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}