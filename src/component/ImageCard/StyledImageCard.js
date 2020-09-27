import styled from 'styled-components'
import tw from "twin.macro"
export const Card = styled.div.attrs({
  className: "max-w-sm rounded-t shadow-2xl my-5 mx-5",
})``
export const ImgThumb = styled.img.attrs({
  className : "rounded-t object-fill"
})``
export const ContentCard = styled.div.attrs({
  className : "px-2 py-5"
})``
export const ContentCardStat = styled.span.attrs({
  className : "text-sm inline-block mt-3 shadow-lg rounded bg-indigo-500 text-gray-400 p-1 mr-3 uppercase subpixel-antialiased font-light"
})``
export const ContentDownload = styled.div.attrs({
  className : 'mt-4'
})`
& {
  button{
    ${tw`text-sm mr-5 rounded outline-none hover:bg-blue-700 py-2 px-3 shadow-md bg-blue-400 border text-gray-100`}
  }
  a{
    ${tw`text-sm rounded outline-none hover:bg-blue-700 py-2 px-3 shadow-md bg-blue-400 border text-gray-100`}
  }
}`