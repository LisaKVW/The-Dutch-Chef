import React, { useEffect, useState } from 'react';
import { __GetStoryById } from '../Services/StoriesService'

const SingleStory = (props) => {
  console.log('line 5 single story', props.match)
  const [story, setStory] = useState(null)
  const [pageloaded, setLoaded] = useState(false)


  console.log("rendering story", story)


  const getStory = async () => {
    try {
      const story = await __GetStoryById(props.match.params.story_id)
      console.log("get my story", story)
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
    <div className="story-wrap" style={{ width: "80%", borderRadius: "14px", border: "1px solid red", marginLeft: "10%" }}>
      <h3>{story.title}</h3>
      <img src={story.image} alt="food image" style={{ width: "35%", borderRadius: "5px" }} />
      <p>{story.story}</p>
    </div>

  )
}

export default SingleStory