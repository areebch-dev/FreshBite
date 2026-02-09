import React from 'react'
import Image1 from "../assets/image1.avif"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecreaseQty, IncrementQty, RemoveItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Cart({name , id , image , price , qty}) {
    let dispatch = useDispatch()
  return (
    <div className=' w-full h-[120px] bg-white shadow-lg mt-5 flex justify-between'>
        <div className=' w-[60%] h-full flex gap-5'>
            <div className=' w-[60%] h-full overflow-hidden rounded-lg'>
                <img src={image} className=' object-cover'/>
            </div>
            <div className=' w-[40%] flex flex-col gap-3 h-full'>
                <div className=' text-lg font-semibold'>{name}</div>
                <div className='w-[90px] h-[40px]  flex overflow-hidden rounded-lg shadow-lg border-2 font-semibold border-green-400' >
                    <button className=' bg-white text-lg w-[30%] h-full flex justify-center items-center text-green-400 hover:bg-gray-200 ' onClick={()=>{dispatch(DecreaseQty(id))}}>-</button>
                    <span className=' w-[40%] h-full bg-slate-100 text-lg flex justify-center items-center text-green-400'>{qty}</span>
                    <button className=' bg-white w-[30%] h-full text-lg flex justify-center items-center text-green-400 hover:bg-gray-200' onClick={()=>{dispatch(IncrementQty(id))}}>+</button>
                </div>
            </div>
        </div>
        <div className=' flex flex-col items-end mr-5'>
        <span className=' text-green-400 text-mdfont-semibold text-lg mb-5'>Rs {price}/-</span>
        <RiDeleteBin6Line className=' text-red-500 font-bold text-xl cursor-pointer' onClick={()=> {dispatch(RemoveItem(id));
            toast.error("Item removed from Cart")
        }}/>
        </div>

    </div>
  )
}

export default Cart