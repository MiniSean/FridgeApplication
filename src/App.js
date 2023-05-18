import './App.css';
import * as React from 'react';
import { BodyWidget } from './Widgets/DragAndDropMenu/BodyWidget';
import { BodyContent } from './ExploratoryUI/FunctionalUI1';
import { Application } from './Widgets/ApplicationWidget';

export default () => {
	var app = new Application();
	return <BodyContent app={app} />;
};