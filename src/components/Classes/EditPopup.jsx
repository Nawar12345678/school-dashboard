import React from 'react'
import { AiOutlineDelete } from "react-icons/ai"
import { LiaEdit } from "react-icons/lia"
import "./EditPopup.css"

export default function EditPopup() {

    return (
        <div className="edit-btns">
            <button onClick={() => console.log('edit btn clicked')}>Edit <LiaEdit /></button> {/* TODO - change edit icon */}
            <button onClick={() => console.log('delete btn clicked')}>Delete <AiOutlineDelete /></button>
        </div>
    )
}
