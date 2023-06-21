import React from 'react';
import errBg from '../../assets/img/ErrorPageBG.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen bg-cover bg-center flex justify-end items-center' style={{ backgroundImage: `url(${errBg})` }}>
            <div className='mr-72 mt-32 space-y-4'>
                <h2 className='font-bold text-5xl'>Opps!</h2>
                <p className='text-xl font-semibold'>The page you requested could not be found!</p>
                <Link to='/' className='inline-block'><button className="btn btn-success border border-orange-500 text-white" style={{background: '#0b1315'}}>Back to Homepage</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;