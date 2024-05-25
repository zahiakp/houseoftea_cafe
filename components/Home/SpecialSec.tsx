import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

function SpecialSec() {
  const SUB_CONT = [
    {
      icon: "icon1.png",
      content:
        "Our menus are designed to reflect the diverse nature of our employees, who are experienced professionals from various parts of the world",
    },
    {
      icon: "icon2.png",
      content:
        "Our cafes provide a calm environment that ensures complete tranquility, and our staff is always on hand to respond to customer inquiries",
    },
  ];
  return (
    <section
      className=" py-24 duration-300 group text-white flex justify-center"
      style={{ background: "url(assets/category_bg.jpg)" }}
    >
      <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-28">
        <div className="grid grid-cols-2 gap-7" data-aos="fade-up">
          <div className="flex flex-col gap-7 duration-700 -translate-y-2 group-hover:-translate-y-5" >
            <div
              className="h-80 w-full"
              style={{
                background: "url(images/grid_gal3.jpg)",
                backgroundSize: "cover",backgroundPosition:"center",
              }}
            >
              
            </div>
            <div
              className="h-80 w-full"
              style={{
                background: "url(images/grid_gal4.jpg)",
                backgroundSize: "cover",backgroundPosition:"center",
              }}
            >
              
            </div>
          </div>
          <div className="flex flex-col gap-7 duration-700 translate-y-2 group-hover:translate-y-5">
            <div
              className="h-80 w-full"
              style={{
                background: "url(images/grid_gal1.jpg)",
                backgroundSize: "cover",backgroundPosition:"center",
              }}
            >
             
            </div>
            <div
              className="h-80 w-full"
              style={{
                background: "url(images/grid_gal2.jpg)",
                backgroundSize: "cover",backgroundPosition:"center",
              }}
            >
             
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-primary uppercase">WHY CHOOSE US</p>
          <h5 className="sub-title" data-aos="fade-up">
            Famous Karak Tea &<br /> Delectable Snacks
          </h5>
          <p className="text-zinc-400" data-aos="fade-up" data-aos-delay="100">
            Our karak tea is very famous for its taste and flavour and we also
            provides a varities of teas and coffees along with a number of snack
            items including sandwiches in Parathas and burgers
          </p>

          <div className="mt-8 grid gap-8">
            {SUB_CONT.map((item: any, index: number) => (
              <div
                data-aos="fade-left"
                data-aos-delay={index * 200}
                key={index}
                className="flex items-center gap-5"
              >
                <img src={`icons/${item.icon}`} alt="icon" className="h-16" />
                <p className="text-zinc-400 w-[70%]">{item.content}</p>
              </div>
            ))}
          </div>
          <div
            data-aos="fade-up"
            className="btn-pry duration-300 z-10 bg-primary w-fit mt-8 rounded-3xl "
          >
            <a
              href=""
              className="p-3 px-10 w-full h-full duration-500 text-white z-20 flex items-center gap-3"
            >
              Explore <HiOutlineArrowRight />
            </a>
            <div className="btn-before z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialSec;
