import React, { useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  selectImg } from '../features/App-Slice'
import './ChatView.css'
function ChatView() {
    const  f=useSelector(selectImg)
    console.log(f)
    const Navigate=useNavigate()
    useEffect(() => {
       if(!selectImg){
        exit()
       }
    },[selectImg]);
    const exit=()=>{
        Navigate('/Chats')

    }
  return (
    <div className='ChatView'>
        <img src={f}alt="" onClick={exit} />
       
        <div className="chatview_timer">
        <CountdownCircleTimer
        isPlaying
        duration={10}
        strokeWidth={6}
        size={50}
        colors={[
          ["#004777",0.33],
          ["#F7B801",0.33],
          ["#A30000",0.33],
        ]}>

          {({remainingTime})=>{
            if(remainingTime===0){ exit();}
            return remainingTime
          }}

        </CountdownCircleTimer>

        </div>
     
    </div>
  )
}

export default ChatView