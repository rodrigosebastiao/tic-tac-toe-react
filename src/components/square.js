import React from "react";


class Square extends React.Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount() {
       
    }    

    createSquares = () => {
        const {square, boardLine, boardColor, size} = this.props;
        let squares = [];

        for(let i = 0; i < square; i++){
            squares.push(<li className="Square" key={i} 
                style={{borderWidth: boardLine, height: size/3, borderColor: boardColor,
                    marginTop: -boardLine, marginLeft: -boardLine }} />);
        }        
        return squares;
    }

    render(){
        return(
            this.createSquares()
        );
    } 
}

export default Square;