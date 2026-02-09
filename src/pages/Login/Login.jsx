import { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/login-img.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';



const Login = () => {


    const { signIn } = useContext(AuthContext);


    const handleLogin = event => {
        event.preventDefault();
        console.log('login page start');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        // email, password send to firebase auth for user login;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    }







































    // ------------Captcha Validate Functionality---------->

    // componentDidMount () {
    //     loadCaptchaEnginge(6); 
    //  };--------> from Captcha website

    const captchaRef = useRef(null); //useRef call for get captcha input value
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6);    //--------> from Captcha website
    })

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        // console.log(user_captcha_value)


        if (validateCaptcha(user_captcha_value)) {
            // (validateCaptcha(user_captcha_value, false) == true)---extra/additional

            alert('Captcha Matched');
            console.log(user_captcha_value);
            setDisabled(false)
        }

        else {
            alert('Captcha Does Not Match');
        }

    }




    return (
        <div>
            <div className="hero py-16 bg-base-200 md:min-h-screen">
                <div className="hero-content flex-col gap-16 lg:flex-row">
                    <div className="text-center md:w-1/2 hidden md:flex lg:text-left ">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card bg-base-100 md:w-1/2  w-full md:max-w-sm shrink-0 shadow-2xl">
                    
                            <h1 className="text-5xl text-center mt-4 font-bold">Login now!</h1>

                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">

                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />

                                <div><a className="link link-hover">Forgot password ?</a></div>




                                {/* ---------Validate Captcha------ */}

                                <label className="label "><LoadCanvasTemplate />
                                </label>

                                <input
                                    type="text"
                                    ref={captchaRef}
                                    name='captcha'
                                    className="input"
                                    placeholder="Type the text above" />

                                <input
                                    onClick={handleValidateCaptcha}
                                    className="btn btn-primary mt-4" type="button"
                                    value={'Validate'} />










                                {/* Login btn */}
                                <input className="btn btn-neutral mt-4" type="submit" disabled={disabled} value={'Login'} />

                            </fieldset>

                        <p className='text-center my-'> <small>New Here? <Link to='/signUp' className='text-red-600 underline'>Creat an Account.</Link> </small></p>

                        </form>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
