'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const { data: session, } = authClient.useSession();
    const user = session?.user;



    return (
        <div>
            <nav className='flex justify-between p-5 border-b-2'>
                <ul className='flex gap-3'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/destination'}>Destinations</Link></li>
                    <li><Link href='/My-Booking'>My Bookings</Link></li>
                    <li><Link href={'/admin'}>Admin</Link></li>
                    <li><Link href={'/add-destination'}>Add Destination</Link></li>
                </ul>

                <div>
                    <Image src={'/assets/Wanderlast.png'} alt='logo' width={150} height={150}></Image>
                </div>

                <ul className='flex gap-3'>
                    <li><Link href={'/profile'}>Profile</Link></li>
                    {
                        user ? <>
                            <Avatar>
                                <Avatar.Image alt="user avater" src={user?.image} />
                                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>
                            <Button variant='danger' onClick={()=> authClient.signOut()}>sign out</Button>
                        </> :
                            <>
                                <li><Link href="/signin">Login</Link></li>
                                <li><Link href="/signup">SignUp</Link></li>
                            </>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;