import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  setLocalStorage } from '../../Utilities/LocalStorage';

const ButtonDisable = ({ recipe_data }) => {
    const [disabled, setDisabled] = useState(false)

    const handleFavoriteFunc = () => {
        setDisabled(true)
        setLocalStorage(recipe_data)
        toast.success('Yay! New recipe added to favorites. Happy Cooking!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <>
            <button onClick={handleFavoriteFunc} className='flex justify-end' disabled={disabled}>{disabled ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>}</button>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            /></>
    );
};

export default ButtonDisable;