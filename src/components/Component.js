import {React,useState }from 'react'
import BasketPerTagsCreator from './BasketPerTagsCreator'
import DataURL from './DataURL'
import SearchInApi from './SearchInApi'

export default function Component() {
  const [tags , setTags] = useState([])

  const getTagForSearch = (val)=> {
    setTags(val)
  }


  return (
    <div className='component'>
      <SearchInApi getTagForSearch = {getTagForSearch} />
     <div className='displayFlex'>

      {tags && tags.map((tag) => {
         return( 
           <div >
             <DataURL tag={tag} />
          </div>
         )
     })} 
     </div>
     <div className='displayFlex'>
     {tags && tags.map((tag) => {
      return( 
        <div >
          <BasketPerTagsCreator tag={tag} />
       </div>
      )
    })}
    </div>
  </div>
  )
}
