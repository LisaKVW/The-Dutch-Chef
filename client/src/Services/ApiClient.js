import axios from 'axios'

const ApiClient = axios.create({ baseURL: 'http://localhost:3004/api' });   // for development

export default ApiClient