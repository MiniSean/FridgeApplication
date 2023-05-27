import './App.css';
import * as React from 'react';
import { BodyContent } from './Widgets/ApplicationUI';
import { Application } from './Widgets/ApplicationWidget';

export default () => {
	var app = new Application();
	return <BodyContent app={app} />;
};