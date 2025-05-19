import Image from 'next/image'
import React from 'react'

const SignIn = () => {
  return (
<section className='flex gap-2'>
<div className='w-1/2 min-h-screen'>
<Image
src={"/assets/images/feature_section.jpg"}
alt="feature section"
width={500}
height={500}
className='w-full h-fit object-cover'
/>
</div>
<div className='w-1/2 flex items-center justify-center'>
<div className='w-8/12 p-4  shadow-2xl rounded-lg border border-gray-300'>
<h1 className='font-mono text-[#b79464] text-5xl text-center uppercase'>Brindhavan</h1>

</div>
</div>
</section>
  )
}

export default SignIn