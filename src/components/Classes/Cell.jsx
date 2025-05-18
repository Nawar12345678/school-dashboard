import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import { LiaEdit } from "react-icons/lia"
import EditPopup from './EditPopup'
import AddPopup from './AddPopup'
import "./Cell.css"

export default function Cell({ subject, teacher }) {
    const [editPopupActive, setEditPopupActive] = useState(false)
    const [addPopupActive, setAddPopupActive] = useState(false)

    // ! filled cell
    if (subject && teacher) {
        return <td>
            <div className="content">
                <div className="info">
                    <p>{subject}</p>
                    <p>{teacher}</p>
                </div>
                <button className='edit' onClick={() => setEditPopupActive(true)}><LiaEdit /></button>
            </div>
            <div className={`popup edit-popup ${editPopupActive && 'active'}`} onClick={() => setEditPopupActive(false)}>
            </div>
            {editPopupActive && <EditPopup />}
        </td>
    }

    // ! empty cell
    return (
        <td>
            <button className='plus' onClick={() => setAddPopupActive(true)}><AiOutlinePlus /></button>
            <div className={`popup add-popup ${addPopupActive && 'active'}`} onClick={() => setAddPopupActive(false)}>
            </div>
            {addPopupActive && <AddPopup setAddPopupActive={setAddPopupActive} />}
        </td>
    )
}
