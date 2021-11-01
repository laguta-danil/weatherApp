import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?q=',
    headers: {"API-KEY": "6f84d1aedda3a1a3e9795b660ad609d9"},
})
// `${city}&appid=6f84d1aedda3a1a3e9795b660ad609d9`
const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    subscriber(id) {
        return instance.delete(`follow/${id}`, {})
    },
    unsubscribe(id) {
        return instance.post(`follow/${id}`, {}, {})  // может быть ошибка с третим обьектом
    },
    getProfile(userId){
        console.warn("Obsoled method, please use prolifeAPI obj!")
        return profileAPI.getProfile(userId)
    }
}

export const authAPI = {
    me (){
        return instance.get(`/auth/me`)
    }

}

export const profileAPI = {
    getProfile (userId){
        return instance.get(`profile/` + userId)
    },
    getStatus (userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus (status) {
        return instance.put('profile/status/', {status: status})
    },

}

export default userAPI