import React from 'react'

const CardAnalysis = ({logo,header,count}) => {
  return (
    <div className="col-md-4">
            <div className="card p-3 mb-2 shadow">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"><img src={logo} alt={header} /> </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="heading-total">{header}</h3>
                    <div className="mt-3">
                        <span className="text1">{count}</span>
                    </div>
                </div>
            </div>
    </div>
  )
}
export default CardAnalysis;