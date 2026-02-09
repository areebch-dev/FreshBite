import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Card( { id , type , name , price , image} ) {

  let dispatch = useDispatch()


  return (
    <div className=' w-[300px] h-[400px] bg-white  p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 hover:border-green-300'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
   <img src={image} alt="" className=' object-cover'/>
        </div>
        <div className=' text-2xl font-semibold'>
{name}
        </div>
        <div className='flex justify-between items-center'>
            <div className=' text-xl font-semibold text-green-500'>Rs {price}/-</div>
            <div className=' flex justify-center items-center gap-2 text-green-500 font-semibold'>{type==="veg"?<LuLeafyGreen />:<GiChickenOven />
            }<span>{type}</span></div>
        </div>
        <button className='w-[100%] bg-green-500 text-white p-2 rounded-lg hover:bg-green-400 transition-all text-lg font-semibold'  onClick={() => {
    dispatch(AddItem({ id, name, price, image, qty: 1 }));
    toast.success("Item added to dish!");
  }}>Add to Dish</button>
    </div>
  )
}

export default Card