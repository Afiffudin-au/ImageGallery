import React from 'react'
import { Card,ImgThumb,ContentCard,ContentCardStat,ContentDownload} from './StyledImageCard'
import { saveAs } from 'file-saver';
function ImageCard({image}) {
  const downloadImage = (url)=>{
    saveAs(url,'image');
  }

  return (
    <MemoizedCardImage image={image}  downloadImage={downloadImage}/>
  )
}

function ImageCardComponent ({image,downloadImage}){
  return (
    <Card>
    <ImgThumb src={image.webformatURL} alt=""/>
    <ContentCard>
      <div>
        <ContentCardStat>Likes : {image.likes}</ContentCardStat>
        <ContentCardStat>Downloads : {image.downloads}</ContentCardStat>
        <ContentCardStat>views : {image.views}</ContentCardStat>
      </div>
      <ContentDownload>
        <button onClick={()=>downloadImage(image.largeImageURL)}>Download</button>
        <a href={image.largeImageURL} target="_blank" rel="noopener noreferrer">View Full</a>
      </ContentDownload>
    </ContentCard>
  </Card>
  )
}
function compare(prevProps , nextProps){
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}
const MemoizedCardImage = React.memo(ImageCardComponent,compare)
export default ImageCard
