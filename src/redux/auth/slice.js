import { createSlice } from "@reduxjs/toolkit";
import {login, register, logout, refreshUser} from "./operations"

const handlePending = (state) => {
    state.isLoading = true;    
}

const handleRejected = (state, action) => {
    state.isLoading = false;    
    state.error = action.payload;    
} 

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, handlePending)
            .addCase(register.fulfilled, (state, action) => {
                // console.log("action.payload", action.payload);
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(register.rejected, handleRejected)
        
            .addCase(login.pending, handlePending)
            .addCase(login.fulfilled, (state, action) => {
                // console.log("action.payload", action.payload);
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(login.rejected, handleRejected)
        
            .addCase(logout.pending, handlePending)
            .addCase(logout.fulfilled, (state) => {
                // console.log("action.payload", action.payload);
                state.user = null;
                state.token = null;
                state.isLoggedIn = false;
                // state.isLoading = false;
                state.error = null;
            })
            .addCase(logout.rejected, handleRejected)       
        
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                console.log("action.payload >>", action.payload);
                state.user = action.payload;
                state.isLoggedIn = true;
                // state.isLoading = false;
                state.error = null;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected,  (state) => {
                state.isRefreshing = false;
            })       
        
    }
});

export default authSlice.reducer;