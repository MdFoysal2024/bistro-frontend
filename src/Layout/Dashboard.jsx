import { FaHome } from "react-icons/fa"
import { FaCalendar } from "react-icons/fa6"
import { MdBookmarks, MdPreview } from "react-icons/md"
import { TiShoppingCart } from "react-icons/ti"
import { Link, NavLink, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { CiLogout } from "react-icons/ci"
import useCart from "../hooks/useCart"

const Dashboard = () => {

    const [cart] = useCart();
    const { user, logOut } = useAuth();
    console.log('Current User:', user?.email)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div className="flex max-w-7xl mx-auto">

            {/* Side Bar Menu */}
            <div className="w-64 min-h-screen bg-amber-600">

                <div>
                    <div className='flex flex-col items-center my-6'>
                        <img className='w-24 h-24 rounded-full  border-2 border-white' src={user?.photoURL} alt="" />
                        <h3 className='text-2xl font-semibold'>{user?.displayName}</h3>
                        <p className='text-sm'>{user?.email}</p>
                    </div>
                </div>


                <ul className="menu">
                    <ul className="menu">
                        <li>
                            <NavLink to={'/dashboard/userHome'}>  <FaHome className='text-3xl cursor-pointer' />User Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/reservation'}>  <FaCalendar className='text-3xl cursor-pointer' />Reservation</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/myCart'}>  <TiShoppingCart className='text-3xl cursor-pointer' />My Cart({cart.length})</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/addReview'}>  <MdPreview className='text-3xl cursor-pointer' />Add Review</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/myBooking'}>  <MdBookmarks className='text-3xl cursor-pointer' />My Booking</NavLink>
                        </li>

                    </ul>


                </ul>


                <div className="divider"></div>
                <ul className="menu">
                    <li><NavLink to={'/'}> <FaHome className='text-3xl cursor-pointer' />Home</NavLink></li>
                <li>
                    <Link to="/login">
                        <button onClick={handleLogOut} className='text-white btn text-center flex items-center gap-2 '><CiLogout className="text-2xl font-bold" />Log-Out</button>
                    </Link>
                </li>
                </ul>
            </div>


            {/* Dashboard Main Content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default Dashboard
