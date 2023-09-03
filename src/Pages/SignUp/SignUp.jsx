import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://bistro-boss-server-rouge-seven.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };



    return (
        <div>
            <div className="bg-gray-100 flex items-center justify-center h-screen">
                <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                    <h1 className="text-4xl font-semibold mb-4 text-center">Register</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        {/* Name */}
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Name</label>

                            <input type="name"
                                id="name"
                                name="name"
                                placeholder='Enter name'

                                {...register("name", { required: true })}

                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400" />

                            {errors.name && <span className='text-red-700'>This field is required</span>}
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Email</label>

                            <input type="email"
                                id="email"
                                name="email"
                                placeholder='Enter email'

                                {...register("email", { required: true })}

                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400" />

                            {errors.email && <span className='text-red-700'>This field is required</span>}

                        </div>


                        {/* Password */}

                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Password</label>

                            <input type="password"
                                id="password"
                                name="password"
                                placeholder='Enter password'

                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /.*[A-Za-z].*/
                                })}

                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400" />
                        </div>

                        {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}

                        {errors.password?.type === 'minLength' && <p className='text-red-500'>Password atleast 6 characters</p>}

                        {errors.password?.type === 'pattern' && <p className='text-red-500'>Password atleast one capital letter and one special character</p>}

                        {/* Photo URL */}

                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Photo URL</label>

                            <input
                                id="text"
                                name="text"

                                placeholder='Enter photo'

                                type="photoURL"

                                {...register("photoURL", { required: true })}

                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400" />

                            {errors.photo?.type === 'required' && <p className='text-red-500'>Photo-Url is required</p>}
                        </div>



                        <input
                            className="w-full btn btn-warning "
                            type="submit"
                            value="Login" />

                    </form>

                    <p className='my-5'>If You Don't have a account, <Link className='text-xl text-yellow-600 px-3 ' to='/login'>Login</Link> Please</p>

                </div>

            </div>

            <center><SocialLogin></SocialLogin></center> <br />
            
        </div>
    );
};

export default SignUp;