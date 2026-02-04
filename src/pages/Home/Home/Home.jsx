
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularItem from '../PopularItem/PopularItem'
import Featured from '../Featured/Featured'
import Testimonials from '../Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>

      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>

      <Banner></Banner>
      <Category></Category>
      <PopularItem></PopularItem>
      <Featured></Featured>
      <Testimonials></Testimonials>



    </div>
  )
}

export default Home
