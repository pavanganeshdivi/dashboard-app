import '../styles/sidebar.css'
import { MdSpaceDashboard } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { FaNotesMedical } from "react-icons/fa6";
import { TbGraphFilled } from "react-icons/tb";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FcSettings } from "react-icons/fc";
export default function Sidebar(){
    return(
        <aside id="sidebar">
            <div className='sidebar-wrap'style={{height:"40%"}}>
                <p className='sidebar-title' >General</p>
                <p className='sidebar-item dashboard'> <MdSpaceDashboard />  DashBoard</p>
                <p className='sidebar-item'><MdHistory /> History</p>
                <p className='sidebar-item'><LuCalendarDays /> Calendar</p>
                <p className='sidebar-item'><FaNotesMedical /> Appointments</p>
                <p className='sidebar-item'><TbGraphFilled /> Statistics</p>
            </div>
            <div className='sidebar-wrap' style={{height:"15%"}}>
                <p className='sidebar-title' >Tools</p>
                <p className='sidebar-item'><IoChatbubbleEllipses /> Chat</p>
                <p className='sidebar-item'><IoCall /> Support</p>
            </div>
            <div className='sidebar-wrap' style={{height:"30%",justifyContent:"flex-end"}}>
                <p className='sidebar-item' > <FcSettings />  Settings</p>
            </div>
        </aside>
    )
}