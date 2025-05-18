import React from 'react';
import styles from './Title.module.css';

function Title() {
  return (
    <>
        <div className="my-5 d-flex justify-content-between align-items-center">
            <div className='d-flex gap-3'>
                <select className="form-select rounded-2">
                    <option>Class</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <select className="form-select select-style rounded-2">
                    <option >Age</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

            </div>

            <div className={`d-flex gap-3 px-3 ${styles.icons}`}>
                <i className="fs-4 fa-regular fa-square-plus"></i>
                <i className="fs-4 fa-solid fa-trash"></i>
            </div>
        </div>
    </>
  )
}

export default Title
