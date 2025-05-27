import injection from '../assets/images/injection.png';
import eye from '../assets/images/eye.png';
import heart from '../assets/images/heart.png';
import doctor from '../assets/images/doctor.png';
let upcomingAppointments = {
    "Thursday":[
        {
            "day":"Thursday",
            "img": injection,
            "specialist":"Health checkup complete",
            "time":"11:00 AM",
        },
        {
            "day":"Thursday",
            "img": eye,
            "specialist":"Ophthalmologist",
            "time":"14:00 PM"
        }
    ],
    "Saturday":[
        {
            "day":"Saturday",
            "img": heart,
            "specialist":"Cardiologist",
            "time":"12:00 AM"
        },
        {
            "day":"Saturday",
            "img": doctor,
            "specialist":"Neurologist",
            "time":"16:00 PM"
        }
    ]
};
export default upcomingAppointments;