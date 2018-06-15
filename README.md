index.tsx is essentially an entry point into our client-side app; it binds the React components to the Html Dom.

app.tsx glues everything together - it arranges and communicates with the other components in order to present the interface to the user and allow them to interact with the application.


I.WEB PACK CONFIGURATION( webpack.config.js)

There's quite a bit in there, so let's go through it:
    -The entry key tells Webpack to start processing files using the /app/index.tsx file.

    -The output key tells Webpack where to put the output files; in the /public/js folder with the name bundle.js.

    -The devtool key, along with the source-map-loader preloader in the module section, tells Webpack to generate source maps, which will come in very handy when trying to debug your JavaScript app later.
    
    -The resolve key tells Webpack which extensions to pay attention to when resolving module.

    -The loaders section tells Webpack what middleware to use when processing modules. Here we tell it that, whenever Webpack comes across a file with a .ts or .tsx extension, it should use the ts-loader tool. This is the tool that processes a TypeScript file and turns it into regular JavaScript.

II. To get this to work, we still need to install the ts-loader and source-map-loader packages:

    npm install --save-dev ts-loader source-map-loader

We also need to install the React packages that we need:

    npm install --save-dev react react-dom
    
Next, we need install TypeScript into the project. We have already installed it globally in the first section of this article, so we can simply link it in:

npm link typescript