import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "../DesciptiveNodeModel";

export class TransmonNodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            type: 'transmon-node',
            name: 'Transmon Interface',
            nameHighlight: 'Q',
            color: 'rgb(199, 44, 196)',
            colorHighlight: 'rgb(197, 90, 224)',
        });

        this.addPort(new DefaultPortModel({
            in: true,
            name: 'InputDrive',
            label: 'Drive',
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            name: 'InputFlux',
            label: 'Flux-bias',
            canLinkPort: true,
        }));
    }
}