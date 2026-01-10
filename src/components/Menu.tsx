import { cocktailLists, mockTailLists } from "../constants/Constant"
import Option from "./Option"

interface menutype{
    title : string
}

const Menu = ({title}:menutype) => {
  return (
<div className="menu">
<p>{title}</p>

    <div className="options">

        { title ==`Most popular cocktails:`?cocktailLists.map((item,id)=>(
<Option key={id} naam={item.name} country={item.country} price={item.price} detail={item.detail}/>
        )): title==`Most popular mocktails:` &&   mockTailLists.map((item,id)=>(
            <Option key={id} naam={item.name} country={item.country} detail={item.detail} price={item.price}  />
        ))}


    </div>

</div>
  )
}

export default Menu