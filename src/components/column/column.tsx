import React, { useState } from 'react'
import { createContext, useContext } from "react";
import "./column.scss"
import { boardsContext1 } from "../../App";

class Task {
    constructor(){
        title: String;
        id: Number;
        description: String;
        status: String;
        subtasks: [
            {
                title: String,
                isCompleted: Boolean,
            }
        ]
    }
}

type ColumnProps = {
    name: string,
    boardNumber: number,
    columnNumber: number
  }


function Column ({ name, boardNumber, columnNumber }: ColumnProps){
    const { boards } = useContext(boardsContext1);

    let listOfTasks = boards[boardNumber].columns[columnNumber].tasks;

    return (
        <div className="sidebarContainer">
            <h1> { name } </h1>

            {
                listOfTasks.map((task => {
                    return (
                        <div key={task.title}>
                            <h2> {task.title} </h2>
                            <h3> {task.description} </h3>
                        </div>
                    )
            }))
            }
        </div>
    )
}

export default Column;