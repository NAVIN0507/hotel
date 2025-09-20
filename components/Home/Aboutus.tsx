"use client"
import { Play } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const AboutUsSection = () => {
    const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth(); // Get initial width

    window.addEventListener("resize", updateWidth); // Listen for resize
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
    return (
        <>
        {width < 768 ? (<>
        <section className='bg-[#011D38] h-fit w-full p-10 rounded-md '>
        <div className='flex items-center justify-between gap-8'>
            <h1 className='font-mono  text-2xl text-white uppercase'>get to know about us</h1>
           
        </div>
        <div className='ml-10 mt-5'>
            <p className='text-[#C1C1C1] font-normal text-left'>Qed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt. Ut enim ad minima veniam, quis nostrum

exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Ut enim ad minima Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div>
            <Link href={"/aboutus"}>
        <button className="bg-[#b79464] mt-6 hover:bg-[#a28252] text-white px-6 py-3 rounded-full text-sm tracking-widest uppercase flex items-center gap-2">
                        Know More →
                    </button>
                    </Link>
        </div>
        </section>
        </> ) :(
        <section className="bg-[#051932] text-white py-16 px-8 rounded-2xl w-full h-fit  mx-auto pl-20 pr-20 ">
            <div className="flex flex-col md:flex-row items-center justify-between gap-14">
                {/* Left: Heading and Button */}
                <div className="flex flex-col items-start gap-8">
                    <h2 className="text-lg md:text-5xl font-serif leading-tight">
                        GET TO KNOW ABOUT <span className='flex'>  US <div className="w-20 mt-7 hidden lg:block  ml-5  h-0 border border-gray-500" />
                    </span></h2>
                    <Link href={"/aboutus"}>
                    <button className="bg-[#b79464] mt-20 hover:bg-[#a28252] text-white px-6 py-3 rounded-full text-sm tracking-widest uppercase flex items-center gap-2 max-sm:hidden">
                        Know More →
                    </button>
                    </Link>
                </div>

                {/* Center: Main Image */}
                <div className="rounded-3xl overflow-hidden shadow-lg max-sm:hidden ">
                    <img
                        src="./assets/images/feature_section.jpg"
                        alt="Restaurant"
                        className="w-[350px] h-[350px]"
                    />
                </div>

                {/* Right: Description and Video */}
                <div className="flex flex-col gap-6 max-w-md text-sm leading-relaxed text-[#C1C1C1]">
                    <p>
                        Qed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
                        Accusantium Doloremque Laudantium Totam Aperiam. Eaque Ipsa Quae Ab
                        Illo Inventore Veritatis Et Quasi Architecto Beatae Vitae Dicta
                        Sunt. Ut Enim Ad Minima Veniam, Quis Nostrum
                    </p>
                    <p>
                        Exercitationem Ullam Corporis Suscipit Laboriosam, Nisi Ut Aliquid
                        Ex Ea Commodi Consequatur. Ut Enim Ad Minima Quis Autem Vel Eum Iure
                        Reprehenderit Qui In Ea Voluptate Velit Esse Quam Nihil Molestiae
                        Consequatur.
                    </p>

                    {/* Video Preview */}
                    
                </div>
                <Link href={"/aboutus"}>
                    <button className="bg-[#b79464]  hover:bg-[#a28252] text-white px-6 py-3 rounded-full text-sm tracking-widest uppercase flex items-center gap-2 md:hidden">
                        Know More →
                    </button>
                    </Link>
            </div>
        </section>
        )}
        </>
    );
};

export default AboutUsSection;
