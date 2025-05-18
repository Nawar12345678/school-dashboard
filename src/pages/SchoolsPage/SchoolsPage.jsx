import React from 'react'
import ParentsPagination from '../../components/ParentsPagination/ParentsPagination.jsx';
import SchoolsTitle from '../../components/StudentComp/Title/SchoolsTitle.jsx';
import Schools from '../../components/Schools/Schools.jsx';

const SchoolsPage = () => {
    return (
        <div className="container">
        <SchoolsTitle />
        <Schools />
        <ParentsPagination />
      </div>
    )
}

export default SchoolsPage
