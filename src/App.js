import React from 'react';
import ReactDOM from 'react-dom';
//import './App.css';
import Graphs from "./components/Graph";
import Board from "./components/Board";
import Card from "./components/Card";
import List from "./components/List";



function App() {


  return (
    <div className="App">
      <main className="flexbox">

        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable='true'>
            <p>card-one</p>
          </Card>
        </Board>

        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable='true'>
            <p>card-two</p>
          </Card>
          <Card id="card-3" className="card" draggable='true'>
            <p>card-three</p>
          </Card>
          <Card id="card-4" className="card" draggable='true'>
            <p>card-four</p>
          </Card>
        </Board>

        <List></List>

      </main>

    </div>
  );
}

export default App;
