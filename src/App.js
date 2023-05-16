import './App.css';
import * as React from 'react';
import { BodyWidget } from './Widgets/DragAndDropMenu/BodyWidget';
import { Application } from './Widgets/ApplicationWidget';

export default () => {
	var app = new Application();
	return <BodyWidget app={app} />;
};