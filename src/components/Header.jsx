import healthcare from '../assets/images/HealthCare.png'
import avatar from '../assets/images/avatar.png'
import { IoNotificationsSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { BsPlusSquareFill } from "react-icons/bs";
import '../styles/header.css'
const Header = () => {
    return (
        <header id='header'>
            <div id='healthcare'>
                <img src={healthcare} alt="healthcare" id='logo'/>
            </div>
            <div id='search'>
                <div id='searchbar'>
                    <FiSearch className='search-icon' style={{width:"2vw", height:"3vh"}}/>
                    <input type="text" placeholder='Search' id='input'/>
                    <IoNotificationsSharp className='notification-icon' style={{width:"2vw", height:"3vh"}}/>
                </div>
            </div>
            <div id='profile'>
                <button ><img src={avatar} alt="avatar" style={{width:"80%",height:"100%"}}/></button>
                <button style={{backgroundColor: "transparent", border: "none"}}><BsPlusSquareFill style={{width:"100%",height:"100%",color:"blue"}}/></button>
            </div>
        </header>
    );
};

export default Header;
