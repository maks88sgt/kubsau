import {createAction} from "@reduxjs/toolkit";

export const setToken = createAction("auth/setToken", ({token})=>({payload: token}))
export const setRoles = createAction("auth/setRoles", ({roles})=>({payload: roles}))
