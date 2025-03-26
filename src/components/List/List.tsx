'use client'
import { setData } from '@/redux/appSlice'
import axios from 'axios'
import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListItem from './ListItem'
import Container from '../Container/Container'
import { toast } from 'react-toastify'
const List = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.app.data);
    const [filtered, setFiltered] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                dispatch(setData(res.data));
            } catch (error) {
                toast.error('Veri çekme hatası!')
            }
        };
    
        fetchData();
    }, [dispatch]);
    

    const filteredProducts = useMemo(() => {
        if (!filtered) return data;
        return data.payload.filter((item: any) => item.category === filtered);
    }, [filtered, data]);

    return (
        <Container className='flex xl:flex-row flex-col items-baseline v:gap-20'>
            <select onChange={(e) => setFiltered(e.target.value)} value={filtered}>
                <option value="">Tüm Kategoriler</option>
                <option value="men's clothing">Erkek Giyim</option>
                <option value="women's clothing">Kadın Giyim</option>
            </select>
           
            {data && <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-5 lg:mt-10 mt-3 lg:flex-1/2 m-auto '>
                <Suspense fallback={<p>Loading...</p>}>
                {filtered ? filteredProducts?.map((dat: any) => (
                    <ListItem dataImage={dat.image} dataTitle={dat.title} dataPrice={dat.price} dataId={dat.id} data={data.payload}/>
                )) : data?.payload?.map((dat: any) => (
                    <ListItem dataImage={dat.image} dataTitle={dat.title} dataPrice={dat.price} dataId={dat.id} data={data.payload}/>
                ))}
            </Suspense>
            </div>}
        </Container>
    )
}

export default List