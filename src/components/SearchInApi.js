import React, { useState } from 'react'

export default function SearchInApi({getTagForSearch}) {
const [searchValue, setSearchValue] = useState('')

const handleChangeTags = (e) => {
    setSearchValue(e.target.value.replace(/[^a-zа-яё]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim().split(" "))
}

  return (
    <div>
        <input type = 'text'
            onChange={(e) => {
                handleChangeTags(e)
            }} />
        <button onClick = {()=>getTagForSearch(searchValue) }>
            Search
        </button>
 </div>
  )
}
