import React from 'react'

const CardEventAndNews =({img,title,body,date}) => {
  return (
 <div className="card mb-3 shadow" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
         <p className="card-text"><small className="text-muted">{date}</small></p>
        <p className="card-text">{body}</p>
      </div>
    </div>
  </div>
</div>
  )
}
export default  CardEventAndNews;