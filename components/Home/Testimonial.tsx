"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { GrStar } from "react-icons/gr";
import { IoStar } from "react-icons/io5";

function Testimonial() {
  const TEST = [
    {
      photo: "rev1.jpg",
      name: "Abraham Charly",
      designation: "CEO, Zangly",
      dis: "Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium totam remriam eaque quae abillo",
    },
    {
      photo: "rev1.jpg",
      name: "Abraham Charly",
      designation: "CEO, Zangly",
      dis: "Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium totam remriam eaque quae abillo",
    },
    {
      photo: "rev1.jpg",
      name: "Abraham Charly",
      designation: "CEO, Zangly",
      dis: "Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium totam remriam eaque quae abillo",
    },
    {
      photo: "rev1.jpg",
      name: "Abraham Charly",
      designation: "CEO, Zangly",
      dis: "Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium totam remriam eaque quae abillo",
    },
    {
      photo: "rev1.jpg",
      name: "Abraham Charly",
      designation: "CEO, Zangly",
      dis: "Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium totam remriam eaque quae abillo",
    },
    {
      photo: "rev1.jpg",
      name: "Abraham Charly",
      designation: "CEO, Zangly",
      dis: "Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium totam remriam eaque quae abillo",
    },
    {
      photo: "rev1.jpg",
      name: "Abraham Charly",
      designation: "CEO, Zangly",
      dis: "Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium totam remriam eaque quae abillo",
    },
  ];
  return (
    <section className=" py-28 text-white flex justify-center bg-black">
      <div className="w-[90%] max-w-[1200px] flex flex-col items-center">
        <p className="text-primary uppercase">CUSTOMER FEEDBACK</p>
        <h5 className="sub-title" data-aos="fade-up">
          What Our Clients Say
        </h5>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper" data-aos="fade-up"
        >
          {TEST.map((item: any, index: number) => (
            <SwiperSlide>
              <div className="bg-black">
                <div className="w-full h-10 bg-black"></div>

                <div
                  key={index}
                  className="bg-secondary px-8 pb-8 h-[300px] w-full flex flex-col rounded-2xl"
                >
                  <div className="flex w-full h-10">
                    <div
                      className="h-20 w-20 rounded-full mx-auto -translate-y-10"
                      style={{
                        background: `url(assets/${item.photo})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="text-primary mt-5 mb-3 flex items-center gap-1 justify-center">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                  </div>
                  <p className="text-zinc-400 text-[15px]">{item.dis}</p>
                  <h6 className="font-bold mt-5">{item.name}</h6>
                  <p className="text-primary text-sm">{item.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
