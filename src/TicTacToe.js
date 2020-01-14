import React, {Fragment} from 'react';
// import logo from './logo.svg';

import Board from "./components/board";
import Menu from "./components/options";

class TicTacToe extends React.Component {
  constructor(props){
    super(props);
    this.row = 3;
    this.square = 3;
    this.state = {
      boardSize: 300,
      boardLine: 4,
      boardColor: "#717171",
      mark: "",
      colorMark: ""
    }
  }



  clickTurn(e) {        
    document.querySelectorAll(".Square").forEach((e)=>{
        e.onclick = () => {
          if(e.innerHTML == "") {
            this.state.mark == "O" 
              ? this.setState({mark: "X", colorMark: "#50c322"}) : this.setState({mark: "O", colorMark: "#e05252"});                
              e.innerHTML = this.state.mark;
              e.style.color = this.state.colorMark;
          }
        };            
    });
  }

  gameValidation(){

  }

  componentDidMount(){
    this.clickTurn();
  }

  render() {
    const {boardSize, boardLine, boardColor} = this.state;
    return(
      <main className="Game">
        <Menu />
        <Board row={this.row} square={this.square} size={boardSize}
          boardColor={boardColor}
          boardLine={boardLine} />
      </main>
    );
  }
}

export default TicTacToe;
