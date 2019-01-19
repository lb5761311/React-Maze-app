import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount(){
    document.addEventListener("keydown", this.onKeyDown);
    this.initRow();
  }
  onKeyDown =(e)=>{
    switch(e.keyCode){
      case 37:
        console.log('left');
        break;
      default:
      console.log('----------------');
    }
  }
  initRow(){
    console.log("init Row");
    const value = {top:false, left:false, bottom:false, right:false};
    const panel = [];
    const rows = document.getElementsByClassName('row');
    const rat = document.getElementById("rats");
    //console.log(rows);
    for(let row of rows) {
      const nodes = row.children;
      let eachRow = [];
      for (let node of nodes) {
        const borders = node.classList.value.split(' ').filter(className => ['top', 'left', 'right', 'bottom'].indexOf(className) != -1)
        const borderMap = {}
        borders.forEach(line => borderMap[line] = true)
        eachRow.push(Object.assign({}, value, borderMap))
      }
      panel.push(eachRow);
      console.log(eachRow);
    }
  }
  render() {
    return (
      <div>
        <div id="rats" className="rat"></div>
        <div id="cells">
          <div className="row">
            <div className="top cell"></div>
            <div className="top bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top cell"></div>
            <div className="top cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="top left right cell"></div>
          </div>
          <div className="row">
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="left right cell"></div>
            <div className="left cell"></div>
            <div className="top right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom right cell"></div>
            <div className="left cell"></div>
            <div className="top right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
          </div>
          <div className="row">
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="top left cell"></div>
            <div className="right cell"></div>
            <div className="top left right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="left right cell"></div>
            <div className="bottom left right cell"></div>
            <div className="bottom left cell"></div>
            <div className="bottom right cell"></div>
          </div>
          <div className="row">
            <div className="bottom left right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="bottom left cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top right cell"></div>
            <div className="bottom left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="top cell"></div>
            <div className="top right cell"></div>
          </div>
          <div className="row">
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="top left right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom cell"></div>
            <div className="top bottom right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
          </div>
          <div className="row">
            <div className="left right cell"></div>
            <div className="top bottom left cell"></div>
            <div className="bottom cell"></div>
            <div className="top right cell"></div>
            <div className="left right cell"></div>
            <div className="bottom left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="bottom left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
          </div>
          <div className="row">
            <div className="left right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="top left right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom cell"></div>
            <div className="top right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom right cell"></div>
            <div className="top bottom left cell"></div>
            <div className="top cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="top left cell"></div>
            <div className="right cell"></div>
          </div>
          <div className="row">
            <div className="bottom left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="top left cell"></div>
            <div className="right cell"></div>
            <div className="top left cell"></div>
            <div className="top right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
          </div>
          <div className="row">
            <div className="top bottom left cell"></div>
            <div className="top right cell"></div>
            <div className="left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="bottom left cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="bottom left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="bottom left right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="bottom left right cell"></div>
          </div>
          <div className="row">
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="bottom left right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="top bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top right cell"></div>
          </div>
          <div className="row">
            <div className="left right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="right cell"></div>
          </div>
          <div className="row">
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="right cell"></div>
          </div>
          <div className="row">
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="top right cell"></div>
            <div className="left cell"></div>
            <div className="top right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="top left right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top right cell"></div>
            <div className="top left cell"></div>
            <div className="right cell"></div>
          </div>
          <div className="row">
            <div className="left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top bottom left cell"></div>
            <div className="bottom right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top right cell"></div>
            <div className="bottom left right cell"></div>
            <div className="left right cell"></div>
            <div className="bottom left right cell"></div>
            <div className="left right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="top bottom left cell"></div>
            <div className="top right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
          </div>
          <div className="row">
            <div className="left right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="bottom left right cell"></div>
          </div>
          <div className="row">
            <div className="bottom left right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="left right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="top right cell"></div>
            <div className="left right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top right cell"></div>
          </div>
          <div className="row">
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="bottom left right cell"></div>
            <div className="left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top bottom left cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="top left right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom right cell"></div>
            <div className="left right cell"></div>
          </div>
          <div className="row">
            <div className="left right cell"></div>
            <div className="top bottom left cell"></div>
            <div className="right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="right cell"></div>
            <div className="bottom left right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="left right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
          </div>
          <div className="row">
            <div className="left cell"></div>
            <div className="top right cell"></div>
            <div className="bottom left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="left right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top left cell"></div>
            <div className="bottom right cell"></div>
            <div className="bottom left right cell"></div>
            <div className="left right cell"></div>
            <div className="bottom left cell"></div>
            <div className="bottom right cell"></div>
            <div className="top left right cell"></div>
          </div>
          <div className="row">
            <div className="bottom left right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom right cell"></div>
            <div className="bottom left cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="top bottom cell"></div>
            <div className="bottom cell"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
