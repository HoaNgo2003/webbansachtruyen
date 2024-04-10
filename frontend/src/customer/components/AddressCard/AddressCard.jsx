import React from 'react'

const AddressCard = ({address}) => {
  console.log(address)
  return (
    <div>
      <div className='space-y-3'>
        <p className='font-semibold'>{address?.firstName} {address?.lastName}</p>
        <p>Ha Noi, Ha Dong, Cho Mo Lao </p>
        <div className='space-y-1'>
            <p className='font-semibold'>So dien thoai</p>
            <p>{address?.sodienthoai}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
