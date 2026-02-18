
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        console.log('GoogleSignIn');


        googleSignIn()
            .then(result => {
                console.log('Google SignIn SuccessFully', result.user);
                Swal.fire({
                    title: "SignIn with Google SuccessFully",
                    icon: "success",
                    draggable: true
                });
                navigate('/')

            })

    }

    return (
        <div className='w-full'>
            <div className="divider">OR</div>
            <button type='button' onClick={handleGoogleSignIn} className="btn w-full  bg-white text-black border-[#e5e5e5]">
                <FcGoogle className='text-xl'></FcGoogle>
                Login with Google
            </button>
        </div>
    )
}

export default SocialLogin
