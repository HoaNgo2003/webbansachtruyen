import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import {useDispatch, useSelector} from "react-redux"
import {useLocation} from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'
import { store } from '../../../State/Store'
const OrderSumary = () => {
  const dispatch = useDispatch();
  const {order} = useSelector(store=>store)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id")
  console.log(order)
  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])
  console.log(order.order)
  let totalPrice = 0;
  let totalDiscount = 0;
  console.log()
  // for(const item of order.orderItems){
    order?.order?.orderItems.forEach((item)=>{
      totalPrice += item.quanity*item.price;
      totalDiscount += item.quanity*item.discount
    })
  // }
   
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard address={order?.order?.giaohangAddress}/>

      </div>

      <div>
        <div className='flex lg:grid grid-cols-3 relative'>
        <div className='col-span-2'>
            {order?.order?.orderItems?.map((item)=><CartItem item={item.product}/>) }
        </div>
        
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className='border'> 
        <p className='uppercase font-bold opacity-60 pb-4'>Hoa don</p>
        <hr />
        <div className='space-y-3 font-semibold'>
            <div className='flex justify-between pt-3 text-black'>
                <span>Gia tien</span>
                <span>{totalPrice}đ</span>
            </div>
            <div className='flex justify-between pt-3 text-green-600'>
                <span>Giam gia</span>
                <span>{totalDiscount}đ</span>
            </div>
            <div className='flex justify-between pt-3 text-green-600'>
                <span>Phi ship</span>
                <span>0đ</span>
            </div>
            <div className='flex justify-between pt-3 font-bold'>
                <span>Tong tien</span>
                <span className='text-green-600 ' >{totalPrice-totalDiscount}đ</span>
            </div>
            </div>
            <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                THANH TOAN
              </button>
        </div>
        </div>
        </div>
     
    </div>
    </div>
  )
}

export default OrderSumary
