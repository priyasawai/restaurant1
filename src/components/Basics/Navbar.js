import React from 'react'
const Navbar = ({filterItem,menuList}) => {
  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
        {
          menuList.map((currItem)=>{
            return <button className='btn-group-item'  onClick={()=>{filterItem(currItem)}}>{currItem}</button>
          })
        }
        
      </div>
    </nav>
    </>
    )
}

export default Navbar
