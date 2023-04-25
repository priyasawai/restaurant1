import{React,useState} from 'react'
import './Style.css';
import Menu from '../../menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
//import Navbar from './Navbar';
const UniquList= [...new Set(Menu.map((item)=>{
  return item.category;
})),"All"]
console.log(UniquList);
const Restaurant = () => {
const[menuData,setMenuData]=useState(Menu);
const[menuList,setMenuList]=useState(UniquList)
const filterItem=(category)=>{
  if(category==="All"){
    setMenuData(Menu);
    return;
  }
  const updatedList=Menu.filter((currItem)=>{
    return currItem.category===category;
  })
  setMenuData(updatedList);
}
//console.log(menuData);
  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant

