import { useRef } from "react";
import Menu from "./Menu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Best from "./Best";
import Art from "./Art";



const Hero = () => {

  const topleft= useRef(null)
  const topright= useRef(null)
  const videoref = useRef<null | HTMLVideoElement>(null);
  const titlrref = useRef<null | HTMLHeadingElement>(null);
  const sple = useRef<null | HTMLDivElement>(null);
  const spr= useRef<null | HTMLDivElement>(null)

  useGSAP(() => {

    const tl = gsap.timeline()
    if (videoref.current) {
      videoref.current.onloadedmetadata = () => {
        gsap.to(videoref.current, {
          currentTime: videoref.current?.duration ,

          y: "160%",
          scrollTrigger: {
            trigger: videoref.current,

            start: "top 30%",
            end: "200% top",
            scrub: 2,
          },
        });
      };
    }

    const splittitle = SplitText.create(titlrref.current,{
     type:"chars",
      // tag:"span",
      charsClass:"ert"


    })

    gsap.from(splittitle.chars, {
y:"100",
      duration: 1,
      opacity: 0,
      stagger:{
        amount:1,
        
        
      }
    });

    const splitleft = SplitText.create(sple.current, {
      type: "words",
      wordsClass: "word",
      tag: "span", // Force usage of spans (inline) instead of divs (block)
    });

    const spright= SplitText.create(spr.current,{

      type:"words",
      tag:"span",
      wordsClass:"aaa"
    })

    

    

    
    

    gsap.from(splitleft.words, {
      y: "40%",
      opacity: 0,
      stagger: .2,
      duration:2,
      scrollTrigger:{

        trigger:splitleft.words,
        start:"bottom 83%",

        end:"bottom 87%"
      }

    });



    gsap.from(spright.words, {
      y: "40%",
      opacity: 0,
      stagger: .1,
      duration:.1,
      scrollTrigger:{

        trigger:spright.words,
        start:"bottom 83%",
        end:"bottom 87%"
      }

    });

    tl.to(topleft.current,{
      y:"-50%",
      duration:4,


      scrollTrigger:{

        trigger:topleft.current,
        start:"top 26%",
        end:"top 0%",
        scrub:2,
        

      },
      
    })


    tl.to(topright.current,{
      y:"50%",
      duration:4,


      scrollTrigger:{

        trigger:topright.current,
        start:"top 0%",
        end:"200% 60%",
        scrub:2,
        

      },
      
    })





    // 

    
  }, {
    
  });

  return (
    <>
      <div className="heros">
        <h1 ref={titlrref} className="title">
          MO٣!ذO
        </h1>

        <img ref={topleft} className="imgabs aa" src="/images/hero-left-leaf.png" alt="" />
        <img ref={topright} className="imgabs bb" src="/images/hero-right-leaf.png" alt="" />
      </div>

      <div className="videos">
        <img className="darr" src="/images/arrow.png" alt="" />
        <video
          playsInline
          ref={videoref}
          muted
          preload="auto"
          src="/videos/output.mp4"
        ></video>
      </div>

      <div className="vidside">
        <div ref={sple} className="vidleft">
          <p>Cool.Crisp.Classic</p>
          <div  className="pp">
            يiم the  sمirit <br /> of يummعr
          </div>
        </div>
        <div ref={spr} className="vidright">
          <p >
            Every cocktail on our menu is a blend of premium
            ingredients,creative flair and timeless recipes-design to delight
            your senses.
          </p>
          <p>view cocktails</p>
        </div>
      </div>
      <div className="menus">
        <Menu title={"Most popular cocktails:"} />
        <Menu title={"Most popular mocktails:"} />
      </div>
      <div className="leafs">
        <img className="botleftleaf" src="/images/hero-left-leaf.png" alt="" />
        <img
          className="botrightleaf"
          src="/images/hero-right-leaf.png"
          alt=""
        />
      </div>


      <Best/>
  <Art/>


    </>
  );
};

export default Hero;
