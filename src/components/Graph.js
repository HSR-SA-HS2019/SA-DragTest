import React from 'react';
//import './App.css';
import Graph from "vis-react";

var graph = {
    nodes: [
        { id: 1, label: 'Node 1' },
        { id: 2, label: 'Node 2' },
        { id: 3, label: 'Node 3' },
        { id: 4, label: 'Node 4' },
        { id: 5, label: 'Node 5' },
        { id: 6, label: 'Node 6' },
        { id: 7, label: 'Node 7' },
        { id: 8, label: 'Node 8' }
    ],
    edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 6, to: 1 },
        { from: 6, to: 4 },
        { from: 7, to: 8 }
    ]
};

var options = {
    autoResize: true,
    height: '100%',
    width: '100%',
    layout: {
        hierarchical: false
    },
    edges: {
        color: 'black',
        arrows: {
            to: {
                enabled: false
            }
        }
    }
};

var events = {
    select: function(event) {
        var { nodes, edges } = event;
    }
};

var style = {
    height: "800px",
    width: "100%",
    background: "lightblue"
}

function Graphs() {
    return (
        <div className="App">
            <Graph
                graph={graph}
                options={options}
                events={events}
                style={style}
            />
        </div>
    );
}

export default Graphs;