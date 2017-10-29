let { circle, jointLine } = require('./worldElements')
module.exports = class Graph {
    constructor(vertexCount) {
        this.mat = Array.from(Array(vertexCount).keys())
            .map(y => Array(vertexCount).fill(0))
    }

    static random(vertexCount, edgeChance) {
        const graph = new Graph(vertexCount)
        for (let i = 0; i < vertexCount; i++) {
            for (let j = i + 1; j < vertexCount; j++) {
                if (Math.random() <= edgeChance) graph.addEdge(i, j)
            }
        }
        return graph
    }

    addEdge(a, b) {
        this.mat[a][b] = 1
        this.mat[b][a] = 1
    }

    spawn() {
        let index = 0
        const circles = []
        for (let i = 0; i < Math.PI * 2; i += Math.PI * 2 / this.mat.length) {
            const x = (Math.sin(i) * 1.3) + 0
            const y = (Math.cos(i) * 1.3) + 2
            circles.push(new circle([x, y], 0.1, '#ff0000', ++index))
        }
        for (const [a, b] of this.edges()) {

            new jointLine([circles[a].body, circles[b].body], 2, 0.1, 1 , 0.01, '#ffffff')

            // var djd = new b2DistanceJointDef;
            // djd.bodyA = circles[a].body;
            // djd.bodyB = circles[b].body;
            // djd.frequencyHz = 2;
            // djd.dampingRatio = 0.1;
            // djd.length = 1
            // world.CreateJoint(djd)
        }

    }
    edges() {
        const result = []
        for (let i = 0; i < this.mat.length; i++) {
            for (let j = i + 1; j < this.mat.length; j++) {
                if (this.mat[i][j] === 1) result.push([i, j])
            }
        }
        return result
    }

}
