import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import {
    MiniNodeModel,
} from '../MiniNodeModel';

export class AttenuationNodeModel extends MiniNodeModel {
    constructor() {
        super({
            name: '',
            nameHighlight: 'Att',
            unit: 'dB',
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