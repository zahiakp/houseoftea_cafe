import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { GrAppsRounded, GrAttraction, GrProjects, GrTty, GrUser, GrValidate } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";

function JourneySec() {
  const SPEC = [
    {
      icon: <GrAttraction />,
      count: "45",
      spec: "Branches",
      dis: "across the world",
    },{
      icon: <GrUser />,
      count: "999",
      spec: "Staffs",
      dis: "in our shop",
    },{
      icon: <GrAppsRounded   />,
      count: "299",
      spec: "Menu Item",
      dis: "in our shops",
    },{
      icon: <GrValidate  />,
      count: "99M",
      spec: "Happy Customers",
      dis: "across the world",
    },
  ];
  return (
    <section className=" py-20 text-white flex justify-center bg-black">
      <div className="w-[80%] max-w-[1200px] flex flex-col items-center">
        <p className="text-primary uppercase">Our Journey</p>
        <h5 className="sub-title text-center" data-aos="fade-up">
          Our Successful Journey
        </h5>
        <div className="bg-black grid grid-cols-1 md:grid-cols-4 md:p-10 pt-16 w-full gap-10 md:gap-5" data-aos="fade-up">
          {SPEC.map((item:any,index:number)=>(<div key={index} className="group">
            <div className="bg-darkgray rounded-sm group-hover:outline outline-1 outline-primary-50 h-20 w-20 duration-300 outline-offset-4 mx-auto md:m-0 flex items-center justify-center text-primary text-[40px]">
              {item.icon}
            </div>
            <h1 className="text-[60px] text-primary mt-3 text-center md:text-left">{item.count}+</h1>
            <h4 className="text-[24px] text-center md:text-left">{item.spec}</h4>
            <p className="text-zinc-500 text-center md:text-left">{item.dis}</p>
          </div>))}
          
          
        </div>
      </div>
    </section>
  );
}

export default JourneySec;
