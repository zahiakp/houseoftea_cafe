import HeroSec from "@/components/Home/HeroSec";
import Image from "next/image";
import dynamic from "next/dynamic";
import HeroSwiper from "@/components/Home/HeroSwiper";
import AboutSec from "@/components/Home/AboutSec";
import AOSClient from "@/components/Common/AOS";
import MenuSec from "@/components/Home/MenuSec";
import SpecialSec from "@/components/Home/SpecialSec";
import Footer from "@/components/Common/Footer";
import Testimonial from "@/components/Home/Testimonial";
import Booking from "@/components/Common/Booking";
import Counts from "@/components/Home/Counts";

export default function Home() {
  const Sliders = dynamic(() => import("../components/Home/HeroSec"), {
    ssr: false,
  });
  return (
    <main>
      <AOSClient />
      <Sliders />
      {/* <HeroSwiper/> */}
      <AboutSec />
      <SpecialSec/>
      <Testimonial/>
      <Counts/>
      <Booking/>
      <Footer/>
    </main>
  );
}
