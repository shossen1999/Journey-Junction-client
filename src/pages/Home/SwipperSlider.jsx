// import img4 from '../../assets/img4.jpg';
// import img5 from '../../assets/img5.jpg';
// import img7 from '../../assets/img7.jpg';
// import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/Siem Reap2.webp'
import img10 from '../../assets/borobudur_sunrise.jpg'
import img11 from '../../assets/Chiang Mai2.webp'
import img12 from '../../assets/Chiang Mai.jpg'
// import img13 from '../../assets/Chiang Mai.jpg'




import React, { useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectFade } from 'swiper/modules';
import { Helmet } from 'react-helmet';
// import Aos from 'aos'
// import 'aos/dist/aos.css'


const SwipperSlider = () => {
  // useEffect(()=>{
  //   Aos.init({duration:2000,disable: 'mobile'})
  // },[])
  return (
    <>
     <Helmet>
            <title>Home | Swipper Slider</title>
            </Helmet>

<style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            color: white; /* Change the color of the arrows */
          }

          .swiper-pagination-bullet {
            background-color: blue; /* Change the background color of the dots */
          }
        `}
      </style>

      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={50}
      effect="fade"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

    >
      <SwiperSlide >
        <div className='relative'>
          <img src={img9} alt="" style={{ width: "100%", height: "100vh" }} />
        </div>
        {/* <div className='absolute top-[15%] md:top-[30%] lg:top-[30%] left-[30%] z-10 max-w-2xl'>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-white " data-aos="fade-right">Single-family homes</h3>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-[#1DD100]" data-aos="fade-left">Spacious Family Home</h3>
          <p className="mb-5 text-white" data-aos="fade-up">A beautiful single-family home with ample space for a growing family</p>
          <a href="#">
            <button className="btn bg-[#1DD100] font-bold border-none text-black" data-aos="fade-down">Visit Our Project </button>
          </a>
        </div> */}
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <img src={img10} alt="" style={{ width: "100%", height: "100vh" }} />
        </div>
        {/* <div className='absolute top-[15%] md:top-[30%] lg:top-[30%] left-[30%] z-10 max-w-2xl'>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-white"  data-aos="fade-right">Townhouses</h3>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-[#1DD100]"  data-aos="fade-left">Modern Townhouse</h3>
          <p className=" md:mb-5 lg:mb-5 text-white "  data-aos="fade-up">A contemporary townhouse featuring sleek design and urban convenience</p>
          <a href="#">
            <button className="btn bg-[#1DD100] font-bold border-none text-black"  data-aos="fade-down">Visit Our Project </button>
          </a>
        </div> */}
      </SwiperSlide>
      {/* <div className='absolute top-[15%] md:top-[30%] lg:top-[30%] left-[30%] z-10 max-w-2xl'> */}
      <SwiperSlide>
        <div className='relative'>
          <img src={img11} alt="" style={{ width: "100%", height: "100vh" }} />
        </div>
        {/* <div className='absolute top-[15%] md:top-[30%] lg:top-[30%] left-[30%] z-10 max-w-2xl'>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-black"  data-aos="fade-right">Apartments</h3>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-[#1DD100]"  data-aos="fade-left">Luxury City Apartment</h3>
          <p className="mb-5 text-white"  data-aos="fade-up">An upscale apartment in a prime location offering luxury living amenities</p>
          <a href="#">
            <button className="btn bg-[#1DD100] font-bold border-none text-black"  data-aos="fade-down">Visit Our Project </button>
          </a>
        </div> */}
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <img src={img12} alt="" style={{ width: "100%", height: "100vh" }} />
        </div>
        {/* <div className='absolute top-[15%] md:top-[30%] lg:top-[30%] left-[30%] z-10 max-w-2xl'>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-black"  data-aos="fade-right">Student Housing</h3>
          <h3 className=" md:mb-5 lg:mb-5  text-3xl md:text-6xl lg:text-6xl font-bold text-[#1DD100]"  data-aos="fade-left">Student Residence</h3>
          <p className="mb-5 text-white"  data-aos="fade-up">A comfortable student residence with convenient amenities for academic success.</p>
          <a href="#seat-section">
            <button className="btn bg-[#1DD100] font-bold border-none text-black"  data-aos="fade-down">Visit Our Project </button>
          </a>
        </div> */}
      </SwiperSlide>

    </Swiper>
    
    </>
    
  );
};

export default SwipperSlider;