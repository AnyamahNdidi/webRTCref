import React from 'react'
import {  BrowserRouter, Route, Routes} from "react-router-dom"
import Localdisplay from './Component/Localdisplay'
import Remotedisplay from './Component/Remotedisplay'
import ShareScreen from './Component/ShareScreen'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Localdisplay/> }/>
        <Route path='/remotepath/:roomID' element={<Remotedisplay/> }/>
        <Route path='/sharescreen' element={<ShareScreen/> }/>
      </Routes>
      </BrowserRouter>
      </div>
     
  )
}

export default App






























// import React,{useRef,} from "react"
// import logo from './logo.svg';
// import './App.css';

// function App ()
// {
//   const useRef = React.useRef()
//   const [myState, setMyState] = React.useState(0)
  
//   console.log(useRef.current = myState)

//   const onChange = () =>
//   {
//     setMyState((prestate)=> prestate + 1)
//   }

//   return (
//     <div >
//       <center>
//         <div>state:{myState}</div>
//         <div>ref: {useRef.current}</div>
        
//         <button onClick={onChange} >state value</button>
//         <button ref={useRef} >ref value</button>
//       </center>
//     </div>
//   );
// }

// export default App;
