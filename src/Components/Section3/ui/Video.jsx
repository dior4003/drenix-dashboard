import React from 'react'

export default function Video({setVideo}) {
  return (
    <div id='video' onClick={()=>setVideo(false)}>
        <div className="video_box" onClick={(e)=>e.stopPropagation()}>
            <iframe title='drenix-about' src="https://drenix-back.herokuapp.com/static/media/reklama_video.mp4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full" frameborder="0"></iframe>
        </div>
    </div>
  )
}