import React, { useContext } from 'react';
import { AuthContextData } from '../../AuthContext/AuthContextCompo';
import { Link } from 'react-router-dom';
import ActiveLink from '../HelpingCompo/ActiveLink';
import logo from '../../assets/img/logo2.png'
import { ColorRing } from 'react-loader-spinner'

const Nav = () => {
    const { user, setUser, loading, signoutFunc } = useContext(AuthContextData)

    // handleSignout func
    const handleSignout = () => {
        signoutFunc().then(() => {
            setUser(null)
        }).catch(e => {
            {
                console.log(e.message);
            }
        })
    }

    return (
        <nav style={{ background: '#0b1315' }} className="navbar justify-between text-white absolute top-0 left-0 py-2 z-50">
            <Link to={'/'}><img className='h-16 w-16' src={logo} alt="" /></Link>

            <div>
                {/* for mobile menu */}
                <div className="dropdown text-white">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" style={{ background: '#0f1d22' }}>
                        <li className='p-3'><ActiveLink path={'/'}>Home</ActiveLink></li>
                        <li className='p-3'><ActiveLink path={'/services'}>Services</ActiveLink></li>
                        <li className='p-3'><ActiveLink path={'/blog'}>Blog</ActiveLink></li>
                        <li className='p-3'><ActiveLink path={'/my-recipe'}>My Recipe</ActiveLink></li>
                    </ul>
                </div>
                {/* for desktop menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        <li className='p-3'><ActiveLink path={'/'}>Home</ActiveLink></li>
                        <li className='p-3'><ActiveLink path={'/services'}>Services</ActiveLink></li>
                        <li className='p-3'><ActiveLink path={'/blog'}>Blog</ActiveLink></li>
                        <li className='p-3'><ActiveLink path={'/my-recipe'}>My Recipe</ActiveLink></li>
                    </ul>
                </div>
            </div>

            <div className="flex-none gap-2">
                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTir12XNh1cDmhdLZWIW6-kQrng4lSppOcBYnpqnoYv0g&s'} title={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 text-black shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={handleSignout}>Logout</a></li>
                        </ul>
                    </div> : loading ? <ColorRing
                        visible={true}
                        height="50"
                        width="50"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    /> : <Link to='/signin'><button className='btn btn-success border border-orange-500 text-slate-50 font-bold' style={{ background: '#0b1315' }}>Sign in</button></Link>
                }
            </div>

        </nav>
    );
};

export default Nav;