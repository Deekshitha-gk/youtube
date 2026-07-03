

//   import React, { useState } from 'react'
//   import JSON from "./YOUTUBE/video.json"
// import Container from './YOUTUBE/Container'
// import './App.css'
  
//   const App = () => {
//     let [state,setState]=useState(JSON)

//     // let [vid,setVid]=useState(null)/
//     let [vid, setVid] = useState(JSON[0].videoUrl)

//     let handlePlay=(max)=>{
//       console.log(max);

//       setVid(max.videoUrl)
      

//     }

//     return (
//       <div>
//         <Container fun={handlePlay} state={state} vid={vid}></Container>
//       </div>
//     )
//   }
  
//   export default App 










import React, { useState } from 'react'
import JSON from "./YOUTUBE/video.json"
import Container from './YOUTUBE/Container'
import './App.css'

const App = () => {

  const [state, setState] = useState(JSON)

  const [vid, setVid] = useState(JSON[0].videoUrl)

  const [selectedId, setSelectedId] = useState(JSON[0].id)

  const handlePlay = (video) => {
    setVid(video.videoUrl)
    setSelectedId(video.id)
  }

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">YouTube</h1>
        <input type="text" placeholder="Search..." className="search" />
      </nav>

      <Container 
        fun={handlePlay} 
        state={state} 
        vid={vid} 
        selectedId={selectedId}
      />

    </div>
  )
}

export default App