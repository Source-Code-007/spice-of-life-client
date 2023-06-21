import CountUp from 'react-countup';



const CouterUp = () => {
    return (
        <div className='py-16 my-36'>
            <div className='my-container grid grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='bg-[#0b1315] text-center py-12 px-6 rounded'>
                    <p className='font-semibold text-xl'>Recipes</p>
                    <h2 className='font-bold text-3xl'><CountUp end={80} enableScrollSpy={true} /> +</h2>
                </div>
                <div className='bg-[#0b1315] text-center py-12 px-6 rounded'>
                    <p className='font-semibold text-xl'>Ingredients</p>
                    <h2 className='font-bold text-3xl'><CountUp end={250} enableScrollSpy={true} /> +</h2>
                </div>
                <div className='bg-[#0b1315] text-center py-12 px-6 rounded'>
                    <p className='font-semibold text-xl'>Review</p>
                    <h2 className='font-bold text-3xl'><CountUp end={500} enableScrollSpy={true} /> +</h2>
                </div>
                <div className='bg-[#0b1315] text-center py-12 px-6 rounded'>
                    <p className='font-semibold text-xl'>Customer</p>
                    <h2 className='font-bold text-3xl'><CountUp end={1500} enableScrollSpy={true}/> +</h2>
                </div>
            </div>
        </div>
    );
};

export default CouterUp;