import React, { useState } from 'react'
import { createContext, useContext } from "react";
import "./sidebar.scss"
import { boardsContext1 } from "../../App";
import boardIcon from "../../assets/icon-board.svg";


function Sidebar (){
  const { boards } = useContext(boardsContext1);

  return (
    <div className="sidebarContainer sidebarContainer-sizes">
      <h4 className="sidebarTitle" >All Boards</h4>

      {boards.map((board) => {
        return (
          <div className="optionContainer">
            <label aria-label="Silver">
              <img src={boardIcon} alt="icon-board" />
              <input type="radio" name="board" id={board.name} value={board.name}/>
              {board.name}
            </label>   
          </div>

          
        )
      })
      }
    </div>
  )
}

export default Sidebar;