import React, { useState } from 'react';
import styles from './Title.module.css';

function SchoolsTitle() {
  const [teacherImg, setTeacherImg] = useState('');

  const getPicture = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTeacherImg(file.name);
    }
  };

  return (
    <>
      <div className="my-5 d-flex justify-content-between align-items-center">
        <div className={`d-flex gap-3 px-3 ${styles.icons}`}>
          <i
            className="fs-4 fa-regular fa-square-plus"
            role="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          ></i>

          <i className="fs-4 fa-solid fa-trash"></i>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form id="add-form">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="my-2">
                
                  <input
                    onChange={getPicture}
                    name="image"
                    id="image"
                    className="form-control mt-1 py-2 d-none"
                    type="file"
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="name">School name</label>
                  <input
                    placeholder="Enter teacher full name"
                    name="name"
                    id="name"
                    className="form-control mt-1 py-2"
                    type="text"
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="BossName">Boss Name</label>
                  <input
                    placeholder="BossName"
                    name="BossName"
                    id="bossname"
                    className="form-control mt-1 py-2"
                    type="text"
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="time">Shift Type</label>
                  <input
                    placeholder="Select grade"
                    name="time"
                    id="time"
                    className="form-control mt-1 py-2"
                    type="text"
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="Phone1">Phone1</label>
                  <input
                    placeholder="Enter your Phone Number"
                    name="Phone1"
                    id="Phone1"
                    className="form-control mt-1 py-2"
                    type="text"
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="Phone2">Phone2</label>
                  <input
                    placeholder="Enter your Phone Number"
                    name="Phone2"
                    id="Phone2"
                    className="form-control mt-1 py-2"
                    type="text"
                  />
                </div>
               
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SchoolsTitle;
