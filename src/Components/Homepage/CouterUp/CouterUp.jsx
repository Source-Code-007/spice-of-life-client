import CountUp from 'react-countup';
import counterUpBg from '../../../assets/img/counterUpBg.jpg'
import MyMotion from '../../../HelpingCompo/MyMotion';



const CouterUp = () => {
    return (
        <div className='min-h-[60vh] flex items-center my-36 bg-center bg-cover bg-fixed bg-slate-900 bg-blend-overlay' style={{ backgroundImage: `url(${counterUpBg})` }}>
            <div className='my-container flex-1 grid grid-cols-2 lg:grid-cols-4 gap-5'>
                <MyMotion x={150}>
                    <div className='bg-[#0b1315] text-center py-12 px-6 space-y-3 rounded'>
                        <p className='text-3xl'><CountUp end={80} enableScrollSpy={true} /> +</p>
                        <h3 className='font-bold text-2xl xl:text-4xl'>Recipes</h3>
                    </div>
                </MyMotion>
                <div className='bg-[#0b1315] text-center py-12 px-6 space-y-3 rounded'>
                    <p className='text-3xl'><CountUp end={250} enableScrollSpy={true} /> +</p>
                    <h3 className='font-bold text-2xl xl:text-4xl'>Ingredients</h3>
                </div>
                <div className='bg-[#0b1315] text-center py-12 px-6 space-y-3 rounded'>
                    <p className='text-3xl'><CountUp end={500} enableScrollSpy={true} /> +</p>
                    <h3 className='font-bold text-2xl xl:text-4xl'>Review</h3>
                </div>
                <MyMotion x={-150}>
                <div className='bg-[#0b1315] text-center py-12 px-6 space-y-3 rounded'>
                    <p className='text-3xl'><CountUp end={1500} enableScrollSpy={true} /> +</p>
                    <h3 className='font-bold text-2xl xl:text-4xl'>Customer</h3>
                </div>
                </MyMotion>
            </div>
        </div>
    );
};

export default CouterUp;