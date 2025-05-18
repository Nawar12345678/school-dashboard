import React from 'react'
import './parentsFilter.css'
import add from '../../assets/add_box.svg';
import delete1 from '../../assets/delete.svg';
import IconButton from '@mui/material/IconButton'

const ParentsFilter = () => {
    return (
        <div className='d-flex justify-content-between my-5'>
            <div className='d-flex gap-3'>
                <select className="form-select">
                    <option>Student Number</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <select className="form-select select-style" >
                    <option >Gender</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

            </div>
            <div className='d-flex gap-2 me-5'>
                <IconButton aria-label="addIcon" >
                    <img src={add} alt="addIcon" />
                </IconButton>        
                <IconButton aria-label="addIcon" >
                    <img src={delete1} alt="addIcon" />
                </IconButton>
            </div>

        </div>
    )
}

export default ParentsFilter
