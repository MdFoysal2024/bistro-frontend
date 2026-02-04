import { FaCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'




const Navber = () => {

    const navOptions = <>



        <li className='hover:text-yellow-400 hover:font-bold hover:underline'><Link to={'/'} >Home</Link></li>

        <li className='hover:text-yellow-400 hover:font-bold hover:underline'><Link to={'/menu'}>Menu</Link></li>

        <li className='hover:text-yellow-400 hover:font-bold hover:underline'><Link to={'/order/salad'}>Order</Link></li>

        <li className='hover:text-yellow-400 hover:font-bold hover:underline'><Link to={'/contact'}>Contact</Link></li>

    </>


    return (
        <div>
            <div className="navbar bg-base-100/40 fixed z-10   max-w-7xl mx-auto  shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to={'/'} className=" pl-4 md:text-xl  text-center w-f  font-bold">BISTRO-BOSS</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <Link to={'/login'} className="navbar-end">
                    <FaCircleUser className='text-xl mr-4 md:text-3xl cursor-pointer'></FaCircleUser>
                </Link>
            </div>
        </div>
    )
}

export default Navber
