import React from 'react'
import './ParentsPagination.css'
import arrowLeft from '../../assets/arrow_circle_left.svg'
import arrowRight from '../../assets/arrow_circle_right.svg'
import IconButton from '@mui/material/IconButton'

const ParentsPagination = () => {
    return (
        <div className='pagination-container my-4'>
            <div>
            <p className='m-auto'>8 /1000</p>

            </div>
            <div className='d-flex align-items-center'>
                <IconButton>
                    <img src={arrowLeft} alt="arrowLeft" />
                </IconButton>
                <p className='m-auto'>1/200</p>
                <IconButton>
                    <img src={arrowRight} alt="arrowRight" />
                </IconButton>
            </div>

        </div>
    )
}

export default ParentsPagination
