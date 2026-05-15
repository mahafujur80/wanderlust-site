'use client'
import { authClient } from '@/lib/auth-client';
import { Button, DateField, Label } from '@heroui/react';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

const BookNowForm = ({ destination }) => {
    const {_id, price, imageUrl, destinationName, country} =destination;
    const { data: session, } = authClient.useSession();
    const user = session?.user;
    const [date, setDate] = useState(null)

const handleBooking = async()=>{
    const booking = {
        userName: user?.name,
        userId: user?.id,
        userImage: user?.image,
        destinationId: _id,
        destinationName,
        imageUrl,
        country,
        price,
        departureDate: new Date(date),
    }
    // check user login token
    const {data:tokenData} = await authClient.token()

  const res = await fetch(`${process.env.SERVER_API_URL}/booking`,{
    method: 'POST',
    headers: {'content-type': 'application/json',
        authorization: `Bearer ${tokenData?.token}`
    },
    body: JSON.stringify(booking)
  })
  const data = await res.json()
  console.log(data)
  
  if(data.acknowledged){
    alert('Booking Success');
    redirect('/destination')
  }else if(!data.acknowledged){
    alert(data.message)
  }
}

    return (
        <div className='p-3 w-50 border'>
            <div>
                <p>Starting from</p>
                <p className='text-blue-300 text-lg font-bold'> $ {destination.price}</p>
                <p>Per Person</p>
                <DateField onChange={setDate} name="date">
                    <DateField.Group>
                        <Label>Date</Label>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
                <Button onClick={handleBooking} className="w-full rounded-none">Book Now</Button>
            </div>
        </div>
    );
};

export default BookNowForm;