'use client';

import React from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

const AboutUsSection: React.FC = () => {
    return (
        <div className=" mx-auto rounded-2xl  p-30 bg-[#F6F5F5]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start">
                {/* Left Side - Text Content */}
                <div className="space-y-6 p-24">
                    <h2 className="text-5xl font-serif tracking-wider">
                        GET TO<br />
                        KNOW<br />
                        ABOUT<br />
                        US
                    </h2>
                    <div className="w-24 h-0.5 bg-gray-300"></div>
                    <button className="flex items-center space-x-2 text-sm hover:text-gray-600 transition-colors">
                        <span>KNOW MORE</span>
                        <span className="text-xl">→</span>
                    </button>
                </div>

                {/* Center - Main Image */}
                <div className="relative rounded-2xl overflow-hidden">
                    <Image
                        src="/assets/feature_section.jpg"
                        alt="Modern restaurant interior"
                        width={500}
                        height={400}
                        className="object-cover w-full h-full rounded-2xl"
                    />
                    <div className="absolute bottom-4 flex gap-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                </div>

                {/* Right Side - Text and Video */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Qed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium Totam Aperiam. Eaque Ipsa Quae Ab Illo Inventore Veritatis Et Quasi Architecto Beatae Vitae Dicta Sunt, Ut Enim Ad Minima Veniam, Quis Nostrum
                        </p>
                        <p className="text-gray-600">
                            Exercitationem Ullam Corporis Suscipit Laboriosam, Nisi Ut Aliquid Ex Ea Commodi Consequatur.Ut Enim Ad Minima Quis Autem Vel Eum Iure Reprehenderit Qui In Ea Voluptate Velit Esse Quam Nihil Molestiae Consequatur.
                        </p>
                    </div>

                    {/* Video Section */}
                    {/* <div className="space-y-2">
                        <p className="text-sm font-medium">PLAY VIDEO</p>
                        <div className="relative rounded-lg overflow-hidden">
                            <Image
                                src="/assets/feature_section.jpg"
                                alt="Video thumbnail"
                                width={100}
                                height={50}
                                className="object-cover w-full rounded-lg"
                            />
                            <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                                <PlayCircle className="w-12 h-12 text-white" />
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;