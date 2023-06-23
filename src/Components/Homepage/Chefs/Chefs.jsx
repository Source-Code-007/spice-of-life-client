import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import { ColorRing } from 'react-loader-spinner'
import CommonSectionTitle from '../../HelpingCompo/CommonSectionTitle';

const Chefs = () => {
    const [chefsData, setChefsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_SERVER_URL}/chefs`)
            .then(res => res.json())
            .then(data => {setChefsData(data); setIsLoading(false)})
    }, [])

    return (
        <section className='py-20 text-white'>
            <div className='max-w-7xl mx-10 xl:mx-auto'>
                <CommonSectionTitle title={'Our Team of Talented Chefs'} subtitle={'From Classic to Creative, Our Chefs Have Something for Every Palate'}></CommonSectionTitle>

                {
                    !isLoading ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            chefsData?.map(chef => {
                                const { _id, chef_picture, chef_name, num_recipes, years_of_experience, description, likes } = chef
                                return <div key={_id} className="card shadow-slate-500 shadow-inner">
                                    <figure>
                                            <img className='h-96 w-full object-cover' src={chef_picture} alt={chef_name} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-3xl mb-2">{chef_name}</h2>
                                        <p className='text-gray-400 flex items-center gap-2'><FaThumbsUp className='text-green-500'></FaThumbsUp> <span> {likes}</span></p>
                                        <p className='text-gray-400'><span className="badge bg-success font-bold">{num_recipes}</span> special recipes</p>
                                        <p className='text-gray-400'><span className="badge bg-success font-bold">{years_of_experience}+</span> years of experience</p>
                                        <p className='text-gray-300 my-4'>{description}</p>
                                        <div>
                                            <Link to={`/chef/${_id}`}><button className="cmn-btn-one" >View Recipes</button></Link>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div> : <div className='flex justify-center'><ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    /></div>}
            </div>
        </section>
    );
};

export default Chefs;