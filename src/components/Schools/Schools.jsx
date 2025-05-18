import React, { useState } from 'react';
import styles from './Schools.module.css';

function Schools() {
  const [schools, setSchools] = useState([
    {
      id: '1', Schoolname: 'School1', BossName: 'Boss1', Time: 'AM', Phone1: 1111, Phone2: '09******',
      books: [
        { subject: 'Math', available: 30, required: 35 },
        { subject: 'Science', available: 40, required: 40 },
        { subject: 'English', available: 20, required: 25 },
      ]
    },
    {
      id: '2', Schoolname: 'School2', BossName: 'Boss2', Time: 'PM', Phone1: 22222, Phone2: '09******',
      books: [
        { subject: 'Math', available: 25, required: 25 },
        { subject: 'Science', available: 30, required: 35 },
        { subject: 'History', available: 15, required: 20 },
      ]
    },
    {
      id: '3', Schoolname: 'School3', BossName: 'Boss3', Time: 'AM', Phone1: 33333, Phone2: '09******',
      books: [
        { subject: 'Math', available: 25, required: 25 },
        { subject: 'Science', available: 30, required: 35 },
        { subject: 'History', available: 15, required: 20 },
      ]
    },
    {
      id: '4', Schoolname: 'School4', BossName: 'Boss4', Time: 'AM', Phone1: 4444, Phone2: '09******',
      books: [
        { subject: 'Math', available: 25, required: 25 },
        { subject: 'Science', available: 30, required: 35 },
        { subject: 'History', available: 15, required: 20 },
      ]
    },
    {
      id: '5', Schoolname: 'School5', BossName: 'Boss5', Time: 'PM', Phone1: 55555, Phone2: '09******',
      books: [
        { subject: 'Math', available: 25, required: 25 },
        { subject: 'Science', available: 30, required: 35 },
        { subject: 'History', available: 15, required: 20 },
      ]
    },
    

    


  ]);

  const [selectedSchoolId, setSelectedSchoolId] = useState(null);

  const toggleDetails = (schoolId) => {
    setSelectedSchoolId(prevId => prevId === schoolId ? null : schoolId);
  };

  return (
    <>
      <div className="">
        <div className="table-responsive">
          <table className={`table ${styles.tabl}`}>
            <thead>
              <tr className="text-center border">
                <td>
                  <input type="checkbox" name="school" id="schools" />
                </td>
                <th>ID</th>
                <th>School Name</th>
                <th>Boss Name</th>
                <th>Shift Type</th>
                <th>Phone 1</th>
                <th>Phone 2</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((school) => (
                <React.Fragment key={school.id}>
                  <tr className={`border p-5 text-center ${styles.row}`}>
                    <td>
                      <input type="checkbox" name="school" id={`school-${school.id}`} />
                    </td>
                    <th scope="row">{school.id}</th>
                    <td>{school.Schoolname}</td>
                    <td>{school.BossName}</td>
                    <td>{school.Time === 'AM' ? 'Morning' : 'Evening'}</td>
                    <td>{school.Phone1}</td>
                    <td>{school.Phone2}</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm" onClick={() => toggleDetails(school.id)}>
                        {selectedSchoolId === school.id ? 'Hide Details' : 'View Details'}
                      </button>
                    </td>
                  </tr>

                  {selectedSchoolId === school.id && (
                    <tr>
                      <td colSpan="8" className="p-4">
                        <h5 className="mb-3">📚 Books</h5>
                        <div className="table-responsive">
                          <table className="table table-bordered text-center">
                            <thead className="table-secondary">
                              <tr>
                                <th>Subject</th>
                                <th>Available</th>
                                <th>Required</th>
                                <th>Missing</th>
                                <th>Extra</th>
                              </tr>
                            </thead>
                            <tbody>
                              {school.books.map((book, idx) => {
                                const missing = book.required > book.available ? book.required - book.available : 0;
                                const extra = book.available > book.required ? book.available - book.required : 0;
                                return (
                                  <tr key={idx}>
                                    <td>{book.subject}</td>
                                    <td>{book.available}</td>
                                    <td>{book.required}</td>
                                    <td>{missing}</td>
                                    <td>{extra}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Schools;
