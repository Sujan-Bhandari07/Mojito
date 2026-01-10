

import { useRef, useState } from "react"
import { sliderLists } from "../constants/Constant"

import gsap from "gsap"

const Change = () => {
    const imgr = useRef(null)
    

    const handleLeft = (id:number) => {
  const newIndex = id > 0 ? id - 1 : sliderLists.length - 1
  setIndex(newIndex)
  setSelected(sliderLists[newIndex])
  gsap.from(imgr.current,{
    x:100,
    duration:1,
    opacity:0
  })
  
}

const handleRight = (id:number) => {
  const newIndex = id < sliderLists.length - 1 ? id + 1 : 0
  setIndex(newIndex)
  setSelected(sliderLists[newIndex])

  gsap.from(imgr.current,{
    x:-100,
    opacity:0,
    duration:1
  })
}

    


    const [index, setIndex] = useState(0)
    const [selected, setSelected] = useState(sliderLists[index])


   

    

  return (
<div className="change">
    <div className="chtop">
        {sliderLists.map((item,id)=>(
            <>

            <div key={id} className={index === id ? "b":"a" }>{item.name}</div>
            </>
        ))}
    </div>
    <div className="chmid">
        <div onClick={()=>handleLeft(index)}>
            <div>{index>0?sliderLists[index-1].name:sliderLists[3].name}</div>
<img  src="/images/right-arrow.png" alt="" />
        </div>
        <div onClick={()=>handleRight(index)}>
            <div>{index<3?sliderLists[index+1].name:sliderLists[0].name}</div>
<img  src="images/left-arrow.png" alt="" />
        </div>
    </div>

<div className="chcen">
    <img ref={imgr} className={selected.id == 2 ?"i2":"i1"} src={selected.image} alt="" />
    <div className="light"></div>
</div>


<div className="chbleft">
    <div>Recipe for</div>
    <div>{selected.name}</div>
</div>
<div className="chbright">

<div>{selected.title}</div>
<div>{selected.description}</div>
</div>
<img src="images/slider-left-leaf.png" alt="" className="imr" />
<img src="images/slider-right-leaf.png" alt="" className="iml" />
</div>
  )
}

export default Change