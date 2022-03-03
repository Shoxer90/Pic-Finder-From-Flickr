import React, { useEffect, useState } from 'react'
import axios from 'axios'
import API_Key from '../ApiModel'
import ImagePost from './ImagePost'

export default function DataURL({tag}) {
  const [post, setPost] = useState ([])
  console.log(tag ,"tag in url")
  

  useEffect(() => {
     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_Key}&tags=${tag}&format=json&nojsoncallback=1`)
      .then ((response) =>{
        setPost (...post,response.data.photos.photo.slice(0,5))
      })
  },[])

 console.log(post , 'post')
  if (!post) return null;


return( <div>
          { post.map((photo) => {
           return (
               <div className='photoCard' key={photo.id}>
                 <ImagePost server={photo.server}
                    secret={photo.secret}
                       id={photo.id} 
                  />
               </div>
             )
          })}

    </div>
)
}
