
import { openingHours, socials, storeInfo } from "../constants/Constant"


const Footer = () => {

  

  return (
<div className="footer">
  
<h3>{storeInfo.heading}</h3>
<div className="tt">
  <div className="oo">VISIT OUR BAR</div>
  <div>{storeInfo.address}</div>
</div>
<div className="tt">
  <div className="oo">CONTACT US</div>
  <div>{storeInfo.contact.email}</div>
  <div>{storeInfo.contact.phone}</div>
</div>
<div className="tt">
  <div className="oo">OPENING EVERYDAY</div>
  {openingHours.map((item,id)=>(
    <div key={id}>{item.day}:{item.time}</div>
  ))}
  
</div>
<div>

  <div className="oo">SOCIAL</div>
<div className="as">
  {socials.map((item,id)=>(
    <a key={id} target="_blank" href={item.url}>
      <img src={item.icon} alt="" />
    </a>
  ))}
  </div>
</div>

<img src="images/footer-right-leaf.png" className="fr" alt="" />
<img src="images/footer-left-leaf.png" className="fl" alt="" />
<div className="zz"></div>
</div>
  )
}

export default Footer