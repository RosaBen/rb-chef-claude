import logo from "../assets/images/logo.svg"

export default function Header(){
  return(
    <header>
      <img src={logo} alt="logo of Chef Claude" />
      <h1>Chef Claude</h1>
    </header>
  )
}