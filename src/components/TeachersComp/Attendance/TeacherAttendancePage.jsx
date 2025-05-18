import React from "react";
import TeacherAttendanceList from "./TeacherAttendanceList";
import Subtitle from "../Subtitle/Subtitle";

function TeacherAttendancePage() {
  return (
    <div className="container">
      <Subtitle
        title="Science - Attendance"
        icon={<i className="fa-solid fa-flask"></i>}
      />
      <TeacherAttendanceList />

      <Subtitle
        title="Math - Attendance"
        icon={<i className="fa-solid fa-plus-minus"></i>}
      />
      <TeacherAttendanceList />

      <Subtitle
        title="English - Attendance"
        icon={<i className="fa-solid fa-language"></i>}
      />
      <TeacherAttendanceList />

      <Subtitle
        title="History - Attendance"
        icon={<i className="fa-solid fa-landmark"></i>}
      />
      <TeacherAttendanceList />
    </div>
  );
}

export default TeacherAttendancePage;
