
import footerBg from '../../assets/img/footerBg.jpg'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import footerTwo from '../../assets/img/footer-two.svg'


const Footer = () => {


    return (
        <footer className='bg-center bg-cover bg-fixed border-t border-slate-700' style={{ backgroundImage: `url(${footerTwo})` }}>

            <div className='grid grid-cols-1 lg:grid-cols-12  my-container py-24 text-white'>
                <div className='flex justify-between col-span-3'>
                    <ul className='space-y-3'>
                        <span className="footer-title">Recipes</span>
                        <li><Link>Main courses</Link></li>
                        <li><Link>Appetizers</Link></li>
                        <li><Link>Desserts</Link></li>
                        <li><Link>Beverages</Link></li>
                    </ul>
                    <ul className='space-y-3'>
                        <span className="footer-title">About</span>
                        <li><Link>About us</Link></li>
                        <li><Link>Our story</Link></li>
                        <li><Link>Meet the chefs</Link></li>
                        <li><Link>Join our team</Link></li>
                    </ul>
                </div>

                <div className='col-span-6 flex justify-center items-center'>
                    <div className='rounded-full h-64 w-64 border flex flex-col justify-center items-center space-y-4'>
                        <h2 className='font-bold text-2xl text-red-500'>Spice of Life</h2>
                        <div className='relative'>
                            <p className='font-bold pb-2'>Established . 2018</p>
                            <div className='h-0.5 w-10 bg-green-500 absolute top-full left-0 right-0 mx-auto'></div>
                        </div>
                        <ul className='flex gap-2 text-xl'>
                            <li> <Link className='rounded-full h-10 w-10 border border-red-500 flex justify-center items-center'> <FaFacebookF></FaFacebookF> </Link> </li>
                            <li> <Link className='rounded-full h-10 w-10 border border-red-500 flex justify-center items-center'> <FaTwitter></FaTwitter> </Link> </li>
                            <li> <Link className='rounded-full h-10 w-10 border border-red-500 flex justify-center items-center'> <FaGithub></FaGithub> </Link> </li>
                        </ul>

                    </div>
                </div>

                <div className='col-span-3'>
                    <ul className='space-y-3'>
                        <span className="footer-title">Legal</span>
                        <li><Link>Terms of use</Link></li>
                        <li><Link>Privacy policy</Link></li>
                        <li><Link>Meet Cookie policy</Link></li>
                    </ul>
                </div>
            </div>

            <div className='text-center border-t border-t-slate-800 text-slate-300'>
                <p className='py-6 font-bold'>Copyright © 2023 - All right reserved by Spice of Life</p>
            </div>

        </footer>
    );
};

export default Footer;