
// import React from 'react'

// const PrintData = (props) => {
//     console.log(props);
    
//   return (
//     // <div>
//     //     <div onClick={()=>{props.fun(props.magic)}}>
//     //         <img height={100} width={100} src={props.magic.thumbnailUrl} alt="" />
//     //         <h1>{props.magic.title}</h1>
//     //     </div>
//     // </div>




//     <div className="video-card" onClick={() => fun(magic)}>

//   <div className="thumbnail">
//     <img src={magic.thumbnailUrl} alt={magic.title} />
//     <span className="duration">{magic.duration}</span>
//   </div>

//   <div className="video-info">
//     <h4>{magic.title}</h4>
//     <p>{magic.author}</p>
//     <p>{magic.views}</p>

//     {magic.isLive && <span className="live">LIVE</span>}
//   </div>

// </div>
//   )
// }

// export default PrintData

import React from 'react'

const PrintData = ({ fun, magic, selectedId }) => {

  return (
    <div 
      className={`video-card ${selectedId === magic.id ? "active" : ""}`}
      onClick={() => fun(magic)}
    >

      <div className="thumbnail">
        <img src={magic.thumbnailUrl} alt={magic.title} />
        <span className="duration">{magic.duration}</span>
      </div>

      <div className="video-info">
        <h4>{magic.title}</h4>
        <p>{magic.author}</p>
        <p>{magic.views}</p>

        {magic.isLive && <span className="live">LIVE</span>}
      </div>

    </div>
  )
}

export default PrintData














