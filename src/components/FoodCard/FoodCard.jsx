import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // যে প্রাইভেট পেজ থেকে লগিন পেজে আসবে লগিন এরপর সরাসরি ঐ পেজে যেতে এবং location ব্যবহার করার জন্য state কে ব্যবহার করতে হবে।
    const navigate = useNavigate()
    const location = useLocation();
    const [, refetch] = useCart()



    const handleAddToCart = food => {
        // console.log(food._id)
        //console.log(food._id, user?.email);
        if (user && user.email) {
            console.log(food._id, user?.email);

            const cartItem = {
                //database এ কার্ট এড করার সময় নতুন একটা _id তৈরী হবে, দুই _id যাতে মিলে না যায় তাই menuId: _id, দেয়া হলো।

                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }


            // use normal axios ---->
            // axios.post('http://localhost:5000/carts', cartItem)
            //     .then(res => {
            //         console.log(res.data)
            //         if (res.data.insertedId) {
            //             Swal.fire({
            //                 title: "Food Added Successfully!",
            //                 icon: "success",
            //                 draggable: true
            //             });
            //          }
            //     })



            // use axiosSecure from custom hook ---->
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Food Added Successfully!",
                            icon: "success",
                            draggable: true
                        });

                        // auto reload data by refetch(),
                        refetch();
                        navigate('/dashboard/myCart')
                    }

                })


        }
        else {
            Swal.fire({
                title: "You are not Login",
                text: "Please Login Before Add to the Cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"

            })
                // navigate('/login')
                .then((result) => {
                    if (result.isConfirmed) {

                        // যে প্রাইভেট পেজ থেকে লগিন পেজে আসবে লগিন এরপর সরাসরি ঐ পেজে যেতে এবং location ব্যবহার করার জন্য state কে ব্যবহার করতে হবে।
                        navigate('/login', { state: { from: location } })
                    }
                });
        }


    }



    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="">
                    <img
                        src={image}
                        alt="image loading..." />
                </figure>
                <p className="absolute bg-gray-700 px-2 text-yellow-400 font-medium right-0 mt-2 mr-4 ">${price}</p>
                <div className="card-body flex justify-center items-center ">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>


                    <div className=' flex justify-center mt-10 mx-auto '>
                        <button
                            //onClick={()=>handleAddToCart(item._id)}
                            onClick={() => handleAddToCart(item)}
                            className='btn btn-outline bg-slate-700 hover:bg-slate-400  hover:text-black border-0 border-b-4 rounded-lg'>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
