import {NodeModel, DefaultNodeModel} from '@projectstorm/react-diagrams';

export class DescriptiveNodeModel extends DefaultNodeModel {
	constructor(props) {
		super(props, {
      name: 'New Name',
      color: 'rgb(0,192,100)'
		});
    this.addInPort('Channel-I', true);
    this.addInPort('Channel-Q', false);
    this.addInPort('DIO');
    this.addOutPort('Channel-I');
    this.addOutPort('Channel-Q');
	}
}