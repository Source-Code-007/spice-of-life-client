import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContextData } from '../../AuthContext/AuthContextCompo';

const Signin = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const { setUser, signinUserWithEmailPassFunc, signinWithGithubFunc, signinWithGoogleFunc, setLoading } = useContext(AuthContextData)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.pathname || '/'

    // handleSigninFunc
    const handleSigninFunc = (e) => {
        e.preventDefault()
        setSuccess('')
        setError('')
        const email = e.target.email.value
        const password = e.target.password.value

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

        signinUserWithEmailPassFunc(email, password).then(res => {
            const currUser = res.user
            setUser(currUser)
            setSuccess('user signin successfully!')
            navigate(from)
        }).catch(e => {
            setLoading(false)
            if (e.code === "auth/user-not-found") {
                setError("The email address you entered is not registered.");
            } else if (e.code === "auth/wrong-password") {
                setError("The password you entered is incorrect.");
            } else {
                setError(e.message);
            }
        })
    }

    // handleGoogleSigninFunc
    const handleGoogleSigninFunc = () => {
        signinWithGoogleFunc().then(res => {
            const currUser = res.user
            setUser(currUser)
            navigate(from)
        }).catch(e => {
            setLoading(false)
            setError(e.message)
            // console.log(e.message);
        })
    }

    // handleGithubSigninFunc
    const handleGithubSigninFunc = () => {
        signinWithGithubFunc().then(res => {
            const currUser = res.user
            setUser(currUser)
            navigate(from)
        }).catch(e => {
            setLoading(false)
            setError(e.message)
            // console.log(e.message);
        })
    }


    return (<section style={{background: '#0f1d22'}}>
        <div className="flex items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
            <div className="w-full bg-transparent text-white shadow-inner shadow-slate-500 rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Sign in to your account
                    </h1>
                    <form onSubmit={handleSigninFunc} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your email here" required />
                        </div>
                        <div className='relative'>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type={showPass? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            <span onClick={()=>setShowPass(!showPass)} className='absolute right-2 bottom-3 text-slate-700'>{showPass? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" name='remember' aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        {error && <p className='text-red-500'>{error}</p>}
                        {success && <p className='text-green-500'>{success}</p>}
                        <button type="submit" className="w-full text-white btn btn-success border border-orange-500 font-bold text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" style={{background: '#0b1315'}}>Sign in</button>

                        <p className="text-sm font-light text-gray-300">
                            Don’t have an account yet? <Link to='/signup' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                        </p>
                    </form>

                    <div className='flex items-center'>
                        <hr className="flex-grow" />
                        <span className="mx-2">Or sign in with</span>
                        <hr className="flex-grow" />
                    </div>
                    <div className='flex justify-evenly gap-4 flex-col sm:flex-row'>
                        <button onClick={handleGoogleSigninFunc} className='btn btn-success border  border-orange-500 text-orange-500 px-6 font-bold' style={{background: '#0b1315'}}> <FaGoogle className='mr-2'></FaGoogle> Google</button>
                        <button onClick={handleGithubSigninFunc} className='btn btn-success border border-orange-500 text-orange-500 px-6 font-bold' style={{background: '#0b1315'}}> <FaGithub className='mr-2'></FaGithub> Github</button>
                    </div>

                </div>
            </div>
        </div>
    </section>
    );
};

export default Signin;