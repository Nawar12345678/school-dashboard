import React from 'react'
import AddButton from '../Buttons/AddButton';

const Header =({headerTitle,btnName,target}) => {
  return (
   <div className='container'>
     <div className='d-flex justify-content-between align-items-center py-3'>
        <h1 style={{fontSize: "28px" ,color:'#181D26'}}>{headerTitle}</h1>
        <AddButton btnName={btnName} target={target}/>
     </div>
   </div>
  )
}

export default Header;