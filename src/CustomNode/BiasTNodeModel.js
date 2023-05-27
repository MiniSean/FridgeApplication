import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "./DescriptiveNode/DesciptiveNodeModel";

export class BiasTNodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            type: 'biast-node',
            name: '',
            nameHighlight: 'BiasT',
            color: 'grey',
            colorHighlight: 'darkgrey',
        });
        this.addPort(new DefaultPortModel({
            in: true,
            name: 'InputDC',
            label: 'DC',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            name: 'InputRF',
            label: 'RF',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'OutputBoth',
            label: 'RF + DC',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}