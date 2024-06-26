import React from "react";

function Header() {
  return (
    <div
      className="w-full h-[300px] md:h-[450px] bg-red-600 flex items-center"
      style={{
        background: "url(images/House_of_Tea_cut.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
        {/* <p className="text-primary uppercase">about us</p> */}
    <div className="flex flex-col w-full ml-[10%]"><h5 className="text-[50px] md:text-[100px] text-white -mb-3">Our Outlets</h5>
    <div className=" breadcrumbs text-white">
  <ul>
    <li><a href="/">Home</a></li> 
    <li>Location</li> 
  </ul>
</div></div></div>
  );
}

export default Header;
