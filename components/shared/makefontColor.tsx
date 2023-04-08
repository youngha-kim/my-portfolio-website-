import { useEffect } from "react"

const makeFontColor = () => {
  useEffect(()=>{
    const strongElements = document!.getElementsByTagName("strong")
    for(let i = 0 ; i < strongElements.length ; i++){
      strongElements[i].style.color = "#EB5858"
    }
  },[])
}

export default makeFontColor