import React from 'react'
import useCart from '../../../hooks/useCart';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { MdDeleteForever, } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const MyCart = () => {


    const [cart, refetch] = useCart()
    const axiosSecure = useAxiosSecure()

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    // At Fast initialValue= 0
    // (sum=initialValue, item=currentValue)
    // sum=initialValue + item.price=currentValue

    console.log(totalPrice);


    const handleItemDelete = (id) => {
        console.log('Delete Food Item', id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Food Item has been deleted.",
                //     icon: "success"
                // });

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res);

                        if (res.data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Food Item has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }

                    })

            }
        });
    }



    return (
        <div >


            <SectionTitle
                heading={'WANNA ADD More'}
                subHeading={'My Cart'}
            ></SectionTitle>
            <div className='p-12'>

                <div className='flex justify-between'>

                    <div className=' md:text-3xl '> Total Order: {cart.length}</div>
                    <div className=' md:text-3xl '> Total Amount: ${totalPrice}</div>
                    <div className=' md:text-3xl '> <button className='btn bg-amber-600 px-6'>PAY</button></div>

                </div>


                <div className=' my-12'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='bg-stone-800 text-white'>

                                    <th>No.</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>


                            <tbody>


                                {
                                    cart.map((item, idx) => <tr key={item._id}>

                                        <td>
                                            {idx + 1}
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={item.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            <h3 className='text-lg font-medium'> {item.name}</h3>
                                        </td>
                                        <td><p>${item.price}</p></td>
                                        <th>
                                            <button
                                                onClick={() => handleItemDelete(item._id)}
                                                className=" p-2  cursor-pointer hover:bg-red-800 text-2xl bg-red-600 rounded-full "><MdDeleteForever /></button>
                                        </th>
                                    </tr>)
                                }
                                {/* row 1 */}


                            </tbody>




                            <tfoot className=''>
                                <tr >
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th className='text-xl py-6'>Total Price:<span className='text-white '> ${totalPrice}</span> </th>
                                    <th></th>


                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>





            </div>

        </div>
    )
}

export default MyCart
