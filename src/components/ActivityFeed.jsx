import '../styles/activityfeed.css'
export default function ActivityFeed(){
    return(
        <div id="activityfeed">
            <div className="activity-section">
                <div className="activity-header-container">
                    <div className="activity-header">Activity</div>
                    <div className="activity-subtext">3 appointments on this week</div>
                </div>
                <div className="bar-chart">
                    <div className="bar monday"></div>
                    <div className="bar tuesday"></div>
                    <div className="bar wednesday"></div>
                    <div className="bar thursday"></div>
                    <div className="bar friday"></div>
                    <div className="bar saturday"></div>
                    <div className="bar sunday"></div>
                </div>
                <div className='activity-footer'>
                    <p style={{marginLeft:"3.3vw"}}>Mon</p>
                    <p>Tues</p>
                    <p>Wed</p>
                    <p>Thurs</p>
                    <p>Fri</p>
                    <p>Sat</p>
                    <p>Sun</p>
                </div>
            </div>
        </div>
    )
}
/* activityfeed.css */

