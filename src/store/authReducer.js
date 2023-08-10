import { createSlice } from "@reduxjs/toolkit";

import {setRoles, setToken} from "./authActions";

export const auth = createSlice({
    name: "auth",
    initialState: {
        token: "",
        roles: []
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(setToken,(state, action)=>{
            state.token = action.payload
        })
            builder.addCase(setRoles,(state, action)=>{
            state.roles = action.payload
        })
    }
})
