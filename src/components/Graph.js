import React from 'react';
//import './App.css';
import Graph from "react-graph-vis";

class Graphs extends React.Component {

    constructor(props) {
        super(props);
    }

    graph = {
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

    options = {
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

    events = {
        select: function(event) {
            var { nodes, edges } = event;
        }
    };

    style = {
        height: "800px",
        width: "100%",
        background: "lightblue"
    }

    render() {
        return (
            <div className="App">
                <Graph
                    graph={this.graph}
                    options={this.options}
                    events={this.events}
                    style={this.style}
                />
            </div>
        );
    }
}



export default Graphs;