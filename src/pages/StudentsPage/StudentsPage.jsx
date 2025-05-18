import React from 'react'
import Title from '../../components/StudentComp/Title/Title'
import Students from '../../components/StudentComp/Students/Students'
import ParentsPagination from '../../components/ParentsPagination/ParentsPagination';

function StudentsPage() {
  return (
    <>
      <div className="container">
        <Title />
        <Students />
        <ParentsPagination />
      </div>
    </>
  );
}

export default StudentsPage
