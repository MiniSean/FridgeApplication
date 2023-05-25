import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "./DescriptiveNode/DesciptiveNodeModel";

export class MixerNodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            type: 'mixer-node',
            nameMain: '',
            nameHighlight: 'MXR',
            colorMain: 'grey',
            colorHighlight: 'darkgrey',
        });

        this.addPort(new DefaultPortModel({
            in: true,
            type: 'right-angle-port',
            name: 'InputLO',
            label: 'LO',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            type: 'right-angle-port',
            name: 'InputI',
            label: 'I',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            type: 'right-angle-port',
            name: 'InputQ',
            label: 'Q',
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