'use client'
import { setBasket } from '@/redux/appSlice';
import Image from 'next/image';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-toastify'
interface IPropsListItem {
  data?:any;
  dataImage?: any;
  dataTitle: string;
  dataPrice?: string;
  dataId?: any;
}

const ListItem: React.FC<IPropsListItem> = ({ data,dataImage, dataTitle, dataPrice, dataId }) => {

  const dispatch = useDispatch()
  const addBasketFunc = (id: any) => {
    const basketData = JSON.parse(localStorage.getItem("basket") || "[]");
  
    const newItem = data.filter((dat: any) => dat.id === id); 
  
    dispatch(setBasket([...basketData, ...newItem]));
  
    localStorage.setItem("basket", JSON.stringify([...basketData, ...newItem])); 
  
    toast.success("Başarıyla sepete eklendi!");
  };
  
  return (
    <>
      {
        dataId &&
        <div className='flex flex-col justify-between gap-2 w-[300px] h-[350px] bg-gray-300 rounded-md p-2'>
          <div className='flex flex-col gap-2'>
          <Image src={dataImage} alt='Data Image' width={200} height={200} className='mx-auto w-[200px] h-[200px] object-contain' />
          <p className='text-sm'>{dataTitle}</p>
          <p>{dataPrice} $</p>
          </div>
          <button onClick={() => addBasketFunc(dataId)} className='bg-blue-600 rounded-md w-full h-10 text-white hover:scale-105 transition-all hover:bg-blue-500 cursor-pointer  shrink-0'>Sepete Ekle</button>
        </div>
      }
    </>
  )
}

export default ListItem