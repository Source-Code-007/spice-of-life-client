import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContextData } from '../../AuthContext/AuthContextCompo';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const { createUserWithEmailPassFunc, updateUserProfileFunc, signoutFunc } = useContext(AuthContextData)
    const navigate = useNavigate()

    // handleSubmitFunc
    const handleSubmitFunc = (e) => {
        e.preventDefault()
        setSuccess('')
        setError('')
        const first_name = e.target.first_name.value
        const last_name = e.target.last_name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const repeat_password = e.target.repeat_password.value
        const photo = e.target.photo.value

        // form validation **
        if (password !== repeat_password) {
            setError('Your password is not match!')
            return
        }
        // Check if the email address is valid
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }
        // Check if the password is at least 6 characters long and contains at least one uppercase letter, one lowercase letter, and one number
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
            return;
        }


        createUserWithEmailPassFunc(email, password).then(res => {
            const currUser = res.user
            setSuccess('user created successfully')
            signoutFunc()
            navigate('/signin')
            updateUserProfileFunc(currUser, `${first_name} ${last_name}`, photo).then(() => {
                // console.log('successfully user update');
            }).catch(e => {
                setError(e.message)
            })
        }).catch(e => {
            // console.log(e.message);
            setError(e.message)
        })
    }

    return (
        <div style={{ background: '#0f1d22' }}>
            <div className='min-h-screen sm:max-w-md mx-8 sm:mx-auto flex justify-center items-center'>
                <form onSubmit={handleSubmitFunc} className='space-y-4 my-16 w-full text-white shadow-inner shadow-slate-500 p-8 rounded-lg'>
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Create an account
                    </h1>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full group">
                            <input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="relative z-0 w-full group">
                            <input type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="photo" id="photo" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="photo" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type={showPass ? 'text' : "password"} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        <span onClick={() => setShowPass(!showPass)} className='absolute right-2 bottom-3'>{showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type={showPass ? 'text' : "password"} name="repeat_password" id="repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-light text-gray-300">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500">Terms and Conditions</Link></label>
                        </div>
                    </div>
                    {error && <p className="text-red-500">*{error}</p>}
                    {success && <p className="text-green-500 font-bold">{success}</p>}
                    <button type="submit" className="w-full text-white btn btn-success border border-orange-500 font-bold text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" style={{ background: '#0b1315' }}>Create an account</button>
                    <p className="text-sm font-light text-gray-300">
                        Already have an account? <Link to='/signin' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;  