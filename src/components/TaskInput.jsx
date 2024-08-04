import React, { useEffect } from 'react'
import { useState } from 'react'

const TaskInput = () => {

    const [tasks, setTasks] = useState([
        {task: 'test'},
        {task: 'test 2'}
    ])

    const [taskInput, setTaskInput] = useState('')

    const handleInputChange = (e) => {
        setTaskInput(e.target.value)
    }

    const addTask = () => {
        const newTask = {task: taskInput}
        setTasks([...tasks, newTask])
    }

    useEffect(() => {
        console.log(tasks)
    }, [tasks])

  return (
    <>
        <div className='space-x-5'>
            <input className='w-1/5 border py-3 rounded-lg' type="text" placeholder='Enter a task' onChange={handleInputChange} value={taskInput} />
            <button className='px-5 py-3 bg-blue-400 rounded-lg text-white' onClick={addTask}>Submit</button>
            <p>{taskInput}</p>
        </div>

        <div>
            {tasks.map((task, index) => (
                <div>{task.task}</div>
            ))}
        </div>

    </>
  )
}


export default TaskInput