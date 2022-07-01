import { Avatar } from '@material-ui/core'
import { ChatBubble, RadioButtonChecked, Search } from '@material-ui/icons'
import { signOut } from 'firebase/auth'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  SelactUser } from '../features/App-Slice'
import { resetCameraImage } from '../features/Camera-Slice'
import './Chat.css'
import Chats from './Chats'
import { auth, db } from './Firebase'

function Chat() {
  const user=useSelector(SelactUser)
  const [post,setpost]=useState([])
  const dispatch=useDispatch()
  const Navigate=useNavigate()
  useEffect(() => {
  const c= collection(db,'post')
  const q=query(c,orderBy('timestamp','desc'))
  const unsub=onSnapshot(q,querSnap=>{
    setpost(querSnap.docs.map(doc=>(
      {
        id:doc.id,
        data:doc.data()
      }
    )))
  })
  return () => unsub

 
  }, []);
  const takeSnap=()=>{
    dispatch( resetCameraImage())
    Navigate('/')

  }
  return (
   <div className="chat">
    <div className="chat_header">
      <Avatar src={user.profilpic}  className='chat_avatar'  onClick={()=>signOut(auth)}/>
      <div className="chat_search">
        <Search className='chat_searchIcon'/>
        <input type="text"placeholder='Friends'/>
      </div>
      <ChatBubble className='chat_Icon'/>
    </div>
    <div className="chat_post">
   {
    post.map(({id,data:{imagurl,name, timestamp,profilpic,read}})=>{
    
      return(
        <Chats
        key={id}
        imag={imagurl}
        name={name}
        timestamp={timestamp}
        profilpic={profilpic}
        read={read}
        id={id}
        />
  
      )
    })
   }

    </div>

    <RadioButtonChecked
    className='chat_takePick'
    onClick={takeSnap}
    fontSize='large'/>
   </div>
  )
}

export default Chat