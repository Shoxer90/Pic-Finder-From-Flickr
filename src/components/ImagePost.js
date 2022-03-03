import React from 'react'

export default function ImagePost({server,id,secret}) {
    const imageBaseUrl=`https://live.staticflickr.com/${server}/${id}_${secret}.jpg `

  return (
    <div>
             <img src = {imageBaseUrl}  
                alt={server}
                key={id}
            />
    </div>
  )
}
