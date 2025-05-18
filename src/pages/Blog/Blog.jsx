import React, { useState } from "react"
import BasicDateCalendar from "../../components/Calender/Calendar";
import Header from "../../components/Header/Header";
import CardEventAndNews from "../../components/Card/CardEventAndNews";
import { eventsData } from '../../constants'
import './Blog.css'
import CardHoliday from "../../components/Card/CardHoliday";
const Blog = () => {
  const [events, setEvent] = useState(eventsData)
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-sm-12 col-md-7 col-lg-9">
        <div className="row event">
           <Header headerTitle="Event of this month" btnName="Event" target="#Add-event-model"/>
           {events.map((event) => (
                 <CardEventAndNews 
                    img={event.image} 
                    title={event.title} 
                    date={event.date} 
                    body={event.body} 
                    key={event.id}
                 />
           ))}

        </div>
        <div className="row news">
           <Header headerTitle="News of this month" btnName="News"  target="#Add-new-model"/>
           {events.map((event) => (
                 <CardEventAndNews 
                    img={event.image} 
                    title={event.title} 
                    date={event.date} 
                    body={event.body} 
                    key={event.id}
                 />
           ))}
        </div>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-3">
          <BasicDateCalendar calenderBackgColor='#efefef' buttonBackgColor='#fff' borderStyle='1px solid #1246AC' selectedDateColor= '#000'/>
          <div className="card mt-4 holidays">
            <h4 className="Holidays-title">Holidays of this month</h4>
            <CardHoliday title='Sinai Liberation Day' date='20 December'/>
            <CardHoliday title='Sinai Liberation Day' date='20 December'/>
            <CardHoliday title='Sinai Liberation Day' date='20 December'/>
            <CardHoliday title='Sinai Liberation Day' date='20 December'/>
            <CardHoliday title='Sinai Liberation Day' date='20 December'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
