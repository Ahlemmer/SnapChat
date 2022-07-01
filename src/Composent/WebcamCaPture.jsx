import { RadioButtonUnchecked } from "@material-ui/icons"
import { useCallback, useRef} from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Webcam from "react-webcam"
import { setCameraImg } from "../features/Camera-Slice"
import './WebCam.css'

const vidoConsttrains={
    width:250,
    height:400,
    facingMode:'user'
}



function WebcamCaPture() {
    const webRef=useRef(null)
    const dispatch=useDispatch()
    const Navigate=useNavigate()
  
    const capture=useCallback(()=>{
        const  imgSrc=webRef.current.getScreenshot()
        dispatch(setCameraImg(imgSrc))
        Navigate('/Preview')
    },[webRef])
    
  return (
    <div className="webCapture" >
    <Webcam
    audio={false}
    height={vidoConsttrains.height}
    width={vidoConsttrains.width}
    videoConstraints={vidoConsttrains}
    ref={webRef}
    screenshotFormat='image/jpeg'/>
    <RadioButtonUnchecked
    className="webCam_btn"
    onClick={capture}
    fontSize='large'
    
    />
 
    </div>
  )
}

export default WebcamCaPture