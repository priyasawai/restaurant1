import React from 'react'

const MenuCard = ({menuData}) => {
  console.log(menuData);
  return (
    <>
      <div className='card-container'>
      {
      menuData.map((item)=>{
        const {id,name,category,image,description}=item;
        return(
          <div className='card'>
        <div className='card-body'>
          <span className='card-number card-circle subtle'>{id}</span>
          <span className='card-autor subtle'>{category}</span>
          <h2 className='card-title'>{name}</h2>
          <span className='card-description subtle'>
            {description}
          </span>
          <div className='card-read'>RAED</div>
           </div>
            <img src={image} alt="images" className='card-media'/> 
           <span className='card-tag subtle'>Order Now</span>
      </div>
    )
      })
    }
    </div>
    </>
  )
}

export default MenuCard

