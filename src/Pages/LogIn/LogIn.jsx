import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LogIn = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [disabled, setDisabled] = useState(true);

    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // login
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // sweet alert import
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged In SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from , {replace:true} )

            })
    }


    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }


    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])


    return (
        <div>
            <div className="bg-gray-100 flex items-center justify-center h-screen">
                <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                    <h1 className="text-4xl font-semibold mb-4 text-center">Login</h1>

                    <form onSubmit={handleLogin}>

                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Email</label>

                            <input type="email"
                                id="email"
                                name="email"
                                placeholder='Enter email'
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400" />
                        </div>


                        {/* Password */}

                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Password</label>

                            <input type="password"
                                id="password"
                                name="password"
                                placeholder='Enter password'
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400" />
                        </div>


                        {/* Captcha */}

                        <div className="mb-4">

                            <div>
                                <LoadCanvasTemplate />
                            </div>

                            <input
                                type="text"
                                id="captcha"
                                name="captcha"
                                onBlur={handleValidateCaptcha}
                                placeholder='Enter captcha'
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400" />
                        </div>


                        <input
                            disabled={disabled}
                            className="w-full btn btn-warning "
                            type="submit"
                            value="Login" />

                    </form>

                    <p className='my-5'>If You Don't have a account, <Link className='text-xl text-yellow-600 px-3 ' to='/signup'>Register</Link> Please</p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;