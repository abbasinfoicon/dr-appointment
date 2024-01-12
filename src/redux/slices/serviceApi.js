import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const docApi = createApi({
    reducerPath: 'docApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
    endpoints: (builder) => ({
        // Login api
        getAllUser: builder.query({
            query: (token) => ({
                url: 'user/details',
                method: 'GET',
                headers: {
                    authorization: `Bearer ${token}`
                }
            }),
        }),
        // Doctor api
        getAllDoctor: builder.query({
            query: () => ({
                url: 'user/doctors',
                method: 'GET'
            }),
        }),
        getSingleDoctor: builder.query({
            query: (slug) => ({
                url: `user/doctor/${slug}`,
                method: 'GET'
            }),
        }),
        // Gallery api
        getAllGallery: builder.query({
            query: () => ({
                url: 'app/allGImages',
                method: 'GET'
            }),
        }),
        // Blog api
        getAllBlog: builder.query({
            query: () => ({
                url: 'app/blogs',
                method: 'GET'
            }),
        }),
        // Appointment api
        addAppointment: builder.mutation({
            query: (page) => ({
                url: "page",
                method: "POST",
                body: page,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
        }),
    }),
})

export const { useGetAllUserQuery, useGetAllDoctorQuery, useGetSingleDoctorQuery, useGetAllGalleryQuery, useGetAllBlogQuery, useAddAppointmentMutation } = docApi