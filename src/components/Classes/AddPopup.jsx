import React from 'react'
import "./AddPopup.css"

export default function AddPopup({ setAddPopupActive }) {
    return (
        <form action="" className='add-popup-form' onSubmit={(e) => e.preventDefault()}>
            <div className="row">
                <p>Add Subject</p>
                <select name="" id="">
                    <option value="">Select Subject</option>
                </select>
            </div>
            <div className="row">
                <p >Add teacher's name</p>
                <input type="text" placeholder="Enter the teacher's full name" />
            </div>
            <div className="btns">
                <button className='cancel' onClick={() => setAddPopupActive(false)}>Cancel</button>
                <button className='add' type='submit'>Add</button>
            </div>
        </form>
    )
}
