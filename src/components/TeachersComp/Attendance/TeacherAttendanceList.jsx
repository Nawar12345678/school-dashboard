import React from "react";
import { Table } from "react-bootstrap";

const TeacherAttendanceList = () => {
  const sampleData = [
    { name: "Mr. Ali", status: "Present" },
    { name: "Ms. Sara", status: "Absent" },
    { name: "Mr. Omar", status: "Late" },
  ];

  return (
    <div className="mb-5">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance Status</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.name}</td>
              <td>{teacher.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TeacherAttendanceList;
