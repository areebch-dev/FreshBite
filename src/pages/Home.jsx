import Nav from '../components/Nav'
import Categories from '../Category'
import { FiDivide } from 'react-icons/fi'
import Card from '../components/Card'
import { ImCross } from "react-icons/im";
import { MdNoFood } from "react-icons/md";
import { food_items } from '../Food'
import { useContext } from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";

import { dataContext } from '../context/UserContext'
import Cart from '../components/Cart';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function Home() {
  let { cate, setCate, input , cart , setCart } = useContext(dataContext)

  function filter(category) {
    if (category === 'All') {
      setCate(food_items);
    } else {
      let newList = food_items.filter((item) => item.food_category === category);
      setCate(newList);
    }
  }

  let items = useSelector(state=>state.cart) 

  let subtotal = items.reduce((total , item )=>total+item.qty*item.price , 0)
  let deliveryFee = 50;
  let taxes = subtotal*0.5/100;
  let total = Math.floor(subtotal + deliveryFee + taxes);


  

  return (
    <div className='bg-slate-200 w-full min-h-[100vh] scroll-smooth'>
      <Nav/>
      {/* Categories */}
      {!input ? (
        <div className='flex flex-wrap justify-center items-center gap-6 w-[100%] '>
          {Categories.map((item, index) => (
            <div
              key={index}
              className='w-[150px] transition-all duration-200 h-[150px] rounded-lg shadow-xl text-gray-600 font-semibold bg-white flex p-5 gap-5 text-[20px] flex-col items-start justify-start cursor-pointer hover:bg-green-200 border-2 border-green-400'
              onClick={() => filter(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      ) : null}

      {/* Cards */}
      <div className='flex flex-wrap gap-5 px-5 justify-center items-center pt-5 pb-5'>
        {cate.length > 0 ? (
          cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              id={item.id}
              price={item.price}
              type={item.food_type}
            />
          ))
        ) : (
            <div className=" flex items-center pt-[110px] gap-5 "> 
            <MdNoFood className=' text-3xl text-green-500 ' />
            <p className='text-green-500 text-xl font-semibold'>No items found.</p>
            </div>
         
        )}
      </div>

      <div className={`bg-white h-[100%] w-full md:w-[40vw] right-0 top-0 fixed p-6 shadow-xl transition-all duration-500 overflow-auto ${cart?"translate-x-0" : "translate-x-full"}` }>
        <header className=' w-[100%] flex justify-between items-center'>
            <span className=' text-[20px] font-semibold text-green-400'>Order Items</span>
            <ImCross className='text-[18px] w-[20px] h-[20px] font-semibold text-green-400 hover:text-gray-600 cursor-pointer' onClick={()=>setCart(false)}/>
        </header>

           {items.length>0 ?   <>
        <div className=' w-full gap-6 mt-8 flex flex-col'>
          {items.map((item)=>(
            <Cart name={item.name} image={item.image} id={item.id} price={item.price} qty={item.qty}/>
          ))}
        </div>
        <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-4 p-8'>
          
           <div className='flex justify-between w-full '> 
            <span className='text-gray-700 text-lg font-semibold'>Subtotal:</span>
            <p className='text-green-400 text-lg font-bold'>Rs {subtotal}/-</p>
           </div>
           <div className='flex justify-between w-full '> 
            <span className='text-gray-700 text-lg font-semibold'>Delivery Fee:</span>
            <p className='text-green-400 text-lg font-bold'>Rs {deliveryFee}/-</p>
           </div>
           <div className='flex justify-between w-full '> 
            <span className='text-gray-700 text-lg font-semibold'>Taxes:</span>
            <p className='text-green-400 text-lg font-bold'>Rs {taxes}/-</p>
           </div>
          
            </div>
            <div className='flex justify-between w-full p-8'> 
            <span className='text-gray-700 text-[24px] font-bold'>Total:</span>
            <p className='text-green-400 text-[24px] font-bold'>Rs {total}/-</p>
           </div>
           <button className='w-[100%] bg-green-500 text-white p-2 rounded-lg hover:bg-green-400 transition-all text-lg font-semibold' onClick={()=> toast.success("Order Place")} >Place Order</button>
           </> : <div className=' text-green-400 text-2xl flex justify-center items-center font-semibold  p-[100px]  '>Your cart is empty</div> }
      
         </div>

  <footer className="bg-white mt-10 shadow-inner">
  <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    {/* Left Column */}
    <div className="flex flex-col gap-3">
      <h2 className="text-green-600 text-2xl font-bold mb-2">FreshBite</h2>
      <p className="text-gray-600">
        Fresh meals delivered fast. Order your favorite food anytime.
      </p>
    </div>

    <div></div>

    {/* Right Column */}
    <div className="flex flex-col gap-2">
      <h3 className="text-green-600 text-xl font-semibold mb-2">Contact Us</h3>
      <p className="text-gray-700">Email: support@freshbite.com</p>
      <p className="text-gray-700">Phone: +92 300 0000000</p>
      <p className="text-gray-700">Location: Pakistan</p>
    </div>

  </div>

  {/* Footer Bottom */}
  <div className="text-center py-4 bg-green-600 text-white font-medium mt-6">
    © {new Date().getFullYear()} FreshBite — All Rights Reserved.
  </div>
</footer>


         
    </div>
  )
}

export default Home
