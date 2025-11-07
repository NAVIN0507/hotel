"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

type Amenity = {
  service_name: string;
  icon_pic: string;
};

const Amunities = () => {
  const [AmunitiesList, setAmunitiesList] = useState<Amenity[]>([]);

  useEffect(() => {
    const fetchAmunities = async () => {
      const { data } = await axios.get(
        "https://portal.brundhavangarden.com/api/services/amenities"
      );
      setAmunitiesList(data);
    };
    fetchAmunities();
  }, []);

  return (
    <section className="px-4 md:px-14 py-10 -mt-10">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-[#5C5C5C]">AMENITIES</p>
          <h1 className="flex items-center gap-2 font-mono text-3xl md:text-4xl text-[#45443F]">
            <div className="hidden lg:block w-16 h-0 border border-gray-500" /> MADE FOR
          </h1>
          <h1 className="font-mono text-3xl md:text-4xl text-[#45443F]">YOUR COMFORT</h1>
        </div>
        <div className="hidden md:block md:w-[300px] bg-[#011d38] p-3  rounded-2xl text-white">
          <p className="text-sm ">
            Spoil yourself with the assortment in cuisine and taste. Explore &amp; Investigate the wide range of food you'd be honored with no place else.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-10 mt-10 md:mt-20">
        {AmunitiesList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center "
          >
            <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center  overflow-hidden">
              {item.icon_pic && (
                <img
                  src={item.icon_pic}
                  alt={item.service_name}
                  className="w-16 h-16 object-cover"
                />
              )}
          </div>
            <p className="text-[10px] md:text-sm uppercase text-center text-[#5C5C5C] font-medium">
              {item.service_name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amunities;
