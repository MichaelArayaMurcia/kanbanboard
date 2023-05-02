import React, { useState } from 'react'
import { createContext, useContext } from "react";
import { boardsContext1 } from "../../App";

import "./board.scss"

function Board (){
  const { boards } = useContext(boardsContext1);

  return (
    <div className="boardContainer">
      <h1>This is the board</h1>

      {
        boards[0].columns.map((column => {
          return (
            <h1> {column.name} </h1>
          )
        }))
      }

    </div>
  )
}

export default Board;