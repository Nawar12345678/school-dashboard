import React from 'react';
import styles from './Subtitle.module.css';

function Subtitle({ title, icon }) {
  return (
    <>
        <div className={styles.title}>
                <div className="fs-3">
                  {icon}
                </div>
                <h3 className='fs-4 mx-3 fw-bolder'>{title}</h3>
                <i className="fs-4 fa-solid fa-caret-down"></i>
        </div>
    </>
  )
}

export default Subtitle
