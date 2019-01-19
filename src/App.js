import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      panel :null,
      Nleft:0,
      Ntop:0,
      Nright:0,
      Nbottom:0,
      pos:Array(2).fill(null),
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.onKeyDown);
    this.initPanel();
  }
  onKeyDown =(e)=>{
    const panel = this.state.panel;
    const Ntop = this.state.Ntop;
    const Nleft = this.state.Nleft;
    var step =panel[Ntop][Nleft];
    switch(e.keyCode){
      case 37:
        console.log('left');
      //  console.log(this.state.panel);
        break;
      case 39:
        
      default:
      console.log('----------------');
    }
  }
  initPanel(){
    console.log("init Row");
    const value = {top:false, left:false, bottom:false, right:false};
    const rows = document.getElementsByClassName('row');
    const rat = document.getElementById("rats");
    var LeftTop = rows[0].children[0];
    var Pos = new Array();
    Pos[0] = LeftTop.offsetLeft + 1 + "px"; 
    Pos[1] = LeftTop.offsetTop + 1 + "px";
    this.setState({
      pos:Pos,
    });
    const mPanel = [];
    //console.log(rows);
    for(let row of rows) {
      const nodes = row.children;
      let eachRow = [];
      for (let node of nodes) {
        const borders = node.classList.value.split(' ').filter(className => ['top', 'left', 'right', 'bottom'].indexOf(className) !== -1)
        const borderMap = {}
        borders.forEach(line => borderMap[line] = true)
        eachRow.push(Object.assign({}, value, borderMap))
      }
      mPanel.push(eachRow);
     // console.log(eachRow);
    }
    this.setState({panel:mPanel});
  //  console.log(mPanel);
  
    
  }
  render() {
    return (
      <div>
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
        <Rat id="rats"pos={this.state.pos}/>
      </div>
    );
  }
}

class Rat extends Component {
  constructor(){
    super();
    this.state={
      X:10,
      Y:0,
    }
  }
 
  render(){

    var nstyle ={
      left:this.props.pos[0],
       top:this.props.pos[1],
    };
    return(
      <div id="rats" className="rat" style={nstyle}></div>
    );
  }
}
export default App;
