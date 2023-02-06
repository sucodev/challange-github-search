import axios from 'axios'

const apiInstance = axios.create({
    baseURL: 'https://api.github.com/users/'
})

export { apiInstance }