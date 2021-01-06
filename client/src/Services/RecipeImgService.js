import ApiClient from './ApiClient'

export const __GetRecipeImg = async () => {
  try {
    const res = await ApiClient.get(`/image/view`)
    return res.data
  } catch (error) {
    throw error
  }
}

// click on recipe - and go next page to find recipe details
export const __GetRecipeImgById = async (recipeId) => {
  try {
    const res = await ApiClient.get(`/image/view/${recipeId}`)
    return res.data
  } catch (error) {
    throw error
  }
}