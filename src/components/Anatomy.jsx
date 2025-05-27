import '../styles/anatomy.css'
import anotomy from '../assets/images/human-anatomy.png';
export default function Anatomy(){
    return(
        <div id="anatomy">
            <div className="status heart">❤️ HealthyHeart</div>
            <div id="anatomy-bg"> 
                <img src={anotomy} alt="anotomy" />
            </div>
            <div className="status leg">🦵🏻 HealthyLeg</div>
        </div>
    )
}