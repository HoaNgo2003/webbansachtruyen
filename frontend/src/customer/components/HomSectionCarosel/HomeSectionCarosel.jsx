import React, { useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import {Button} from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.5 },
};

const HomeSectionCarosel = ({data, sectionName}) => {
const items = data.slice(0,8).map((item)=><HomeSectionCard product={item}/>)

    const [activeIndex, setActivIndex] = useState(0);
    const slidePrev = ()=>{
        setActivIndex(activeIndex-1);
        console.log(activeIndex)
    }
    const slideNext = ()=>{
        setActivIndex(activeIndex+1);
        console.log(activeIndex)

    }
    const syncActiveIndex = ({item})=>setActivIndex(item);

  return (
    <>
    <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
    <div className=' px-4 lg:px-8  border border-black'>
       
        <div className='relative p-5'>
        <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableDotsControls
        onSlideChanged={syncActiveIndex}
        activeIndex={activeIndex}
    />
    <Button onClick={slideNext} variant='contained' className='z-50 ' sx={{position:'absolute',top:'8rem', right:'0rem'
    ,transform:'translateX(50%) rotate(90deg)', bgcolor:'white'}}  aria-label='next' >
    <NavigateBeforeIcon sx={{transform:'rotate(90deg)', color:'black'}}/>
    </Button>
    <Button onClick={slidePrev} variant='contained' className='z-50 ' sx={{position:'absolute',top:'8rem', left:'0rem'
    ,transform:'translateX(-50%) rotate(90deg)', bgcolor:'white'}}  aria-label='next' >
    <NavigateBeforeIcon sx={{transform:'rotate(-90deg)', color:'black'}}/>
    </Button>
        </div>
       
    </div>
    </>
  )
}

export default HomeSectionCarosel
