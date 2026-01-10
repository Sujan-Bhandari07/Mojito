import { navLinks } from "../constants/Constant"

const Navbar = () => {
  return (

    <div className="navbar">

<nav >
<div className="navleft">
<img src="/images/logo.png" alt="" />
<div className="brand">Velvet Pour</div>
</div>
<div className="navright">
  {navLinks.map(({title,id})=>(
    <p key={id}>{title}</p>
  ))}
</div>
</nav>
  </div>
  )
}

export default Navbar