import React from "react";
import {
  GAME_STATE_IDEL,
  GAME_STATE_player,
  GAME_STATE_WIN,
  GAME_STATE_Drow,
} from "../Constans.js";
const Header = ({gameState,currentPlayer ,winPlayer}) => {
  const renderLables =()=>{
    switch (gameState){
      case GAME_STATE_player:
      return <div>Player {currentPlayer} turn </div>
      case GAME_STATE_WIN:
        return <div> Player {winPlayer} Wins </div>
        case GAME_STATE_Drow:
          return <div> Game is a Draw! </div>
    }
  }
  return <div className="panel header">
    <div className="header-text"> {renderLables()}</div>
  </div>;
};

export default Header;
