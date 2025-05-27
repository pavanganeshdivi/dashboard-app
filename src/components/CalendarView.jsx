import '../styles/calendarview.css'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function CalendarView({ calendarData }) {
    const { month, data, appointments } = calendarData; 
    return(
        <div id="calendarView">
            <div className='calendar-head'>
                <div className='calendar-title'>{month}</div>
                <div className='calendar-navigation'><FaLongArrowAltLeft /> <FaLongArrowAltRight /></div>
            </div>
            <div className='calendar-body'>
                {
                    data.map((day, index) => (
                        <div style={(day.day === "Tues") ? {width:"13%",height:"90%",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",backgroundColor:"rgb(207, 232, 239)",borderRadius:"0.7vw"} : {width:"13%",height:"90%",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}} key={index}>
                            <p style={{fontSize:'0.8vw',margin:"0%",padding:"0%",fontWeight:'600'}}>{day.day}</p>
                            <p style={{fontSize:'1.4vw',fontWeight:"650",margin:"0%",padding:"0%"}}>{day.date}</p>
                            {
                                day.times.map((time, index) => (
                                    <p key={index} style={(time === "09:00" &&  day.day === "Tues") ? {padding:"0%",margin:"0%",fontSize:"0.8vw",background:"#3839a1",color:"white",width:"70%",textAlign:'center',borderRadius:"0.4vw",fontWeight:"600"} : {padding:"0%",margin:"0%",fontSize:"0.8vw",fontWeight:"600"}}>{time}</p>
                                ))
                            }    
                        </div>
                    ))
                }
            </div>
            <div className='calendar-appointment'>
                {
                    appointments.map((appointment, index) => (
                        <div className='appointment' style={(index === 0) ? {backgroundColor: "#3839a1",color:"white"} : {}} key={index}>
                            <div style={{width:"100%",height:"40%",display:'flex',justifyContent:"space-between",flexWrap:"wrap",padding:"0.2vw"}}>{appointment.specialist} <img src={appointment.img} alt={appointment.specialist} /></div>
                            <div style={{width:"96%",height:"30%",display:'flex',alignItems:"center",fontSize:"0.8vw"}}>{appointment.time}</div>
                            <div style={{width:"96%",height:"30%",display:'flex',alignItems:"center",fontSize:"0.8vw"}}>{appointment.doctor}</div>
                        </div>
                    ))
                }    
            </div>
        </div>
    )
}