import { createSlice, configureStore } from '@reduxjs/toolkit';

const authSLice = createSlice({
    name: "auth",
    initialState: {
        isLogin : false
    },
    reducers:{
        login(state){
            state.isLogin = true
        },
        logout(state){
            state.isLogin = false
        }
    }
});

export const authActions = authSLice.actions

export const store = configureStore({
    reducer: authSLice.reducer
});