import React, { useState } from 'react'
import { createContext, useContext } from "react";
import { boardsContext1 } from "../../App";
import column from "../column/";


import "./board.scss"
import Column from '../column/column';

function Board (){
  const { boards } = useContext(boardsContext1);

  return (
    <div className="boardContainer">
      <h1>This is the board</h1>

      {
        boards[0].columns.map((item => {
          return (
            <div>
              <Column key={item.name} name={item.name} boardNumber={0} columnNumber={0} />
            </div>
)
        }))
      }

    </div>
  )
}

export default Board;