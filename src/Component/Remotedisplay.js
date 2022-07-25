import React, { useEffect } from 'react'
import { io } from "socket.io-client"
import { useParams } from "react-router-dom"
import {useNavigate} from "react-router-dom"

io("http://localhost:3040")
function Remotedisplay ()
{
  const hist = useNavigate()
  const { roomID } = useParams()
  const userVideo = React.useRef()
  const partnerVideo = React.useRef()

  React.useEffect((strem) =>
  {
    navigator.mediaDevices.getUserMedia({video:true, audio:true}).then((strem) =>
    {
      userVideo.current.srcObject = strem
    },[])
  },[])


  return (
    <div>
      <center>
        <video autoPlay ref={userVideo }/>
        <br/>
        <br/>
        <br />
        <button
          onClick={() =>
          {
            hist("/sharescreen")
          }}
        >share screen</button>
        
      </center>
    
    </div>
  )
}

export default Remotedisplay