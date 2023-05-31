import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import {
    MiniNodeModel,
    iconType,
} from '../MiniNodeModel';

export class FilterNodeModel extends MiniNodeModel {
    constructor() {
        super({
            name: '',
            nameHighlight: 'LowPass',
            unit: 'MHz',
            color: 'grey',
            colorHighlight: 'darkgrey',
        });
        this.addPort(new DefaultPortModel({
            in: true,
            name: 'Input',
            label: '',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: false,
            name: 'Output',
            label: '',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}