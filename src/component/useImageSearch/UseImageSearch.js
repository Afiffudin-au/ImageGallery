import {useEffect,useState} from 'react'
import axios from 'axios'
const APIKEY = '18457839-6eab5ae2caca6daf8a2bf064d'
function UseImageSearch(query,pageNumber){
  const [images,setImages] = useState([])
  const [loading,setLoading] = useState(true)
  const [hasMore,sethasMore]  = useState(false)
  useEffect(()=>{
    setLoading(true)
    axios({
      method : 'GET',
      url : `https://pixabay.com/api/?key=${APIKEY}`,
      params : {q : query , image_type : 'photo',per_page:pageNumber,lang:"id"},
    }).then(res=>{
      setImages(res.data.hits)
      sethasMore(res.data.hits.length > 0)
      setLoading(false)
    }).catch(err=>{
      alert(err)
    })
  },[query,pageNumber])
  return {images,loading,hasMore}
}
export default UseImageSearch