import React,{useState} from 'react';
import './App.css';


function Task4() {
    const initial= ['','','','','','','','',''];
    var combi=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    var j=0;
  
    const [board, setBoard] = useState([...initial])
    const [player, setPlayer] = useState('x')
    
    const changePlayer = (index) =>{
    if(board[index] !== '') return;
        setBoard(board => {
         return board.map((val,i) =>{
        if(i === index) return player;
        return val;
      });
     })

     setPlayer(player === 'x' ? 'o' : 'x')

     checkwin()

    }
  
const resetBoard = () => {
        setBoard([...initial])
        setPlayer('x')
    }

function checkwin(){
    for(var i=0;i<=combi.length-1;i++){
        if(((board[combi[i][j]]=== "x")&&(board[combi[i][j+1]]=== "x")&&
        (board[combi[i][j+2]]=== "x"))){
       
           alert("x is winner")
           resetBoard()
        }else
        if(((board[combi[i][j]]=== "o")&&(board[combi[i][j+1]]=== "o")&&
        (board[combi[i][j+2]]=== "o"))){
       
           alert("o is winner")
           resetBoard()
        }
    }
}

    return (
        <div>
            <h3>Current Player is : <span className='player'>{player}</span></h3>
        <div className='board'>
            {
                board.map((box,i) => {
                    return <div className='board-tiles' onClick={() =>changePlayer(i)}>{box}</div>
                })
            }
        </div>
        <button className='btn' onClick={() => resetBoard()}>Reset Game</button>
        </div>
    )
}

export default Task4