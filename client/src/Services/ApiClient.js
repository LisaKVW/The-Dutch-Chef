import axios from 'axios'

const ApiClient = axios.create({ baseURL: 'http://localhost:3004/api/' })   // for development

//BELOW NEEDED????
// const url = process.env.NODE_ENV === 'production' ? `${window.location.origin}/api` : 'http://localhost:3004/api'   // <-- for deployment ?  
// console.log("API BASELINE URL: ", url)

const ApiClient = axios.create({ baseURL: url })

export default ApiClient