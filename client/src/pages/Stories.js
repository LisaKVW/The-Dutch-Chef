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
      setStories(storyList)
    }
    getStories()
  }, [])


  return (
    <div className="wrapper" style={{ margin: "0 auto" }}>      {/* <div className="grid-hold" style={{ display: "grid", gridTemplateColumns: "33% 33% 33%", width: "80%", marginTop: "6vh", margin: "0 auto" }}> */}
      <div className="grid-hold" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", width: "80%", marginTop: "6vh", margin: "0 auto", columnGap: "4%", rowGap: "0" }}>

        {stories.map(story => {
          return (
            <div className="row">
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
          )
        })}
      </div>
    </div>
  )
}

export default Stories

