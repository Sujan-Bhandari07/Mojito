    import { useGSAP } from "@gsap/react"
import { featureLists, goodLists } from "../constants/Constant"
import gsap from "gsap"
import { useRef } from "react"

const Art = () => {
const artref = useRef(null)
const headref = useRef(null)
const leftartref = useRef(null)
const rightartref = useRef(null)
    useGSAP(()=>{
        const tl = gsap.timeline()



        tl.to(headref.current,{
            opacity:0,

// duration:1,
            scrollTrigger:{
        trigger:headref.current,

        start:"260% 100%",
        end:"start 0%",
        scrub:2,
                


    }
            
        },"aa")


        tl.to(leftartref.current,{
            autoAlpha:0,

// duration:1,
            scrollTrigger:{
        trigger:leftartref.current,

        start:"350% 100%",
        end:"-429% 0%",
        scrub:2,


    }
        },"aa")




        tl.to(rightartref.current,{
            autoAlpha:0,

// duration:1,
            scrollTrigger:{
        trigger:rightartref.current,

        start:"350% 100%",
        end:"-429% 0%",
        scrub:2,


    }
        },"aa")

tl.to(artref.current,{
duration:6,
    maskSize:"400",
    


    scrollTrigger:{
        trigger:".art",


        start:"94% 100%",
        end:"center 30%",
        scrub:2,
        pin:true
    }
},)

    })
  return (
<div className="art">
    <div ref={headref} className="head">The ART</div>
    <img ref={artref} className="artimg" src="/images/under-img.jpg" alt="" />
    <div className="artside">
        <div ref={leftartref} className="artleft">
            {goodLists.map((item,id)=>(
<div key={id} className="artoption">
    <img src="/images/check.png" alt="" />
    <p>{item}</p>
</div>
            ))}

        </div>
        <div ref={rightartref} className="artright">
            {featureLists.map((item,id)=>(
<div key={id} className="artoption">

<img src="/images/check.png" alt="" />
    <p>{item}</p>
            </div>
            ))}
            
        </div>
    </div>
    <div className="botart">
    <div>Made with Craft,Poured with Passion</div>
    <div>This isn't just a drink.Its a carefully crafted moment made just for you.</div>
    </div>

</div>
  )
}

export default Art