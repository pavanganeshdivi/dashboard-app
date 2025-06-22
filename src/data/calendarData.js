import tooth from '../assets/images/tooth.png';
import arm from '../assets/images/arm.png';
let calendarData = {
  "month": "May 2020",
  "data":[
    {
        day:"Mon",
        date:"25",
        times: ["10:00", "11:00", "12:00"]
    },
    {
        day:"Tues",
        date:"26",
        times: ["08:00", "09:00", "10:00"]
    },
    {
        day:"Wed",
        date:"27",
        times: ["12:00", "----", "13:00"]
    },
    {
        day:"Thurs",
        date:"28",
        times: ["10:00", "11:00", "----"]
    },
    {
        day:"Fri",
        date:"29",
        times: ["----", "14:00", "16:00"]
    }
    ,
    {
        day:"Sat",
        date:"30",
        times: ["12:00", "14:00", "15:00"]
    },
    {
        day:"Sun",
        date:"31",
        times: ["09:00", "10:00", "11:00"]
    }
  ],
  "appointments": [{
        "img": tooth,
        "specialist":"Dentist",
        "time":"09:00-11:00",
        "doctor":"Dr. Cameron Williamson",
    },
    {
        "img": arm,
        "specialist":"Physiotherapisy Appointment",
        "time":"11:00-12:00",
        "doctor":"Dr. Kevin Djones"
    }
  ]
}
export default calendarData;
