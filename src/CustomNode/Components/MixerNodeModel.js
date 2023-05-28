import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "../DesciptiveNodeModel";
import { MyCustomPortModel } from '../DescriptivePortModel';

export class MixerNodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            type: 'mixer-node',
            name: '',
            nameHighlight: 'MXR',
            color: 'grey',
            colorHighlight: 'darkgrey',
        });

        this.addPort(new MyCustomPortModel({
            in: true,
            name: 'InputLO',
            label: 'LO',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            name: 'InputI',
            label: 'I',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            name: 'InputQ',
            label: 'Q',
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