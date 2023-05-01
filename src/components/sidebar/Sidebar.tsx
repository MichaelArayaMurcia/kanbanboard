import React, { useState } from 'react'

import "./sidebar.scss"

import boards from "../../data/data.json";

const listOfBoards = boards.boards;
console.log(listOfBoards);



function Sidebar (){
  return (
    <div className="sidebarContainer">
      <h1>All Boards</h1>

      <h3>Platform Launch</h3>
    </div>
  )
}

export default Sidebar;