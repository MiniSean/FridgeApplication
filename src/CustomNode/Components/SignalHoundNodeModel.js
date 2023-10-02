import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "../DesciptiveNodeModel";

export class SignalHoundNodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            // type: 'signalhound-node',
            name: '',
            nameHighlight: 'SH',
            color: 'grey',
            colorHighlight: 'seagreen',
        });

        this.addPort(new DefaultPortModel({
            in: true,
            name: 'Input',
            label: 'In',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}