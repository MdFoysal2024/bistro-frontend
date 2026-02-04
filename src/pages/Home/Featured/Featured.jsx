
import featuredImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'


import './Featured.css'

const Featured = () => {


    return (
        <div
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.69)), url(${featuredImg})` }}
            className="bg-cover bg-fixed my-32 pt-12 bg-black bg-center "
        >


            {/* style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${featuredImg})` }}
            className="bg-cover bg-fixed bg-black/30 bg-center " */}

            {/* or */}

            {/* className='featured-item bg-fixed my-32 pt-12' */}


            <SectionTitle
                heading={'Featured ITEM'}
                subHeading={'from our Menu'}
            >

            </SectionTitle>


            <div className=' flex flex-col md:flex-row items-center gap-16 p-16'>

                <div className='md:w-1/2'>
                    <img src={featuredImg} alt="" />
                </div>

                <div className=' md:w-1/2 flex flex-col items-start space-y-4'>
                    <p>March 20, 2023</p>
                    <h3 className='uppercase'>WHERE CAN I GET SOME?</h3>
                    <p className='text-justify'>Consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. ipsum dolor sit amet Eaque repellat Lorem ipsum dolor sit amet recusandae ad laudantium tempore consequatur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline  border-0 border-b-4 rounded-lg'>Order Now</button>
                </div>
            </div>


        </div>
    )
}

export default Featured