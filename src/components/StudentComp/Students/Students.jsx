import React, { useState } from 'react';
import styles from './Students.module.css';

function Students() {

  const [students, setStudents] = useState([
    {id: '1', name: 'omar', parent: 'mostafa', age: 20, gender: 'male', avgdeg: 3, attend: 'acc', contact: 'omar@gm.com'},
    {id: '2', name: 'laila', parent: 'hessen', age: 18, gender: 'female', avgdeg: 4, attend: 'acc', contact: 'laila@gm.com'},
    {id: '3', name: 'mohamed', parent: 'sabry', age: 23, gender: 'male', avgdeg: 2, attend: 'acc', contact: 'mohamed@gm.com'},
    {id: '4', name: 'omar', parent: 'mostafa', age: 20, gender: 'male', avgdeg: 3, attend: 'acc', contact: 'omar@gm.com'},
    {id: '5', name: 'laila', parent: 'hessen', age: 18, gender: 'female', avgdeg: 4, attend: 'acc', contact: 'laila@gm.com'},
    {id: '6', name: 'mohamed', parent: 'sabry', age: 23, gender: 'male', avgdeg: 2, attend: 'acc', contact: 'mohamed@gm.com'},
    {id: '7', name: 'omar', parent: 'mostafa', age: 20, gender: 'male', avgdeg: 3, attend: 'acc', contact: 'omar@gm.com'},
    {id: '8', name: 'laila', parent: 'hessen', age: 18, gender: 'female', avgdeg: 4, attend: 'acc', contact: 'laila@gm.com'},
    {id: '9', name: 'mohamed', parent: 'sabry', age: 23, gender: 'male', avgdeg: 2, attend: 'acc', contact: 'mohamed@gm.com'},
  ])

  return (
    <>
      <div className="">
        <div className="table-responsive">
          <table className={`table ${styles.tabl}`}>
            <thead>
              <tr className="text-center border">
                <td className="">
                  <input type="checkbox" name="student" id="student" />
                </td>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Parents</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">AvgDeg</th>
                <th scope="col">Attend</th>
                <th scope="col">Contact</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className={`border p-5 text-center ${styles.row}`}
                >
                  <td className="">
                    <input type="checkbox" name="student" id="student" />
                  </td>
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.parent}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                  <td>{student.avgdeg}</td>
                  <td>{student.attend}</td>
                  <td>{student.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Students
