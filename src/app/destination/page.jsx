import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async() => {
    const res = await fetch(`${process.env.SERVER_API_URL}/destination`)
    const destination = await res.json();

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-bold text-3xl text-center'>All Destination </h1>

            <div className='grid grid-cols-3 gap-5'>
                {
                    destination.map(destination => <DestinationCard key={destination._id} destination={destination}/>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;