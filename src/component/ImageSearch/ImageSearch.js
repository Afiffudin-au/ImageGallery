import React from 'react'
import { ImageSearchContainer } from './StyledImageSearch'
function ImageSearch({handleQuery}) {
  return (
    <ImageSearchContainer>
      <input type="text" onChange={(e)=>handleQuery(e.target.value)}/>
      <button>Search</button>
    </ImageSearchContainer>
  )
}

export default ImageSearch
