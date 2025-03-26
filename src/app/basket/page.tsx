'use client'
import Container from '@/components/Container/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {

    const basketData = JSON.parse(localStorage.getItem("basket") || "[]");
    const totalPrice = basketData.reduce((acc: number, item: any) => acc + item.price, 0);
    return (
        <Container>
            <div className='flex items-baseline gap-10 mt-4 w-full lg:flex-row flex-col'>
                <div className='flex flex-col gap-4  w-full'>
                    {
                        basketData && basketData.map((data:any) => (
                            <div key={data.id} className='flex items-center justify-between gap-2 bg-gray-300 p-4 rounded-md w-full h-[150px]'>
                                <div className='flex items-center gap-2'>
                                    <Image src={data.image} alt='Data Image' width={100} height={100} className='size-[100px] object-contain'/>
                                    <p className=''>{data.title}</p>
                                </div>
                                <p>{data.price} $</p>
                            </div>
                        ))
                    }
                </div>
                <div className='w-full flex-1/3 flex flex-col items-center gap-10'>
                    <p>Toplam  : {totalPrice ? String(totalPrice).slice(0,5) : 0} $ </p>
                    <Link href={'/payment'} className='bg-blue-500 rounded-sm p-4 text-white'>Ödemeyi Tamamla</Link>
                </div>
            </div>
        </Container>
    )
}

export default page