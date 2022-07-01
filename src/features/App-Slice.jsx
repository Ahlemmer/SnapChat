import {createSlice} from '@reduxjs/toolkit'


export const AppSlice=createSlice(
    {
        name:'App'
        ,initialState:{
            user:null,
            image:null,
        },
        reducers:{
           login:(state,action)=>{
                state.user=action.payload
            },
            Logout:(state)=>{
                state.user=null


            },
            selectImage:(state,action)=>{
                state.image=action.payload

            },
            resetImg:(state)=>{
                state.image=null
            }
           
        }
    }
)

export const {login,Logout,selectImage,resetImg}=AppSlice.actions;
export const SelactUser=(state)=>state.App.user;
export const selectImg=(state)=>state.App.image;
export default AppSlice.reducer