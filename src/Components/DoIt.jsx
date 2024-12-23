import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const DoIt = () => {

  const [todo, setTodo] = useState([]);
  const [val, setVal] = useState();

  const handleChange = (e) => {
    setVal(e.target.value)
  } 

  const handleSubmit = () => {
    setTodo([...todo, val]);
    setVal('')
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-100 to-blue-100'>
      <div className='w-auto h-auto p-10 backdrop-blur-sm bg-white/30 backdrop-brightness-150 rounded border border-slate-400 flex flex-col justify-center items-center'>
        <TextField name='todo' value={val} onChange={(e) => handleChange(e)} label='Add Notes...' />
        <Button onClick={(e) => handleSubmit(e)}>Add</Button>


        <div className='mt-5'>
          {todo && todo.map((data) => (
            <h4 className='text-amber-950'>{data}</h4>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoIt