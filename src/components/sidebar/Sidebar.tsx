import React, { useState } from 'react'
import { createContext, useContext } from "react";
import "./sidebar.scss"
import { boardsContext1 } from "../../App";

function Sidebar (){
  const { boards } = useContext(boardsContext1);

  return (
    <div className="sidebarContainer">
      <h1>All Boards</h1>

      {boards.map((board) => {
        return (
          <h3> {board.name} </h3>
          
        )
      })
      }
    </div>
  )
}

export default Sidebar;