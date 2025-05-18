import React from 'react'
import styles from './ModalButtons.module.css';
export default function ModalButtons() {
  return (
    <div className="px-3 mb-3 d-flex gap-3">
            <button type="button" className={`w-50 py-2 fw-bold rounded-2 ${styles.cancelBtn}`} data-bs-dismiss="modal" aria-label="Close">Cancel</button>
            <button data-bs-dismiss="modal" type="submit" className={`w-50 py-2 fw-bold rounded-2 ${styles.addBtn}`}>Add</button>
    </div>
  )
}
