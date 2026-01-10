
const Option = ({naam,detail,price,country}:{
    naam:string,
    detail:string,
    price:string,
    country:string
}) => {
  return (
    <div className="option">
        <div className="optleft">
            <div className="name">{naam}</div>
            <div className="quantity">{country}| {detail}</div>
            
        </div>
        <div className="optright">
            <div className="price">-{price}</div>
        </div>
    </div>
  )
}

export default Option