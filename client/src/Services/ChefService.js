import ApiClient from './ApiClient'

//create chef (hire)
export const __RegisterChef = async (formData) => {
  try {
    const res = await ApiClient.post('/chef/hire', formData)
    return res.data
  } catch (error) {
    throw error
  }
}
//get chef 
export const __GetChef = async (chefId) => {
  try {
        const res = await ApiClient.get(`/chef/${chefId}`)
        return res.data
    } catch (error) {
        throw error
    }
  }


