// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <div className='my-12 md:my-24'>

            <SectionTitle
                subHeading={'From 11:00am to 10:00pm'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={24}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <img src={img1} alt="" />
                    <p className=' md:text-3xl uppercase -mt-6 md:-mt-12  text-center  text-shadow-sm text-shadow-black  '>Salad</p>
                    <div className='mt-10 md:mt-16 '></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <p className=' md:text-3xl uppercase -mt-6 md:-mt-12 text-center text-shadow-sm text-shadow-black '>pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <p className=' md:text-3xl uppercase -mt-6 md:-mt-12 text-center text-shadow-sm text-shadow-black  '>soup</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <p className=' md:text-3xl uppercase -mt-6 md:-mt-12 text-center  text-shadow-sm text-shadow-black '>Dessert</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <p className=' md:text-3xl uppercase -mt-6 md:-mt-12 text-center  text-shadow-sm text-shadow-black  '>salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <p className=' md:text-3xl uppercase -mt-6 md:-mt-12 text-center  text-shadow-sm text-shadow-black '>pizza</p>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Category
