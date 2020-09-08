import * as axios from 'axios'


const instanceAxios = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: { "API-KEY": '16ce2d84-6245-4b19-a529-cd15039660d9' }
})

export const userAPI = {
   getUsers(currentPage = 1, pageSize = 1) {
      return instanceAxios
         .get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
   },
   follow(id) {
      return instanceAxios
         .post(`follow/${id}`, {})
   },
   unfollow(id) {
      return instanceAxios
         .delete(`follow/${id}`)
   }

}