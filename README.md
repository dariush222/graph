# graph representation and traverse using express and d3

This project is an application skeleton for a typical [D3](https://d3js.org//) web app to represent and travrse a graph.

## How does it work

This simple app loads a graph from the server. you may click on every node and it shows a graph containing the node and connected nodes.
I have used jquery ajax calls to retrieve data from the server.
Next version will work with a graph database like orientdb or neo4j


### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

You should find that you have a new folder in your project.

* `node_modules` - contains the npm packages for the tools we need


### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:3000/`.

## Contact

For more information on D3 please check out http://d3js.org/

[git]: http://git-scm.com/
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org/
[express]: https://expressjs.com/
