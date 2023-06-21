import React from 'react';

const CommonSectionTitle = ({title, subtitle}) => {
    return (
        <div className='space-y-3 text-center mb-14 mt-8'>
        <div className='relative'>
            <h2 className='text-4xl font-bold pb-2'>{title}</h2>
            <div className='h-0.5 w-32 bg-green-500 absolute top-full left-0 right-0 mx-auto'></div>
        </div>
        <p className='text-slate-300 text-lg'>{subtitle}</p>
    </div>
    );
};

export default CommonSectionTitle;