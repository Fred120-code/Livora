"use client";

import Image from "next/image";
import testBg from "@/public/Images/testimonials-bg.jpg";
import testimonial1 from "@/public/Images/testimonials-1.jpg";
import testimonial2 from "@/public/Images/testimonials-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TestimonialData = [
  {
    id: 1,
    desc: "A wonderful experience! They knew what they were doing and were incredibly knowledgeable throughout the process.",
    image: testimonial1,
    name: "Olivia Peterson",
    role: "Co-founder",
  },
  {
    id: 2,
    desc: "absolutely love my the new modern living room! The clean lines, a neutral tones, and minimalist interior create such a calming & stylish atmosphere. Highly recommend their modern interior design services!",
    image: testimonial2,
    name: "Morgan Dufresne",
    role: "Company owner",
  },
];

const Testimonial = () => {
  return (
    <div
      className="testimonial px-[8%] lg:px-[16%] py-20 gap-10 flex 
    flex-col-reverse lg:flex-row"
      id="testimonial"
    >
      <div className="w-full lg:w-1/2 testimonial-image relative">
        <Image
          src={testBg}
          alt="testBg"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <div>
          <div className=" flex flex-col">
            <div className="w-full">
              <span
                className="text-lg rethink font-semibold text-gray-400
                 uppercase"
              >
                Our clients say
              </span>
            </div>
            <div className="w-full mt-4">
              <h1 className="text-5xl md:text-6xl rethink font-semibold">
                Here’s What{" "}
                <span className="text-(--prim)">warm words our clients</span>{" "}
                Say
              </h1>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row items-start
           md:items-center gap-5 mt-5"
          >
            <h1 className="text-7xl">4.80</h1>
            <div className="flex flex-col items-center">
              <div
                className="start-icon flex items-center gap-1 
                bg-(--prim) text-white px-3 py-1 rounded-full"
              >
                <i className="bi bi-star-fill text-xs"></i>
                <i className="bi bi-star-fill text-xs"></i>
                <i className="bi bi-star-fill text-xs"></i>
                <i className="bi bi-star-fill text-xs"></i>
                <i className="bi bi-star-fill text-xs"></i>
              </div>
              <p className="">2,688 reviews</p>
            </div>
            <p className="w-full lg:w-[50%] font-semibold rethink">
              From concept to reality, the team turned my vision into a
              stunning, livable space. I couldn’t be happier with this!
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            modules={[Autoplay]}
            speed={1500}
          >
            {TestimonialData.map((test, index) => (
              <SwiperSlide key={index}>
                <p
                  className="text-2xl text-(--text-light) font-semibold 
                tracking-wide rethink"
                >
                  {test.desc}
                </p>
                <div className="flex items-center gap-3 mt-8">
                  <Image
                    src={test.image}
                    alt={test.name}
                    className="rounded-full w-[75px] h-[75px] object-cover"
                  />
                  <div className=" flex flex-col">
                        <h3 className="text-2xl font-semibold">
                            {test.name}
                        </h3>
                        <h3 className="font-semibold text-gray-400">
                            {test.role}
                        </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
