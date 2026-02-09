import React, { useContext, useEffect } from 'react';
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from '../context/UserContext';
import { food_items } from '../Food';
import { useSelector } from 'react-redux';

function Nav() {
  let { input, setInput, cate ,setCate , cart ,setCart} = useContext(dataContext); 

  useEffect(()=>{
   let newlist = food_items.filter((item)=>item.food_name.toLowerCase().includes(input))
   setCate (newlist)
  },[input])

  let items = useSelector(state=>state.cart)
  
  

  return (
    <div className='w-full h-[100px] flex justify-between px-5 items-center'>
      <div className='w-[65px] h-[65px] bg-white items-center justify-center flex rounded-md shadow-md border-2 border-green-400'>
        <MdFastfood className='w-[30px] h-[30px] text-green-500' />
      </div>

      <form className='w-[40%] h-[60px] bg-white flex items-center md:w-[70%] gap-5 px-5 rounded-md shadow-md'onSubmit={(e)=>e.preventDefault()} >
        <IoSearch className='w-[20px] h-[20px] text-green-500' />
        <input
          type="text"
          placeholder='Search Item....'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='w-[100%] outline-none text-[16px] md:text-[20px]'
        />
      </form>

      <div className='w-[65px] h-[65px] bg-white items-center justify-center flex rounded-md shadow-md relative cursor-pointer border-2 border-green-400 ' onClick={()=>setCart(true)}>
    
        <span className='absolute top-[-2px] right-2 text-green-500 font-bold '>{items.length}</span>
        <FiShoppingBag className='w-[30px] h-[30px] text-green-500  ' />
        </div>
      </div>
  
  );
}

export default Nav;
