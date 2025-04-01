"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ic from "@/../../public/images/inverted_comma.png";
import stars from "@/../../public/images/stars.png";
import ellipse from "@/../../public/images/ellipse.png";

const testimonials = [
  {
    name: "Mathew Parez",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque veniam placeat corrupti, perferendis ducimus quo nisi praesentium fuga repellat.",
  },
  {
    name: "Bettina Victor",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque veniam placeat corrupti, perferendis ducimus quo nisi praesentium fuga repellat.",
  },
  {
    name: "Amber Thompson",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque veniam placeat corrupti, perferendis ducimus quo nisi praesentium fuga repellat.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-20 relative z-[1]">
      <div className="flex items-center justify-center">
        <div className="text-5xl font-bold bg-gradient-to-b from-[#F7E57E] via-[#B28238] via-[#E6CD6D] via-[#FFFFD0] via-[#F7E57E] to-[#C08E2C] bg-clip-text text-transparent">
          Testimonials
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-3 gap-4 w-[70vw] mx-auto justify-center py-20">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-black p-6 rounded-2xl">
            <div className="flex flex-row">
              <div>
                <Image src={ic} alt="Not Available!" className="w-40" />
              </div>
              <div className="px-4 text-[#EEDB86] text-sm">
                {testimonial.text}
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div>
                <Image src={ellipse} alt="Not Available!" className="w-10" />
              </div>
              <div className="px-4 text-[#EEDB86] text-base font-bold">
                <div>{testimonial.name}</div>
                <Image src={stars} alt="Not Found" className="w-24 mt-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden w-[100vw] mx-auto py-20">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="py-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="px-[5vw]">
              <div key={index} className="bg-black p-6 rounded-2xl">
                <div className="flex flex-row">
                  <div>
                    <Image src={ic} alt="Not Available!" className="w-40" />
                  </div>
                  <div className="px-4 text-[#EEDB86] text-xs">
                    {testimonial.text}
                  </div>
                </div>
                <div className="flex flex-row mt-4">
                  <div>
                    <Image
                      src={ellipse}
                      alt="Not Available!"
                      className="w-10"
                    />
                  </div>
                  <div className="px-4 text-[#EEDB86] text-base font-bold">
                    <div>{testimonial.name}</div>
                    <Image src={stars} alt="Not Found" className="w-24 mt-2" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
