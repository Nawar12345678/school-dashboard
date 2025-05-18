import React from 'react'
import { parentTableFields } from '../../constants'
import { tempParentsTableData } from '../../constants'
import './parentsTable.css'
const ParentsTable = () => {
    return (
        <table className="table parents-table">

            <thead>
                <tr>
                    {parentTableFields.map((field) => (
                        <th className='th' scope="col">{field}</th>
                    ))}

                </tr>
            </thead>
            <tbody>
                {tempParentsTableData.map((data) => (
                    <tr key={data.id}>
                    <td className='align-middle'> <img src={data.picture} alt="dataPic"/></td>
                    <td className='align-middle'>{data.name}</td>
                    <td className='align-middle'>{data.username}</td>
                    <td className='align-middle'>{data.password}</td>
                    <td className='align-middle'>{data.gender}</td>
                    <td className='align-middle'>{data.studentNumber}</td>
                    <td className='align-middle'>{data.address}</td>
                    <td className='align-middle'>{data.phoneNumber}</td>
                    <td className='align-middle'>{data.paymentMethod}</td>
                </tr>

                ))}
                
            </tbody>
        </table>
    )
}

export default ParentsTable
