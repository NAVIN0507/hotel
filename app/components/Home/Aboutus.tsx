'use client';

import React from 'react';
import Image from 'next/image';

const AboutUsSection: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Text Content */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-serif tracking-wider">
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

           
                <div className="space-y-8">
                    <div className="relative">
                        <Image
                            src="/assets/feature_section.jpg" 
                            alt="Modern restaurant interior"
                            width={393}
                            height={308}
                            className="rounded-lg object-cover"
                        />
                        {/* Video Play Button */}
                        <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src="/assets/feature_section.jpg" /
                                    alt="Video thumbnail"
                                    width={50}
                                    height={50}
                                    className="rounded"
                                />
                                <span className="text-sm font-medium">PLAY VIDEO</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium Totam Aperiam, Eaque Ipsa Quae Ab Illo Inventore Veritatis Et Quasi Architecto Beatae Vitae Dicta Sunt, Ut Enim Ad Minima Veniam, Quis Nostrum.
                        </p>
                        <p className="text-gray-600">
                            Exercitationem Ullam Corporis Suscipit Laboriosam, Nisi Ut Aliquid Ex Ea Commodi Consequatur? Quis Autem Vel Eum Iure Reprehenderit Qui In Ea Voluptate Velit Esse Quam Nihil Molestiae Consequatur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;