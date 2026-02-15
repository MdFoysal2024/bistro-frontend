import { useContext } from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'
import userImg from '../../../assets/userImg.jpg'
import { CiLogout } from 'react-icons/ci'
import { TiShoppingCart } from 'react-icons/ti'



const Navber = () => {


    const { user, logOut } = useContext(AuthContext);
    console.log('Current User:', user?.email)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }



    const navOptions = <>



        <li className='hover:text-yellow-400 hover:font-bold hover:underline'><Link to={'/'} >Home</Link></li>

        <li className='hover:text-yellow-400 hover:font-bold hover:underline'><Link to={'/menu'}>Menu</Link></li>

        <li className='hover:text-yellow-400 hover:font-bold hover:underline'><Link to={'/order/salad'}>Order</Link></li>

        <li className='hover:text-yellow-400 hover:font-bold hover:underline'><Link to={'/contact'}>Contact</Link></li>

        <li className='hover:text-yellow-400 hover:font-bold hover:underline'><Link to={'/secret'}>Secret</Link></li>

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


                <div className="navbar-end">

                    <div className='mr-4 '>
                      
                        <Link  to='/' className="">
                            <div className="badge badge-sm badge-secondary ml-4">0</div>
                             <TiShoppingCart  className='text-3xl cursor-pointer' />
                        </Link>
                    </div>

                    {
                        user ? <>
                            <div className="dropdown dropdown-end">


                                <div tabIndex={0} className="cursor-pointer m-1"><img className='w-12 h-12 rounded-full border-2 border-white ' src={user?.photoURL} alt="Image loading..." />
                                </div>


                                <div tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">

                                    <div className='flex flex-col items-center my-6'>
                                        <img className='w-24 h-24 rounded-full  border-2 border-white' src={user?.photoURL} alt="" />
                                        <h3 className='text-2xl font-semibold'>{user?.displayName}</h3>
                                        <p className='text-sm'>{user?.email}</p>
                                    </div>

                                    <p><a>Profile</a></p>
                                    <p><a>Dashboard</a></p>
                                    <p><a>Settings</a></p>
                                    <p>
                                        <Link to="/login">
                                            <button onClick={handleLogOut} className='text-white text-center flex items-center gap-2 btn'><CiLogout className="text-2xl font-bold" />Log-Out</button>
                                        </Link>
                                    </p>
                                </div>
                            </div>


                        </>
                            :
                            <>
                                <Link to={'/login'} >
                                    <FaCircleUser className='text-xl mr-4 md:text-3xl cursor-pointer'></FaCircleUser>
                                </Link>
                            </>
                    }



                </div>

            </div>
        </div>
    )
}

export default Navber
