import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import signUpImg from '../../assets/signup.png';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';


const SignUp = () => {

    const navigate = useNavigate()
    const { creatUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic()
    // watch input value by passing the name of it
    //console.log(watch("example"));



    const onSubmit = (data) => {
        console.log(data)


        creatUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('User Profile Updated');


                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }

                        // use axiosSecure from custom hook ---->
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log(res.data);
                                if (res.data.insertedId) {

                                    console.log('User info added to the database')

                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "New Account Created Successfully.",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });

                                    reset();       //-----------> form data reset
                                    navigate('/')  //-----------> navigate to home page


                                }

                            })



                    })
                    .catch(error => console.log(error))

            })



    }

    return (
        <div>

            <Helmet>
                <title> Bistro | Sign Up </title>
            </Helmet>

            <div className="hero py-16 bg-base-200 md:min-h-screen">
                <div className="hero-content flex-col gap-16 lg:flex-row">
                    <div className="text-center md:w-1/2 hidden md:flex lg:text-left ">
                        <img src={signUpImg} alt="" />
                    </div>
                    <div className="card bg-base-100 md:w-1/2  w-full md:max-w-sm shrink-0 shadow-2xl">

                        <h1 className=" text-2xl md:text-5xl text-center mt-4 font-bold">Sign Up now!</h1>

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <fieldset className="fieldset">

                                <label className="label">Photo URL</label>
                                <input
                                    type="txet"
                                    name='photoURL'
                                    className="input"
                                    placeholder=" Photo URL"
                                    {...register("photoURL", { required: true })}
                                />
                                {errors.photoURL && <span className='text-red-500'>Photo URL field is required</span>}


                                <label className="label">Name</label>
                                <input
                                    type="txet"
                                    name='name'
                                    className="input"
                                    placeholder="User Name"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className='text-red-500'>Name field is required</span>}

                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    className="input"
                                    placeholder="Email"
                                    {...register("email", { required: true })}
                                />

                                {errors.email && <span className='text-red-500'>Email field is required</span>}


                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    name='password'
                                    className="input"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{6,20}$/
                                    })}

                                />

                                {errors.password?.type === "required" && (
                                    <p className="text-red-500">Password field is required</p>
                                )}

                                {/* minLength */}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-500">Password minimum 6 characters</p>
                                )}


                                {/* maxLength */}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-500">Password maximum 20 characters</p>
                                )}


                                {/* Pattern (Strong Password Error) */}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-500">
                                        Password must contain uppercase, lowercase, number, and special character
                                    </p>
                                )}





                                {/* Login btn */}
                                <input className="btn btn-neutral mt-4" type="submit" value={'Sign Up'} />

                            </fieldset>
                            <SocialLogin ></SocialLogin>
                            <p className='text-center my-4'> <small>Already Have an account? <Link to='/login' className='text-red-600 underline'>Please Login.</Link> </small></p>

                        </form>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
