import '../styles/dashboard.css'
import ActivityFeed from './ActivityFeed'
import CalendarView from './CalendarView'
import DashboardOverview from './DashboardOverview'
import UpcomingSchedule from './UpcomingSchedule'
import calendarData from '../data/calendarData.js'
import upcomingAppointments from '../data/upcomingAppointments.js'
export default function DashboardContent(){
    return(
        <div id="dashboard">
            <div id='dashContainer'>
                <DashboardOverview/>
                <ActivityFeed/>
            </div>
            <div id='calendarConatiner'>
                <CalendarView calendarData={calendarData} />
                <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
            </div>
        </div>
    )
}