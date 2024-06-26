import React from "react";

function Header() {
  return (
    <div
      className="w-full h-[300px] md:h-[450px] flex items-center"
      style={{
        background: "url(images/House_of_Tea_cut.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
        {/* <p className="text-primary uppercase">about us</p> */}
    <div className="flex flex-col w-full ml-[10%]"><h5 className="text-[50px] md:text-[100px] text-white -mb-3">Contact Us</h5>
    <div className=" breadcrumbs text-white">
  <ul>
    <li><a href="/">Home</a></li> 
    <li>Contact</li> 
  </ul>
</div></div></div>
  );
}

export default Header;
