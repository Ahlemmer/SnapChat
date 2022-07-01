import { Avatar } from '@material-ui/core';
import { StopRounded } from '@material-ui/icons';
import { doc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactTimeago from 'react-timeago';
import {  selectImage} from '../features/App-Slice';

import './Chats.css'
import { db } from './Firebase';

const Chats = ({id,name, timestamp,profilpic,read, imag}) => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const Open= async()=>{
      if(!read){
       
        dispatch(selectImage(imag))
       
        
       await updateDoc(doc(db,'post',id),{
            read:true
        })
       
        navigate('/Chat/View')
        

      }
    
   
     
     
    }

    return (
        <div onClick={Open} className='Chats'>
            <Avatar  src={profilpic} className='chat_avatar'/>
            <div className="chats_info">
                <h4>{name}</h4>
                <p>{!read&&"Tap to view ~"}{' '}
                    <ReactTimeago  date={new Date(timestamp?.toDate()).toUTCString()}/></p>
                {!read && <StopRounded className='chat_readicon'/>}
            </div>
            
            
        </div>
    );
}

export default Chats;
