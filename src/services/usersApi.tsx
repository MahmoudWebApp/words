import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../models/user.model";
import { endPoints } from './endPoints';
const wordApi = "http://localhost:3004/";
export const usersApi = createApi({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({ baseUrl: wordApi }),
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], void>({
            query: () => endPoints.getAllUsers
        })
    })
    
})
export const {useGetUsersQuery} = usersApi
