import React,{useState,useRef,useCallback} from 'react';
import './App.css';
import ImageSearch from './component/ImageSearch/ImageSearch';
import ImageCard from './component/ImageCard/ImageCard';
import UseImageSearch from './component/useImageSearch/UseImageSearch';

function App(){
  const [query,setQuery] = useState('')
  const [pageNumber,setPageNumber] = useState(20)
  const {images,loading,hasMore} = UseImageSearch(query,pageNumber)
  const observer = useRef()
  const lastImageElement = useCallback(node => {
    if(loading) return 
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting && hasMore){
       setPageNumber(prevPageNumber => prevPageNumber + 10)
      }
    })
    if(node) observer.current.observe(node)
  },[loading,hasMore])
  const handleQuery = (value)=>{
    if(value !== ''){
      setQuery(value)
      setPageNumber(20)
    }
  } 
  return (
    <div className="App">
      <ImageSearch handleQuery={handleQuery}/>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {
          images?.map((image,index)=>{
            if(images.length === index + 1){
             return <div  ref={lastImageElement} key={image.id}><ImageCard id={image.id} image={image}/></div>
            }else{
             return <div key={image.id}><ImageCard id={image.id} image={image}/></div>
            }
          })
        }
        <div className="text-lg text-center text-blue-600 uppercase subpixel-antialiased font-semibold">{loading && 'Loading...'}</div>
      </div>
    </div>
  );
}
export default App;
