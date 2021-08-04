# Webpack Workflow

This is a webpack configuration for development Websites with HTML, Handlebars, Javacript, CSS and Sass, using a live server and other features that webpack provides to other libraries and frameworks like React, Vue or Angular. 

A tipical website needs:
- CSS or Sass styles
- A template engine (like Handlebars)
- Import and install Javascript files (like npm modules)
- Custom Fonts

## Installation

Install dependencies
```
npm install
```

To start the development server
```
npm run dev
```

To build your project for production use:
```
npm run build
```

## Considerations
- the entry of our files is inside the folder: `src`
- the webpack folder is to setting webpack files for development and production
