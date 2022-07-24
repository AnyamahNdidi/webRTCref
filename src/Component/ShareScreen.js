import React from 'react'


function ShareScreen ()
{
  const shareScreen = React.useRef()
  React.useEffect(() =>
  {
    navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then((strem) =>
    {
      shareScreen.current.srcObject= strem
    })
  },[])
  return (
    <div>
      <center>
        <video autoPlay ref={shareScreen } style={{width:"500px", height:"700px"}}/>
      </center>
    </div>
  )
}

export default ShareScreen