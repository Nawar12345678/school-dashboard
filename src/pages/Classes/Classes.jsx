import React from 'react'
import "./Classes.css"
import Cell from '../../components/Classes/Cell'



export default function Classes() {
    return (
        <section className='container classes'>

            {/* ---------- choose ---------- */}

            <div className="choose mt-5 mb-3">
                <select className="level">
                    <option value="Choose level">Choose level</option>
                </select>
                <select className='class'>
                    <option value="Choose class">Choose class</option>
                </select>
            </div>

            {/* ----------- table ---------- */}

            <table className='classes-table'>

                <tr> {/* fixed */}
                    <th className='day-duration'>
                        <p className='day'>Day</p>
                        <div className="seperator"></div>
                        <p className='duration'>Duration</p>
                    </th>
                    <th>8 AM : 10 AM</th>
                    <th>10 AM : 12 PM</th>
                    <th>12 AM : 2 PM</th>
                    <th>2 AM : 4 AM</th>
                    <th>2 AM : 4 AM</th>
                    <th>2 AM : 4 AM</th>
                </tr>

                {/* Sunday */}
                <tr>
                    <td>Sunday</td> {/* fixed */}
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell />
                </tr>
                {/* Monday */}
                <tr>
                    <td>Monday</td> {/* fixed */}
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                </tr>
                {/* Tuesday */}
                <tr>
                    <td>Tuesday</td> {/* fixed */}
                    <Cell />
                    <Cell />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                </tr>
                {/* Wednesday */}
                <tr>
                    <td>Wednesday</td> {/* fixed */}
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell />
                    <Cell />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                </tr>
                {/* Thursday */}
                <tr>
                    <td>Thursday</td> {/* fixed */}
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                    <Cell subject={'arabic'} teacher={'ahmed farag'} />
                </tr>



            </table>

            {/* ---------- footer ---------- */}

            <footer>
                <div className="class">
                    <p>Class: </p>
                    <span>2 / 3</span>
                </div>
                <div className="students-number">
                    <p>Number of students: </p>
                    <span>35</span>
                </div>
                <div className="semester">
                    <p>Semester 1 in 2023</p>
                </div>
            </footer>

        </section>
    )
}
