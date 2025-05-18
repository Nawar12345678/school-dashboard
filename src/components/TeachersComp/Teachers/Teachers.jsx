import React, { useState } from 'react';
import styles from './Teachers.module.css';
import TeacherImg1 from '../../../assets/teacher1.jpg';
import TeacherImg2 from '../../../assets/teacher2.jpg';
import ModalButtons from '../../Buttons/ModalButtons';

function Teachers() {

  const [teacherImg, setTeacherImg] = useState(null);

  function getPicture(e) {
    let picture = e.target.value;
    setTeacherImg(picture);
  }

  

  const [teachers, setTeachers] = useState([
    { image: TeacherImg1, name: 'Mazen', subject: 'science', grade: 'A+', classNum: '2-3', userName: 'mazen', pass: 'mazen11' },
    { image: TeacherImg2, name: 'Abderhman', subject: 'math', grade: 'B+', classNum: '1-5', userName: 'momtaz', pass: 'momtaz22' },
  ])

  return (
    <>
      <div className="my-4">
        <div className="row">
          {teachers.map((teacher) => (
            <div key={teacher.userName} className="col-lg-2 col-md-4">
              <div className={`${styles.teacher} p-3 rounded-2 text-center overflow-hidden my-2`}>
                <img
                  src={teacher.image}
                  className="w-100"
                  alt={`${teacher.name} teacher`}
                />
                <h3 className="fs-4 my-3">{teacher.name}</h3>
                <p className="fs-5">class: {teacher.classNum}</p>
              </div>
            </div>
          ))}
          <div className={`col-lg-2 rounded-2 col-md-4`}>
            <div className={`${styles.add} p-3 rounded-2`}>
              <a className="add p-2 btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-plus fs-3"></i>
                <p className="mt-3">Add Teacher</p>
              </a>
            </div>
          </div>
        </div>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <form id="add-form">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="my-2">
                                  <label className='w-100' htmlFor="image">
                                    <p className='mb-0'>Add teacher picture</p>
                                    <div className={`${styles.upload} mt-1 border rounded-1 d-flex align-items-center justify-content-between`}>
                                      <p className='mb-0 p-2'>{teacherImg ? teacherImg : 'Upload picture'}</p>
                                      <div className={`w-25 p-2 ${styles.uploadBtn}`}><i className="fa-solid mx-2 fa-upload"></i>Upload</div>
                                    </div>
                                  </label>
                                  <input onChange={getPicture} placeholder="Upload picture" name="image" id='image' className="form-control mt-1 py-2 d-none" type="file" />
                                </div>
                                <div className="my-2">
                                  <label htmlFor="name">Teacher name</label>
                                  <input placeholder="Enter teacher full name" name="name" id='name' className="form-control mt-1 py-2" type="text" />
                                </div>
                                <div className="my-2">
                                  <label htmlFor="subject">Subject</label>
                                  <input placeholder="subject" name="subject" id='subject' className="form-control mt-1 py-2" type="text" />
                                </div>
                                <div className="my-2">
                                  <label htmlFor="grade">Grade</label>
                                  <input placeholder="Select grade" name="grade" id='grade' className="form-control mt-1 py-2" type="text" />
                                </div>
                                <div className="my-2">
                                  <label htmlFor="classNum">Class number</label>
                                  <input placeholder="Select class number" name="classNum" id='classNum' className="form-control mt-1 py-2" type="text" />
                                </div>
                                <div className="my-2">
                                  <label htmlFor="userName">Username</label>
                                  <input placeholder="Enter username" name="userName" id='userName' className="form-control mt-1 py-2" type="text" />
                                </div>
                                <div className="my-2">
                                  <label htmlFor="pass">Password</label>
                                  <input placeholder="Enter password" name="pass" id='pass' className="form-control mt-1 py-2" type="password" />
                                </div>
                            </div>
                            <ModalButtons/>
                        </div>
                    </div>
                </form>
            </div>
      </div>
    </>
  );
}

export default Teachers
