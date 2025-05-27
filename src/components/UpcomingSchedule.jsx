import '../styles/upcomingschedule.css'
import SimpleAppointmentCard from './SimpleAppointmentCard'
export default function UpcomingSchedule({upcomingAppointments}) {
    const days = Object.keys(upcomingAppointments);
    return(
        <div id="upcomingschedule">
            <div className='appointment-header'>The Upcoming Schedule</div>
            {
                days.map((day)=>{
                    return <div className='appointment-cards' key={day}>
                        <div className='appointment-day'>On {day}</div>
                        <div className='appointment-details'>
                            <SimpleAppointmentCard data={upcomingAppointments[day]} />
                        </div>
                    </div>
                })
            }
        </div>
    )
}