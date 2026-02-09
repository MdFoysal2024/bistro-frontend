import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import signUpImg from '../../assets/signup.png';



const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // watch input value by passing the name of it
    //console.log(watch("example"));

    const onSubmit = (data) => {
        console.log(data)

    }

    return (
        <div>
            <div className="hero py-16 bg-base-200 md:min-h-screen">
                <div className="hero-content flex-col gap-16 lg:flex-row">
                    <div className="text-center md:w-1/2 hidden md:flex lg:text-left ">
                        <img src={signUpImg} alt="" />
                    </div>
                    <div className="card bg-base-100 md:w-1/2  w-full md:max-w-sm shrink-0 shadow-2xl">

                        <h1 className="text-5xl text-center mt-4 font-bold">Sign Up now!</h1>

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <fieldset className="fieldset">

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
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className='text-red-500'>Password field is required</span>}







                                {/* Login btn */}
                                <input className="btn btn-neutral mt-4" type="submit" value={'Sign Up'} />

                            </fieldset>

                            <p className='text-center my-4'> <small>Already Have an account? <Link to='/login' className='text-red-600 underline'>Please Login.</Link> </small></p>

                        </form>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
