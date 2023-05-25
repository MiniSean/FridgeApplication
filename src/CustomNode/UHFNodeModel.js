import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "./DescriptiveNode/DesciptiveNodeModel";

export class UHFNodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            type: 'uhf-node',
            nameMain: '',
            nameHighlight: 'UHF',
            colorMain: 'blue',
            colorHighlight: 'rgba(233, 153, 38, 1)',
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
            name: 'InputI',
            label: 'I-in',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            type: 'right-angle-port',
            name: 'InputQ',
            label: 'Q-in',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            type: 'right-angle-port',
            name: 'OutputI',
            label: 'I-out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            type: 'right-angle-port',
            name: 'OutputQ',
            label: 'Q-out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}