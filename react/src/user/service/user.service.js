import axios from 'axios'

export const getList = () => axios.get('http://localhost:8080/users/fetch')

export const sigin = () => axios.post('http://localhost:8080/users/login',{})
