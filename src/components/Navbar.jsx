import logo from '../../assets/AirBnBLogo.svg'

export default function Navbar(){
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
        </nav>
    )
}