import React from 'react'
import Image from 'next/image'
import featureSectionImg from '@/public/assets/images/feature_section.jpg';
import featureSectionImg1 from '@/public/assets/images/IMG_3241.jpg';
import featureSectionImg2 from '@/public/assets/images/IMG_3255.jpg';
import featureSectionImg3 from '@/public/assets/images/IMG_3276.jpg';
import featureSectionImg4 from '@/public/assets/images/IMG_3185.jpg';


const Activities = () => {
  return (
     <div className='flex flex-col md:flex-row gap-4 items-center justify-center  pl-10 pr-10 mx-auto'>
        <div className= 'w-[300px] md:w-7/12 h-full p-4 rounded-md bg-[#011D38] text-white'>
        <div className='flex flex-col'>
        <p className='text-[10px]'>ACTIVITIES & GAMES</p>
        <h1 className='uppercase font-mono text-4xl leading-relaxed -mt-3'>Unwind to Nature</h1>
        <p className='text-[10px] text-[#C1C1C1]'>Nestled in the centre of Kodaikanal, we offer the perfect adventurous retreat. Numerous exhilarating activities are available at our opulent resort, guaranteeing you and your loved ones an experience they won’t soon forget.</p>
           {/* <InfiniteMovingPills
        items={activityItems}
        direction="right"
        speed="slow"
        className='p-5'
      /> */}
      <Image
      src={featureSectionImg3}
      alt='feature_section'
      width={500}  
        height={500}
        className='w-[800px] h-[300px] object-cover rounded-lg'
      />
        </div>
        </div>
         <div className='w-[400px] md:w-7/12 h-full p-10  text-white  rounded-md bg-[#011D38]'>
          <div className='flex flex-col'>
        <p className='text-[10px]'>ACTIVITIES & GAMES</p>
        <h1 className='uppercase font-mono text-4xl leading-relaxed -mt-3'>Unwind to Nature</h1>
        <p className='text-[10px] text-[#C1C1C1]'>Nestled in the centre of Kodaikanal, we offer the perfect adventurous retreat. Numerous exhilarating activities are available at our opulent resort, guaranteeing you and your loved ones an experience they won’t soon forget.</p>
           {/* <InfiniteMovingPills
        items={activityItems}
        direction="right"
        speed="slow"
        className='p-5'
      /> */}
       <Image
      src={featureSectionImg4}
      alt='feature_section'
      width={500}  
        height={500}
        className='w-[800px] h-[300px] object-cover rounded-lg'
      />
        </div>
        </div>
        </div>
  )
}

export default Activities