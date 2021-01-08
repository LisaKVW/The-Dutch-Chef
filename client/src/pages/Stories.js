import React, { useState, useEffect } from 'react';
import { __GetStories } from '../Services/StoriesService'
import { NavLink } from 'react-router-dom'


const Stories = (props) => {
  const [stories, setStories] = useState([])
  const [title, setTitle] = useState([])
  const [image, setImage] = useState([])
  const [pageloaded, setLoaded] = useState(false)


  useEffect(() => {
    const getStories = async (props) => {
      const storyList = await __GetStories(props)
      console.log(storyList)
      setStories(storyList)
    }
    getStories()
  }, [])


  return (
    <div className="wrapper" style={{ margin: "0 auto" }}>
      <div className="grid-hold" style={{ display: "grid", gridTemplateColumns: "33% 33% 33%", width: "80%", marginTop: "6vh", margin: "0 auto" }}>
        {stories.map(story => {
          console.log('story breaky 2', story)
          return (
            <div className="row">
              <div className="col s12 m7" style={{ width: "85%" }}>

                <div class="card" style={{ backgroundColor: "black" }}>
                  <div class="card-image" >
                    <img src={story.image} />
                    <span class="card-title"> {story.title} </span>
                  </div>
                  <div class="card-action">
                    <NavLink to={{ pathname: `/single-story/${story.id}`, state: {} }}> See story </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Stories

// import React, { useState, useEffect } from 'react';
// import { __GetStories } from '../Services/StoriesService'

// const Stories = (props) => {
//   const [stories, setStories] = useState([])
//   const [title, setTitle] = useState([])
//   const [image, setImage] = useState([])

//   useEffect(() => {
//     const getStories = async (props) => {
//       const storyList = await __GetStories(props)
//       console.log(storyList)
//       setStories(storyList)
//     }
//     getStories()
//   }, [])


//   return (
//     <div>
//       {stories.map((oneStory) => {
//         const { title, story, image } = oneStory
//         return (
//           <div className="recipe-wrap" style={{ width: "80%", borderRadius: "14px", border: "1px solid red", marginLeft: "10%" }}>
//             <h3>{title} </h3>
//             <img src={image} style={{ width: "30%", height: "40%", borderRadius: "4px" }} />
//             <p>{story} </p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Stories