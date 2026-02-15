import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { FcLike } from 'react-icons/fc';
import { Navigation } from 'swiper/modules';



const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        //fetch('reviews.json')
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    //console.log(reviews);
    //console.log(reviews.length);




    return (
        <div>
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'What Our Clients Say'}
            >
            </SectionTitle>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                            className='px-6 py-12 flex flex-col items-center justify-center'
                        >
                            <div className='px-6  flex flex-col items-center justify-center'>

                               
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FcLike className='text-6xl my-6' />
                                <p className='text-center  p-6'>{review.details}</p>
                                <h3 className='text-center text-yellow-400 text-2xl text font-bold'>{review.name}</h3>
                            </div>

                        </SwiperSlide>)
                    }


                </Swiper>
            </div>


        </div>
    )
}

export default Testimonials
