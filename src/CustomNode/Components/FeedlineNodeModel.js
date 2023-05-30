import {
    DefaultPortModel,
} from '@projectstorm/react-diagrams';
import { 
    DescriptiveNodeModel,
} from "../DesciptiveNodeModel";

export class FeedlineNodeModel extends DescriptiveNodeModel {
    constructor() {
        super({
            // type: 'feedline-node',
            name: '',
            nameHighlight: 'FL',
            color: 'grey',
            colorHighlight: 'darkgrey',
        });

        this.addPort(new DefaultPortModel({
            in: true,
            name: 'OutputFeedline',
            label: 'Out',
            maximumLinks: 1,
            canLinkPort: true,
        }));
        this.addPort(new DefaultPortModel({
            in: true,
            name: 'InputFeedline',
            label: 'In',
            maximumLinks: 1,
            canLinkPort: true,
        }));
    }
}