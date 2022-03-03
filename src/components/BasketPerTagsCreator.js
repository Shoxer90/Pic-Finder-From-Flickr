import React, { useState } from 'react'
import BasketForDnd from './BasketForDnd'

export default function BasketPerTagsCreator({tag}) {
    const [isOpen,setFilterStatus] = useState(false)


  return (
    <div>
      <div className='basketButton' onClick={() =>{
         setFilterStatus(!isOpen) }}>
         {tag}
     </div>
       { isOpen && <BasketForDnd  tag={tag}/>}

 </div>

  )
}
