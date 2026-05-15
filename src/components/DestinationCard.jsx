import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';


const DestinationCard = ({destination}) => {
    
    const {_id, country, imageUrl, duration, price, destinationName } = destination;
    return (
        <div className='p-3 border'>
          <Image className='w-full' src={imageUrl} alt='image' width={300} height={300}></Image>
             
             <div>
                <p>📍 {country}</p>
                <div className='flex items-center justify-between'>
                    <h2>{destinationName}</h2>
                    <p>Price {price}/person</p>
                </div>
                <p>Duration: {duration} </p>
                <Link href={`/destination/${_id}`}><Button>Book Now</Button></Link>
             </div>

        </div>
    );
};

export default DestinationCard;