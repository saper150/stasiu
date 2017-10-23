//const { Graph } = require('./graph.js')
const Graph = require('./graph.js')
const UItable = require('./UItables.js')
require('handsontable/dist/handsontable.full.css')

let table, graph
graph = Graph.random(8, 0.5)
console.log(graph)
table = new UItable('AdjTable', graph.mat)
document.getElementById('buttonCreateAdjTable').onclick = () => table.createTable()
document.getElementById('buttonDeleteAdjTable').onclick = () => table.deleteTable()