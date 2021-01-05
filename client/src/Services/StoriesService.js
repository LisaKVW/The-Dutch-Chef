import ApiClient from './ApiClient'

// this to AddNew Story
export const __UploadStory = async (formData, userId) => {
  try {
    const res = await ApiClient.post(`/stories/${userId}`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}


// get Recipe - show main image and title only, like all dinner items
export const __GetStories = async () => {
  try {
    const res = await ApiClient.get(`/stories`)
    return res.data
  } catch (error) {
    throw error
  }
}

// click on recipe - and go next page to find recipe details
export const __GetPostById = async (storiesId) => {
  try {
    const res = await ApiClient.get(`/stories/${storiesId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

//update recipe
export const __UpdatePost = async (formData, storiesId) => {
  try {
    const res = await ApiClient.put(`/stories/${storiesId}`, formData)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

// delete recipe
export const __DeletePost = async (storiesId) => {
  try {
    const res = await ApiClient.delete(`/stories/${storiesId}`)
    return res
  } catch (error) {
    throw error
  }
}