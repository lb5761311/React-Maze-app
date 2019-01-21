import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.onResize = this.onResize.bind(this);
    this.state = {
      panel: null,
      repos:false,
      pos: Array(2).fill(null),
    }
  }
  componentDidMount() {
    this.initPanel();
    window.addEventListener("resize", this.onResize);
  }
  onResize(){
    const rows = document.getElementsByClassName('row');
    var LeftTop = rows[0].children[0];
    var Pos = new Array(2);
    Pos[0] = LeftTop.offsetLeft + 1 ;
    Pos[1] = LeftTop.offsetTop + 1 ;
    this.refs.myrat.resetTopLeftPos(Pos);
  }
  initPanel() {
    const value = { top: false, left: false, bottom: false, right: false };
    const rows = document.getElementsByClassName('row');
    var LeftTop = rows[0].children[0];
    var Pos = new Array(2);
    Pos[0] = LeftTop.offsetLeft + 1 ;
    Pos[1] = LeftTop.offsetTop + 1 ;
    const mPanel = [];
    for (let row of rows) {
      const nodes = row.children;
      let eachRow = [];
      for (let node of nodes) {
        const borders = node.classList.value.split(' ').filter(className => ['top', 'left', 'right', 'bottom'].indexOf(className) !== -1)
        const borderMap = {}
        borders.forEach(line => borderMap[line] = true)
        eachRow.push(Object.assign({}, value, borderMap))
      }
      mPanel.push(eachRow);
    }
    this.setState({ 
      panel: mPanel ,
      pos:Pos,
    });
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
        <Rat id="rats" ref="myrat" pos={this.state.pos} panel={this.state.panel} />
      </div>
    );
  }
}

class Rat extends Component {
  constructor() {
    super();
    this.state = {
      pos: new Array(2).fill(null),
      initPos:new Array(2).fill(null),
      nLeft:0,
      nTop:0,
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }
  resetTopLeftPos(resetPos){
         this.setState({
             initPos: resetPos,
       });
  }
  render() {
    var currenStep_X = this.state.nLeft*22 ;
    var currenStep_Y = this.state.nTop*22;
    var X ;
    var Y ;
    if(!this.state.initPos[0]){
            X = this.props.pos[0];
            Y = this.props.pos[1];
      }else{
            X = this.state.initPos[0];
            Y =  this.state.initPos[1];
      }
      
    var nstyle = {
      left: X + currenStep_X,
      top: Y +  currenStep_Y,
    };
    return (
      <div id="rats" className="rat" style={nstyle}></div>
    );
  }
  onKeyDown = (e) => {
    var panel = this.props.panel;
    var Ntop = this.state.nTop;
    var Nleft = this.state.nLeft;
    var step = panel[Ntop][Nleft];
    switch (e.keyCode) {
      case 37:
        if (!step['left']) {
          Nleft--;
        }
        break;
      case 38: //上
        if (!step['top']) {
          Ntop--;
        }
        break;
      case 39:
        if (!step['right']) {
          if ((Ntop === 19) && (Nleft === 19)) {
            console.log("Game over");
          } else {
            Nleft++;    
          }
        }
        break;
      case 40: //下
        if(!step['bottom']){
          Ntop++;
        }
        break;
      default:
    }
    this.setState({
      nLeft: Nleft,
      nTop: Ntop,
     });
  }
}
export default App;
