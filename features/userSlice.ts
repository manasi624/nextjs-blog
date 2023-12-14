import { User, UserState } from '@/typing';
import { createSlice } from "@reduxjs/toolkit";

const initialUser:User = {
    uid:'',
    email:'',
    username:'',
    password:''
}

const initialState:UserState = {
    user: initialUser,
    loading: false,
    error: null,
}


export const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        userRequested: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginUser: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },
        logoutUser:(state) => {
            state.user = initialUser;
            state.loading = false;
            state.error = null;
        },
        userRequestFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

    }
})


export const { userRequested, loginUser, logoutUser, userRequestFailed } = userSlice.actions

export default userSlice.reducer