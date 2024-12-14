import React, { useEffect, useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import Header from "./Header";
import Footer from "./Footer";
import { helper, isDraw ,getComputerMove} from "../helper";
import {
  NO_PLAYER,
  PLAYER_1,
  PLAYER_2,
  nocircle,
  GAME_STATE_IDEL,
  GAME_STATE_player,
  GAME_STATE_WIN,
  GAME_STATE_Drow,
} from "../Constans.js";
const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setcurrentPlayer] = useState(PLAYER_1);
  const [gameState, setgameState] = useState(GAME_STATE_player);
  const [winPlayer,setWinPlayer]=useState(NO_PLAYER)
  console.log(gameBoard);

useEffect(()=>{
initGame()
},[])

const initGame=()=>{
  console.log('init game')
  setGameBoard(Array(16).fill(NO_PLAYER))
  setcurrentPlayer(PLAYER_1)
  setgameState(GAME_STATE_player)
}

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < nocircle; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };


  const suggestMove=()=>{
circleClicked(getComputerMove(gameBoard))
  }


  const circleClicked = (id) => {
    console.log("circle clicked" + id);
if (gameBoard[id] !==NO_PLAYER)return;
if (gameState !==GAME_STATE_player) return;
    // const board= [...gameBoard];
    // board[id]=currentPlayer;
    // gameBoard[id] = currentPlayer;
    // setGameBoard(board);
    if (helper(gameBoard, id, currentPlayer)) {
      setgameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer)
    }

    if (isDraw(gameBoard, currentPlayer, id)) {
      setgameState(GAME_STATE_Drow);
      setWinPlayer(NO_PLAYER);
    }
    

    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });
    setcurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

    console.log(gameBoard);
    console.log(currentPlayer);
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        id={id}
        key={id}
        className={`player_${gameBoard[id]}`}
        oncircleClicked={circleClicked}
      />
    );
  };

  return (
    <>
      <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer} />
      <div className='game-board'>{initBoard()}</div>
      <Footer onNewGameClick={initGame} onSuggestClick={suggestMove}  gameState={gameState}/>
    </>
  );
};

export default GameBoard;
