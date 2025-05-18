import "./Dashboard.css";
import students from "../../assets/students-on-lecture-svgrepo.svg";
import teacher from "../../assets/teacher-social-svgrepo.svg";
import classLogo from "../../assets/class-scene-svgrepo.svg";
import LineChart from "../../components/Charts/Line";
import CardAnalysis from "../../components/Card/CardAnalysis";
import BasicDateCalendar from "../../components/Calender/Calendar";
import DropdownButton from "../../components/Buttons/DropDown";
import PieChartComponent from "../../components/Charts/ChartPie";

const Dashboard = () => {
  const years = Array.from({ length: 5 }, (_, index) => new Date().getFullYear() - index);
  const grade = ["Grade 1", "Grade 2", "Grade 3"];
  const StudentClass = ["Class 1", "Class 2", "Class 3"];

  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-sm-12 col-md-7 col-lg-9">
          <div className="row cards-analysis">
            <CardAnalysis logo={students} header="Total Students" count="5.k" />
            <CardAnalysis logo={teacher} header="Total Teachers" count="500" />
            <CardAnalysis logo={classLogo} header="Total Classes" count="350" />
          </div>

          <div className="row chart">
            <div className="col p-3">
              <div className="chart-header d-flex justify-content-between align-items-center">
                <h3 className="chart-title">Total Earnings</h3>
                <DropdownButton label="2023" items={years} buttonClass="year-btn" />
              </div>
              <LineChart />
            </div>
          </div>

          {/* Statistics Section */}
          <div className="row statistics-section mt-4">
  <div className="col-12">
    <div className="card p-4 shadow">
      <h2 className="mb-4">📊 Statistics</h2>
      <div className="row g-4">

        <div className="col-md-6 col-lg-6">
          <div className="card p-4 shadow-sm h-100" style={{ backgroundColor: "#f0f8ff" }}>
            <h5 className="text-center mb-3">Students by Stage</h5>
            <div style={{ height: 200 }}>
              <PieChartComponent />
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
          <div className="card p-4 shadow-sm h-100" style={{ backgroundColor: "#fff3cd" }}>
            <h5 className="text-center mb-3">Teachers by Department</h5>
            <div style={{ height: 200 }}>
              <LineChart />
            </div>
          </div>
        </div>

      

        <div className="col-md-6 col-lg-6">
          <div className="card p-4 shadow-sm h-100" style={{ backgroundColor: "#fef7fb" }}>
            <h5 className="text-center mb-3">Class Sessions</h5>
            <div style={{ height: 250 }}>
              <LineChart />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 ">
          <div className="card p-4 shadow-sm h-100" style={{ backgroundColor: "#e6ffed" }}>
            <h5 className="text-center mb-3">Attendance Overview</h5>
            <div style={{ height: 200 }}>
             <PieChartComponent /> 
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
          <div className="card p-4 shadow-sm h-100" style={{ backgroundColor: "#e0ecff" }}>
            <h5 className="text-center mb-3">Success & Excellence</h5>
            <div className="d-flex justify-content-around align-items-center mt-3">
              <div className="text-center">
                <p>Success Rate</p>
                <div className="progress-circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 100, height: 100 }}>
                  <span>85%</span>
                </div>
              </div>
              <div className="text-center">
                <p>Excellence Rate</p>
                <div className="progress-circle bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 100, height: 100 }}>
                  <span>45%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


          <div className="row student-grade">
            <div className="col-md-12 col-lg-6">
              <div className="card p-4 my-3 mx-2" style={{ backgroundColor: "#EFF4FE" }}>
                <div className="card-title mb-3">
                  <h2 className="title">Students Performance</h2>
                  <DropdownButton label="Grade 1" items={grade} buttonClass="grade-btn" />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="class-title">Class A</h5>
                  <div className="d-flex flex-column align-items-center info">
                    <p>Average Grades</p>
                    <span>90%</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="class-title">Class B</h5>
                  <div className="d-flex flex-column align-items-center info">
                    <p>Average Grades</p>
                    <span>90%</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="class-title">Class C</h5>
                  <div className="d-flex flex-column align-items-center info">
                    <p>Average Grades</p>
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="card p-4 my-3 mx-2" style={{ backgroundColor: "#EFF4FE" }}>
                <div className="card-title mb-3 d-flex flex-column align-items-center justify-content-center">
                  <h2 className="title">Students Attendance</h2>
                  <div className="d-flex justify-content-between">
                    <DropdownButton label="Grade 1" items={grade} buttonClass="grade-btn" />
                    <DropdownButton label="Grade 1" items={StudentClass} buttonClass="StudentClass-btn" />
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <PieChartComponent />
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-12">
              <div className="card shadow-sm p-4">
                <h4 className="mb-3">Teacher Rewards</h4>
                <ul className="list-unstyled d-flex flex-wrap gap-3">
                  <li>🏆 Mr. Ali - Best Math Teacher</li>
                  <li>🏅 Ms. Sara - Attendance Excellence</li>
                  <li>🎖️ Mr. Omar - Innovation in Teaching</li>
                </ul>
              </div>
            </div>

            <div className="col-12">
              <div className="card shadow-sm p-4">
                <h4 className="mb-3">Teacher Attendance</h4>
                <ul className="list-unstyled d-flex flex-wrap gap-3">
                  <li>✅ Mr. Ahmed - Present</li>
                  <li>❌ Ms. Nada - Absent</li>
                  <li>✅ Mr. Youssef - Present</li>
                </ul>
              </div>
            </div>

            <div className="col-12">
              <div className="card shadow-sm p-4 d-flex align-items-center justify-content-center" style={{ height: "300px", backgroundColor: "#F8F9FA" }}>
                <h4 className="mb-3">Sports Activity</h4>
                <div className="position-relative" style={{ width: "120px", height: "120px", borderRadius: "50%", backgroundColor: "#d9d9d9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fa-solid fa-play fa-2x" style={{ color: "#fff" }}></i>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="card shadow-sm p-4">
                <h4 className="mb-3">Complaints</h4>
                <ul className="list-unstyled d-flex flex-wrap gap-3">
                  <li>📢 Loud noise in class 3B</li>
                  <li>📡 Internet outage in lab</li>
                  <li>⏱️ Teacher delay in grade 2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-5 col-lg-3">
          <BasicDateCalendar />
          <div className="card event mt-4 shadow">
            <h2 className="event-title">Events</h2>
            <div className="card-body">
              <h5 className="card-title event">Final Exams</h5>
              <h6 className="card-subtitle event mb-2 text-muted">Upcoming on 15th June</h6>
            </div>
            <div className="card-body">
              <h5 className="card-title event">School Trib</h5>
              <h6 className="card-subtitle event mb-2 text-muted">Class 6A on 30th June</h6>
            </div>
            <div className="card-body">
              <h5 className="card-title event">Tedx Speak</h5>
              <h6 className="card-subtitle event mb-2 text-muted">Upcoming on 15th June</h6>
            </div>
            <div className="card-body">
              <h5 className="card-title event">Summer Training</h5>
              <h6 className="card-subtitle event mb-2 text-muted">Upcoming on 15th June</h6>
            </div>
            <div className="card-body">
              <h5 className="card-title event">Tedx Speak</h5>
              <h6 className="card-subtitle event mb-2 text-muted">Upcoming on 15th June</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
