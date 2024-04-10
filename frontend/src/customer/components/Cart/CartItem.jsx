import React from 'react'
import {IconButton, Button} from '@mui/material'
import {useDispatch} from 'react-redux'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';
const CartItem = ({item}) => {
    // const {item} = props;
    console.log(item)
    const handleRemoveCartItem = ()=>{
        dispatch(removeCartItem(item?._id));
    }
    const dispatch = useDispatch();
    const handleUpdateCartItem = (num)=>{
       
        const data= {data:{quanity:item?.quanity+num}, cartItemId: item._id}
        console.log(data, item)
        dispatch(updateCartItem(data));
    }
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className="flex items-center">
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src={item?.imageUrl} alt="" />
            </div>
            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>{item?.title}</p>
                <p className='opacity-70'>{item?.title}</p>
            <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                <p className='font-semibold'>{item?.price} đ</p>
                <p className='opacity-50 line-through'>10</p>
                <p className='text-green-600 font-semibold'>5% OFF</p>
            </div>
            </div>
          
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                <IconButton onClick={()=>handleUpdateCartItem(-1)}sx={{color:'#7E5FBE'}}  disabled={item?.quanity<=1}>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className='py-1 px-7 border rounded-sm'>{item?.quanity}</span>
                <IconButton onClick={()=>handleUpdateCartItem(1)}sx={{color:'#7E5FBE'}}>
                    <AddCircleOutlineIcon/>
                </IconButton>
               
                </div>
                <div>
                    <Button onClick={handleRemoveCartItem} sx={{color:'#7E5FBE'}}>
                        REMOVE
                    </Button>
                </div>
            </div>
    </div>
  )
}

export default CartItem
