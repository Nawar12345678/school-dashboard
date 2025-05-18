import React from 'react'
import ParentsTable from '../../components/ParentsTable/ParentsTable.jsx'
import ParentsFilter from '../../components/ParentsFilter/ParentsFilter.jsx'
import './Parents.css' ;
import ParentsPagination from '../../components/ParentsPagination/ParentsPagination.jsx';

const Parents = () => {
    return (
        <section className='container'> 
            <ParentsFilter />
            <div className='table-wrapper' id='table-wrapper'>
                <ParentsTable/>
                <ParentsPagination />
            </div>
        </section>
    )
}

export default Parents
