import React, { useEffect, useState } from 'react';
import { __GetStoryById } from '../Services/StoriesService'

const SingleStory = (props) => {
  const [story, setStory] = useState(null)
  const [pageloaded, setLoaded] = useState(false)


  console.log("rendering story", story)


  const getStory = async () => {
    try {
      const story = await __GetStoryById(props.match.params.story_id)
      setStory(story)
      setLoaded(true)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    getStory()
  }, [props.match.params.story_id])


  return (!pageloaded ? <div></div> :
    <div className="story-wrap" style={{ width: "80%", borderRadius: "14px", border: "2px solid white", boxShadow: "1px 8px 8px 8px #eeeeee", marginLeft: "10%" }}>
      <h3>{story.title}</h3>
      <img src={story.image} alt="food image" style={{ width: "52%", borderRadius: "5px", display: "center" }} />
      <p>{story.story}</p>
    </div>

  )
}

export default SingleStory