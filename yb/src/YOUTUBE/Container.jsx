// import React from 'react'
// import PrintData from './PrintData';
// import VideoPlayer from './VideoPlayer';

// const Container = ({state,vid,fun}) => {
  
 
//   return (
//     <div>
//         <article>
//             <aside>
//                 <VideoPlayer vid={vid}></VideoPlayer>
//             </aside>
//    {/* -------------------------------------------------------          */}
//             <aside>
//                 {
//                     state.map((magic)=>{
//                         console.log(magic);

//                         return <PrintData fun={fun} magic={magic} ></PrintData>
                        

//                     })
//                 }
//             </aside>
//         </article>
//     </div>
//   )
// }

// export default Container









import React from 'react'
import PrintData from './PrintData'
import VideoPlayer from './VideoPlayer'

const Container = ({ state, vid, fun, selectedId }) => {

  return (
    <div>
      <article>

        {/* LEFT SIDE */}
        <aside>
          <VideoPlayer vid={vid} />
        </aside>

        {/* RIGHT SIDE */}
        <aside>
          {
            state.map((magic) => {
              return (
                <PrintData
                  key={magic.id}
                  fun={fun}
                  magic={magic}
                  selectedId={selectedId}
                />
              )
            })
          }
        </aside>

      </article>
    </div>
  )
}

export default Container