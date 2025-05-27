import '../styles/healthstatuscards.css'
import data from '../data/healthData'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaArrowRightLong } from "react-icons/fa6";
export default function HealthStatusCards(){
    return(
        <div id="health-cards">
            {
                data.map((data,index)=>{
                    return <div id='card' key={index}>
                        <img src={data.image} alt={data.organ} />
                        <h1>{data.organ}</h1>
                        <p>Date:{data.date}</p>
                        <ProgressBar now={data.percentage} variant={data.variant} style={{ height: '10px', borderRadius: '5px',background:"rgb(210, 207, 207)",width:"90%",marginLeft:"5%",marginBottom:"5%"}} />
                    </div>
                })
            }  
            <p id='details'>Details <FaArrowRightLong /></p>
        </div>
    )
}