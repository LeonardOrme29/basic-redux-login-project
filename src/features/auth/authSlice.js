import { createSlice } from "@reduxjs/toolkit";


export const authSlice=createSlice({
    name:'auth',
    initialState:{
        user:null
    }, //initialState=initialState
    reducers:{
        addAuth:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state=null;
        }
    }
})
export const {addAuth,logout}=authSlice.actions
export default authSlice.reducer;