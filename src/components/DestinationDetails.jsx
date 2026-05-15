
import Image from 'next/image';
import { FaLocationPin } from 'react-icons/fa6';
import BookNowForm from './BookNowForm';


const DestinationDetails = ({ destination }) => {

    const { _id, country, imageUrl, duration, price, destinationName } = destination;
    return (
        <div className='p-3 border'>
            <Image className='w-full' src={imageUrl} alt='image' width={300} height={300}></Image>

            <div>
                <p className='flex items-center gap-3 text-xs font-bold'><FaLocationPin />  {country}</p>
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-semibold'>{destinationName}</h2>
                </div>
                <p className='text-sm font-semibold'>Duration: {duration} Days/ {duration - 1} Night </p>
                <div className='flex items-center justify-between'>
                    <div className=''>
                        <h2 className='text-lg font-bold'>
                            Overview
                        </h2>
                        <p>Travel planning involves setting a budget, researching destinations, and organizing logistics like flights and accommodations to create a balanced itinerary. Key aspects include prioritizing safety (visas/insurance), maximizing experiences through research, and balancing activities with downtime. Modern travel often emphasizes sustainable, experiential trips</p>
                    </div>
                    <div>
                        <BookNowForm destination={destination} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DestinationDetails;