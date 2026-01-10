import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Best = () => {
  useGSAP(()=>{


    const al = gsap.timeline({paused:true})
al.from(".besttopleft",{
  y:"10%",
  opacity:0,
duration:3,
  



  
    



  
})


ScrollTrigger.create({
  trigger:".besttopleft",

    end:"bottom 10%",
start:"top bottom",

onEnter:()=>{
  al.play()
}
})



gsap.from(".bestbottom",{
  opacity:0,
  yPercent:10,



  scrollTrigger:{
    trigger:".bestbottom",
    start:"top bottom",
    end:"top 40%",
    scrub:2,

  }
})
  })
  return (
    <div className="best">
      <div className="besttop">
        <div className="besttopleft">
          <div>Best cocktails</div>
          <div>شhere evعry detail ma٣٣ers -from muddle to garniىh</div>
        </div>
        <div className="besttopright">
          <div>
            Every cocktail we served is a reflection of our obsession with
            detail -from the first muddle to the final garnish.that care is what
            turns a simple drink into something truly memorable.
          </div>
          <div>
            <span>
              4.5 
            </span><span>/5</span><br />
            More than +12000 customers
          </div>
        </div>
      </div>
      <div className="bestbottom ">
        <div className="bestbottomtop  bv">
          <img src="/images/abt1.png" alt="" />
          <img src="/images/abt2.png" alt="" />
          <img src="/images/abt5.png" alt="" />
        </div>
        <div className="bestbottombottom bv">
          <img src="/images/abt3.png" alt="" />
          <img src="/images/abt4.png" alt="" />

        </div>
      </div>
    </div>
  );
};

export default Best;
