'use client'
import React from 'react'
import Container from '../Container/Container'
import Image from 'next/image'
import HyperLogo from '@/assets/images/hyper_logo.webp'
import { IoBasketSharp } from "react-icons/io5";

import Link from 'next/link'
const Navbar = () => {
  const basketLength = JSON.parse(localStorage.getItem("basket") || "[]");
  return (
    <div className='w-full h-[80px] p-4 bg-gray-300 flex items-center'>
        <Container className='flex items-center justify-between w-full'>
            <Link href={'/'}><Image src={HyperLogo} alt='Hyper Logo' width={150} height={40} /></Link>
            <Link href={'/basket'} className='relative cursor-pointer'>
                <IoBasketSharp className='size-8'/>
                <div  className='absolute -right-1 -top-1 size-5 rounded-full bg-black flex items-center justify-center p-2'>
                    <p className='text-white'>{basketLength ? basketLength.length : 0}</p>
                </div>
            </Link>
        </Container>
    </div>
  )
}

export default Navbar