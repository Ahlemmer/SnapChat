import {createSlice} from '@reduxjs/toolkit'


export const CameraSlice=createSlice(
    {
        name:'camera'
        ,initialState:{
            cameraImg:null,
        },
        reducers:{
            setCameraImg:(state,action)=>{
                state.cameraImg=action.payload
            },
            resetCameraImage:(state)=>{
                state.cameraImg=null
            }
        }
    }
)

export const {setCameraImg,resetCameraImage}=CameraSlice.actions;
export const SelactCamera=(state)=>state.camera.cameraImg;
export default CameraSlice.reducer