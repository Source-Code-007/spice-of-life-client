import cmnCompoBg from '../assets/img/counterUpBg.jpg';

const CommonCompoBanner = ({ title, subtile }) => {
    return (
        <div className='h-[500px] bg-cover bg-center bg-slate-900 bg-blend-overlay flex items-center justify-center' style={{ backgroundImage: `url(${cmnCompoBg})` }}>
            <div className='w-4/6 xl:w-3/6 mx-auto space-y-5 text-center'>
                <h2 className='font-bold text-3xl xl:text-5xl'>{title}</h2>
                <p className=''>{subtile}</p>
            </div>
        </div>
    );
};

export default CommonCompoBanner;