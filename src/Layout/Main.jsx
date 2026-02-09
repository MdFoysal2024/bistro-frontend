
import { Outlet, useLocation } from "react-router-dom"
import Footer from "../pages/Shared/Footer/Footer"
import Navber from "../pages/Shared/Navber/Navber"


const Main = () => {

  const location = useLocation();
  console.log(location);

  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')

  return (
    <div className='max-w-7xl mx-auto'>
      {noHeaderFooter || <Navber></Navber>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default Main
