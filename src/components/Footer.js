import React from 'react'
import {

  GAME_STATE_player,

} from "../Constans.js";
const Footer = ({onNewGameClick,onSuggestClick,gameState}) => {

  const renderButtonClick=()=>{
if (gameState=== GAME_STATE_player){
  return <button  onClick={onSuggestClick} >Suggest</button>
}
else{
  return <button onClick={onNewGameClick}>New Game</button>
}
  }
  return (
    <div className="panel footer">
  {renderButtonClick()}
      
    </div>
  )
}

export default Footer
