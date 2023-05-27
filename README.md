# FridgeApplication
A complete tool for building and maintaining hardware configurations in the context of experimental setups.
![](.gitbook/assets/TitleScreen.png)

# Disclaimer
This project is heavily inspired by ![react-diagrams](https://github.com/projectstorm/react-diagrams/tree/master). A modern flow & process orientated diagramming library inspired by **Blender** and **Unreal engine**. Be sure to check their repository.

# Getting started
Pre:-requisities:
- Node 14.17.5 or higher
- Git
- (Adviced IDE) WebStorm or Visual studio code

To execute the application, navigate to the project root and run:
```bash
npm install  # Optional if npm is not installed yet.
npm start  # Start application (will run in localhost)
```
This creates a live image of the application.
In order to update changes to the code, simply run `rs` in the terminal.

# How to use
Here is the application layout with intended purpose:
![](.gitbook/assets/Example3.png)
Each new component can be dragged into the workspace and given a name:
![](.gitbook/assets/Example2.gif)
Different components can be linked together to indicate the flow of information:
![](.gitbook/assets/Example3.gif)

# Project goals
1. Easy to use documentation tool for physical hardware implementations. 
2. Supports version control and visualization.
3. Supports export to various formats compatible with for example PycQED and Quantify.
