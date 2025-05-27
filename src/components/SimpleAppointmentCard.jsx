import '../styles/simpleappointmentcard.css'
export default function SimpleAppointmentCard({data}) {
    return(
        <div className="cards">
            {
                data.map((appointment,index)=>{
                    return(
                        <div id="SimpleAppointmentCard" key={index}> 
                            <div className='specialist-info' ><span>{appointment.specialist}</span> <img src={appointment.img} alt={appointment.specialist} /></div>
                            <div className='appointment-time'>{appointment.time}</div>         
                        </div>  
                    )
                })
            }
        </div>
    )
}