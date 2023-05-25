import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
    DescriptiveNodeWidget,
    DescriptiveNodeFactory,
} from "./DescriptiveNode/DesciptiveNodeModel";

export class BiasTNodeModel extends DescriptiveNodeModel {
    constructor(name) {
        super({
            type: 'biast-node',
            name: name,
            color: 'green',
        });
        this.addPort(new DefaultPortModel({
            in: true,
            type: 'right-angle-port',
            name: 'InputDC',
            label: 'DC',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            type: 'right-angle-port',
            name: 'InputRF',
            label: 'RF',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            type: 'right-angle-port',
            name: 'OutputBoth',
            label: 'RF + DC',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}