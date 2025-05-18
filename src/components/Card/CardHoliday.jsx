import React from 'react'


const CardHoliday = ({title,date}) => {
  return (
    <div className='card mb-2'>
         <div className="card-body">
              <h5 className="card-title event">{title}</h5>
              <h6 className="card-subtitle event mb-2 text-muted">
                {date}
              </h6>
        </div>
    </div>
  )
}
export default CardHoliday;
