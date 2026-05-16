import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const userId = session?.user?.id;
    
    const {token} = await auth.api.getToken({
        headers: await headers()
    });


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${userId}`,{
        headers: {authorization: `Bearer ${token}`}
    })
    const myBooking = await res.json();
    console.log(myBooking)

    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <h2>My Booking</h2>
                <div className='space-y-2'>
                    {
                        myBooking.map(booking => <BookingCard key={booking._id} booking={booking} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBookingPage;