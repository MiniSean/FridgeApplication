import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "../DesciptiveNodeModel";

export class RefDistributorNodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            // type: 'refdist-node',
            name: 'Reference Distribution Module',
            nameHighlight: 'RDM',
            color: 'gray',
            colorHighlight: 'darkgrey',
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
            canLinkPort: true,
        }));
    }
}