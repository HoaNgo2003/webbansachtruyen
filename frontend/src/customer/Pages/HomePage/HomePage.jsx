import React, { useEffect } from 'react'
import Slider from '../../components/HomeCarosel/Slider'
import {useDispatch, useSelector} from "react-redux"
import HomeSectionCarosel from '../../components/HomSectionCarosel/HomeSectionCarosel'
import { truyendai } from '../../../Data/truyendai'
import { findProducts } from '../../../State/Product/Action'
import { store } from '../../../State/Store'
const HomePage = () => {
  const {product} = useSelector(store=>store);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(findProducts());
  },[])
  console.log(product.products)
   
  const truyenngan = product.products.filter((item)=>item.danhmuc==="truyenngan");
  const truyendai = product.products.filter((item)=>item.danhmuc==="truyendai");
  const truyenthieunhi = product.products.filter((item)=>item.danhmuc==="truyenthieunhi");
   console.log(truyenngan)
  return (
    <div>
       <Slider/>
       <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={truyendai} sectionName={'Truyện dài'}/>
        <HomeSectionCarosel data={truyenngan}  sectionName={'Truyện ngắn'}/>
        <HomeSectionCarosel data={truyenthieunhi}  sectionName={'Truyện thiếu nhi'}/>
       </div>
    </div>

  )
}

export default HomePage
