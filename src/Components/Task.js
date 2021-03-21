import React from 'react'
import { FaTimes } from 'react-icons/fa'


function Task({ task, onDelete,onToggle}) {
    return (

        <div onDoubleClick={()=>onToggle(task.id)} className={`task ${task.reminder?'reminder':'task'}`}>
            <h3>{task.name}<FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red' }}/></h3>
            <p>{task.schedule}</p>
            
        </div>
    )
}

export default Task
