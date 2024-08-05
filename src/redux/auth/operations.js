import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeaderToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}   

// POST     /users/signup  Body {"name": "", "email": "", "password": ""}
export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
    try {
        const response = await axios.post("/users/signup", newUser);

        // axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;   
        setAuthHeaderToken(response.data.token);

        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        
    }
}) 

// POST     /users/login   Body {"email": "","password": ""}
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    console.log("operation login - user>>", user);
    try {
        const response = await axios.post("/users/login", user);

        // axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`; 
        setAuthHeaderToken(response.data.token);

        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        
    }
}) 
// POST     /users/logout   Log out user
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout");
        // axios.defaults.headers.common.Authorization = "";
        setAuthHeaderToken("");
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        
    }
}) 
// GET      /users/current  Get information about the current user
// headers: Authorization: Bearer token
export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    // console.log("refreshUser >> thunkAPI.getState().auth.token>>",thunkAPI.getState().auth.token);

    const reduxState = thunkAPI.getState();
    const token = reduxState.auth.token;
    setAuthHeaderToken(token);

    try {
        const response = await axios.get("/users/current");
        console.log("refreshUser >> response.data >>",response.data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        
    }
},
    {
        condition: (_, thunkAPI) => {
            const reduxState = thunkAPI.getState();
            return reduxState.auth.token !== null;
        }
    }
) 



