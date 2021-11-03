import { BaseQueryArg } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'


export const postAPI = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.openweathermap.org/'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query({
            query: () => ({
                url: '/posts'

            })
        })
    })
    
})