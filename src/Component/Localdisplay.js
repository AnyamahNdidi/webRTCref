import React from 'react'
import { useNavigate } from "react-router-dom"
import {v4 as uuidv4} from "uuid"

function Localdisplay ()
{
  const hist = useNavigate()
  const id = uuidv4()

  const onChange = () =>
  {
    hist("/remotepath/${id}")
  }

  return (
    <div>
      <h1>Local Host</h1>
      <center>
        <button onClick={onChange}>
          create connection
        </button>
      </center>
    </div>
  )
}

export default Localdisplay