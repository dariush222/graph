var express = require('express');
var router = express.Router();

var graph = {
    "nodes": [
        {"name":"n00","x": 469, "y": 410},
        {"name":"n01","x": 493, "y": 364},
        {"name":"n02","x": 442, "y": 365},
        {"name":"n03","x": 467, "y": 314},
        {"name":"n04","x": 477, "y": 248},
        {"name":"n05","x": 425, "y": 207},
        {"name":"n06","x": 402, "y": 155},
        {"name":"n07","x": 369, "y": 196},
        {"name":"n08","x": 350, "y": 148},
        {"name":"n09","x": 539, "y": 222},
        {"name":"n10","x": 594, "y": 235},
        {"name":"n11","x": 582, "y": 185},
        {"name":"n12","x": 633, "y": 200}
    ],
    "links": [
        {"source":  0, "target":  1},
        {"source":  0, "target":  2},
        {"source":  0, "target":  3},
        {"source":  0, "target":  4},
        {"source":  0, "target":  11},
        {"source":  4, "target":  5},
        {"source":  4, "target":  9},
        {"source":  4, "target":  11},
        {"source":  3, "target":  5},
        {"source":  9, "target":  5},
        {"source":  9, "target":  6},
        {"source":  1, "target":  12},
        {"source":  11, "target":  12},
        {"source":  8, "target": 2},
        {"source":  1, "target": 10},
        {"source": 0, "target": 8},
        {"source": 3, "target": 8},
        {"source": 7, "target": 11},
        {"source": 6, "target": 7},
        {"source": 2, "target": 1},
        {"source": 12, "target": 7}
    ]
};

router.get('/', function(req, res, next) {
	res.render('index', { /*layout: false ,*/ title: 'D3' , grph: JSON.stringify(graph)});
});
router.post('/getsubgraph', function(req, res){
    var graph1 = {
        "nodes": [
        ],
        "links": [
        ]
    };

    var nn = req.body.nodename;
    var nindex = 0;
    for (var i=0;i<graph.nodes.length;i++){
        graph1.nodes.push(graph.nodes[i]);
        if (nn===graph.nodes[i].name)
        nindex = i;
    }
    for (var i=0;i<graph.links.length;i++){
        var ii = -1;
        if (graph.links[i].source === nindex ||graph.links[i].target === nindex )
            graph1.links.push(graph.links[i]);
    }
            res.send(graph1);

});
router.post('/getwholegraph', function(req, res){
    res.send(graph);

});

module.exports = router;

