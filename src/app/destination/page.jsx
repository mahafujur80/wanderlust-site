import DestinationCard from '@/components/DestinationCard';


const DestinationPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`,{cache: 'no-store'})
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