import React from 'react'
import { BedDouble, Dot, InspectionPanel, UsersRound, X } from 'lucide-react';
const services = [
    '24-Hour In-Room Dining',
    '24-Hour In-Room Dining',
    '24-Hour In-Room Dining',
    '24-Hour In-Room Dining',
    'EXTRA BED',
    'EXTRA BED',
]
const RoomInfo = () => {
  return (
    <section className='flex flex-col gap-4 pl-10 pr-10 mt-10'>
        <div className='flex gap-1 items-center justify-between'>
            <div className='flex flex-col gap-1'>
                <h3 className='text-[#5C5C5C]'>HOME / ROOMS / WOODEN STAY</h3>
                <h1 className='text-6xl font-mono text-[#45443F]'>WOODEN STAY</h1>
            </div>
             <div className='flex gap-16   mt-10'>
    <div className='flex flex-col gap-1 items-center justify-center'>
        <InspectionPanel  color='#5C5C5C' width={40} height={40}/>
        <p className='text-[#5C5C5C]'>55M2</p>
    </div>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <UsersRound   color='#5C5C5C' width={40} height={40}/>
        <p className='text-[#5C5C5C]'>1-6 PERSON</p>
    </div>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <BedDouble   color='#5C5C5C' width={40} height={40}/>
        <p className='text-[#5C5C5C]'>2 BEDS</p>
    </div>
   </div>
        </div>

        <div className='flex gap-5 mt-10'>
            <div className='w-12/12 p-7 rounded-lg h-full border border-[#D7D7D7] flex flex-col gap-2'>
            <div className='flex flex-col gap-4'>
                <h1 className='font-mono text-4xl uppercase text-[#45443F]'>ABOUT STAY</h1>
                <p className='mt-2 text-[#3A3A3A]'>
                    Qraesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec velit non odio aliquam suscipit. Sed non neque faucibus, condimentum lectus at, accumsan enim.
                </p>
                <p className='mt-2 text-[#3A3A3A]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra. Interdum et malesu they adamale fames ac anteipsu pimsine faucibus curabitur arcu site feugiat in tortor in, volutpat sollicitudin libero. Hotel non lorem acer suscipit bibendum vulla facilisi nedeuter.  
                </p>
            </div>
            <div className='w-full mt-10 p-1 h-1 border-b border-[#D7D7D7]' />
            <div className='mt-10'>
                <h1 className='font-mono text-4xl uppercase text-[#45443F]'>services & AMENITIES</h1>
                <div className='grid md:grid-cols-3 gap-5 mt-10'>
                {services.map((service, index) => (
                    <div className='p-7 rounded-lg bg-[#F6F5F5] flex gap-3 text-black text-sm'>
                        <X /> {service}
                    </div>
                ))}
            </div>
            </div>
              <div className='w-full mt-10 p-1 h-1 border-b border-[#D7D7D7]' />
              <div className='mt-10'>
                <h1 className='font-mono text-4xl uppercase text-[#45443F]'>ROOM RULES</h1>
                <div className='flex gap-30 mt-7 pl-5'>
                    <div>
                        <h3 className='text-[#3A3A3A]'>Check In</h3>
                        <p className='flex gap-1 text-[#3A3A3A]'><Dot />Check-In From 9:00 AM - Anytime</p>
                        <p className='flex gap-1 text-[#3A3A3A]'><Dot />Early Check-In Subject To Availability</p>
                        <p className='flex gap-1 text-[#3A3A3A]'><Dot />Minimum Check-In Age - 18</p>
                    </div>
                      <div>
                        <h3 className='text-[#3A3A3A]'>Check Out</h3>
                        <p className='flex gap-1 text-[#3A3A3A]'><Dot />Check-Out Before Noon</p>
                        <p className='flex gap-1 text-[#3A3A3A]'><Dot />Express Ckeck-Out</p>
                      
                    </div>
                </div>
                    <div className='flex flex-col gap-1 mt-10 pl-5 leading-relaxed text-[#3A3A3A]'>
                    <p>Special check-in instructions</p>
                    <p>Guests will receive an email 5 days before arrival with check-in instructions; front desk staff will greet guests on arrival For more details, please contact the property using the information on the booking confirmation.</p>
                </div>
                  <div className='flex flex-col gap-1 mt-10 pl-5 leading-relaxed text-[#3A3A3A]'>
                    <p>Children and extra beds</p>
                    <p>Children are welcome Kids stay free! Children stay free when using existing bedding; children may not be eligible for complimentary breakfast Rollaway/extra beds are available for EUR 40.0 per day</p>
                </div>
              </div>
            </div>
            <div className='w-5/12  flex flex-col gap-4  h-fit'>
            <div className='w-full h-fit rounded-lg p-7 bg-[#011D38]'>
                <h1 className='text-white text-center text-xl -mt-3'>STARTS FROM <span className='font-mono text-5xl'>1499</span>/PER NIGHT</h1>
            </div>
             <div className='w-full h-fit rounded-lg p-6 bg-[#011D38] pb-10'>
                <h1 className='font-mono text-2xl text-white '>BOOK THIS ROOM</h1>
                <div className='flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2'>
                    <label htmlFor="" className='text-[#C5C5C5] text-sm'>CHECK IN</label>
                <input type='date' className='text-white mb-2'/>
                </div>
                <div className='flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2'>
                    <label htmlFor="" className='text-[#C5C5C5] text-sm'>CHECK OUT</label>
                <input type='date' className='text-white mb-2'/>
                </div>
                <div className='flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2'>
                    <label htmlFor="" className='text-[#C5C5C5]'>ADULTS COUNT (18+)</label>
                <input type='number' value={0} className='text-white mb-2'/>
                </div>
                  <div className='flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2'>
                    <label htmlFor="" className='text-[#C5C5C5]'>CHILDREN COUNT (0-17)</label>
                <input type='number' value={0} className='text-white mb-2'/>
                </div>
            </div>
            <div className='w-full h-fit rounded-lg p-6  bg-[#011D38]'>
                <h1 className='font-mono text-2xl text-white'>ADD EXTRA</h1>
                <div className='flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2'>
                    <label htmlFor="" className='text-[#C5C5C5]'>SPECIAL FOOD MENU</label>
                    <select name="NORTH INDIAN" id="" className='text-white mb-2'>
                        <option value="NORTH INDIAN" className='text-black'>NORTH INDIAN</option>
                        <option value="SOUTH INDIAN" className='text-black'>SOUTH INDIAN</option>
                    </select>
                </div>
                 <div className='flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2'>
                    <label htmlFor="" className='text-[#C5C5C5]'>ACTIVITES & GAMES</label>
                    <select name="BASKET BALL" id="" className='text-white mb-2'>
                        <option value="NORTH INDIAN" className='text-black'>BASKET BALL</option>
                        <option value="SOUTH INDIAN" className='text-black'>CRICKET</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2 mt-7'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                        <input type='checkbox' className='w-4 h-4 mt-1'/>
                        <label htmlFor="" className='text-[#C5C5C5]'>ADD EXTRA BED (1)</label>
                        </div>
                        <p className='text-[#C5C5C5]'>₹ 299</p>
                    </div>
                     <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                        <input type='checkbox' className='w-4 h-4 mt-1'/>
                        <label htmlFor="" className='text-[#C5C5C5]'>FIRE CAMP ARRANGEMENTS</label>
                        </div>
                        <p className='text-[#C5C5C5]'>₹ 299</p>
                    </div>
                     <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                        <input type='checkbox' className='w-4 h-4 mt-1'/>
                        <label htmlFor="" className='text-[#C5C5C5]'>JEEP SAFARI</label>
                        </div>
                        <p className='text-[#C5C5C5]'>₹ 299</p>
                    </div>
                </div>
                <div className='w-full p-1 h-1 border-b border-[#D0D0D0] mt-3'/>
                <div className='flex items-center justify-between mt-3'>
                    <p className='text-lg text-white'>TOTAL</p>
                   <p className='text-[#C5C5C5]'>₹ 299</p>
                </div>
                <button className='w-full p-5 bg-[#AA9061] h-20 rounded-xl text-white mt-4'>BOOK NOW</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default RoomInfo