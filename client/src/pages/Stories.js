import React, { useState, useEffect } from 'react';
import { __GetStories } from '../Services/StoriesService'

const Stories = (props) => {
  const [stories, setStories] = useState([])
  const [title, setTitle] = useState([])
  const [image, setImage] = useState([])

  useEffect(() => {
    const getStories = async (props) => {
      const storyList = await __GetStories(props)
      console.log(storyList)
      setStories(storyList)
    }
    getStories()
  }, [])


  return (
    <div>
      {stories.map((oneStory) => {
        const { title, story, image } = oneStory
        return (
          <div>
            <h3>{title} </h3>
            <img src={image} style={{ width: "30%", height: "40%", borderRadius: "4px" }} />
            <p>{story} </p>
          </div>
        )
      })}
    </div>
  )
}

export default Stories