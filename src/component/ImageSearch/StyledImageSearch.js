import styled from 'styled-components'
import tw from "twin.macro"
export const ImageSearchContainer  = styled.div.attrs({
  className : ' flex mt-2 ml-2 justify-center mb-2 sticky top-0'
})`
& {
  input {
    ${tw`border outline-none py-1 px-1 shadow-md w-4/6 rounded border-teal-400`}
  }
  button{
    ${tw`rounded outline-none hover:bg-blue-700 py-1 px-4 shadow-md bg-blue-400 border text-gray-100`}
  }
}
`