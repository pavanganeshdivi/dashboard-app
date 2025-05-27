import '../styles/dashboardoverview.css';
import Anatomy from './Anatomy';
import HealthStatusCards from './HealthStatusCards';
import { IoIosArrowDown } from "react-icons/io";

export default function DashboardOverview(){
    return(
        <div id="dashboardoverview">
            <div id='dashhead'>
                <h1 style={{fontSize: "2vw"}}>Dashboard</h1>
                <p style={{fontSize: "0.8vw",fontWeight:"700"}}>This week <IoIosArrowDown /></p>
            </div>
            <div id='anatomy-wrap'>
                <Anatomy/>
            </div>
            <div id="health-card-wrap">
                <HealthStatusCards/>
            </div>
        </div>
    )
}