import React from "react";

import Square from "./square";


class Board extends React.Component {
    constructor(props){
        super(props);
    }
    
    createBoardRow = () => {
        const {row, square, size, boardLine, boardColor} = this.props;
        let rows = [];
        
        for(let j = 0; j < row; j++){            
            rows.push(
            <div className="board-row" 
                style={{width: size, fontSize: size/3}}
                key={j}><Square square={square} boardLine={boardLine} boardColor={boardColor} 
                    size={size}/></div>
                );
        }        
        return rows;
    }

    render(){
        return(
            <section className="Board">
                {this.createBoardRow()}
            </section>
        )
    }
}

export default Board;