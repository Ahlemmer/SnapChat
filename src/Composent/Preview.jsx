import { TextField } from '@material-ui/core'
import { AttachFile, Close, Create, Crop, MusicNote, Note, Send, Timer } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetCameraImage, SelactCamera } from '../features/Camera-Slice'
import './Preview.css'
import { v4 as uuidv4 } from 'uuid'
import { db, storage } from './Firebase'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { SelactUser } from '../features/App-Slice'

function Preview() {
    const cameraImge=useSelector(SelactCamera)
    const user=useSelector(SelactUser)
    const Navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        if(!cameraImge){
            Navigate('/')
        }
    },[cameraImge,Navigate])
    const ClosePreview=()=>{
        dispatch(resetCameraImage())
    }
    const sendPost=async()=>{
        const id=uuidv4()
        const storageRef=ref(storage,`posts/${id}`)
        const uploadTask= await uploadString(storageRef,cameraImge,'data_url')
        const url=await getDownloadURL(storageRef,uploadTask.ref.fullPath)
        console.log(uploadTask)
        addDoc(collection(db,'post'),{
            imagurl:url,
            name:'ahlem',
            read:false,
            profilpic:user.profilpic,
            timestamp:Timestamp.fromDate(new Date())
        })
        Navigate('/Chats')
    }

    
  return (
    <div className='preview'>
        <Close className='preview_close'  onClick={ClosePreview}/>
        <div className="preview_toolbarRight">
            <TextField/>
            <Create/>
            <Note/>
            <MusicNote/>
            <AttachFile/>
            <Crop/>
            <Timer/>
        </div>
        
        <img src={cameraImge} alt="" />
        <div className="preview_bottom" onClick={sendPost}>
            <h2>Send Now</h2>
            <Send className='Send_Preview' fontSize='small'/>
        </div>
    </div>
  )
}

export default Preview