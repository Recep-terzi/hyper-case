'use client'
import React, { useState } from "react";
import CardFlip from "react-card-flip";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const cardSchema = z.object({
    cardNumber: z.string()
        .length(16, "Kart numarası 16 haneli olmalı")
        .regex(/^\d+$/, "Sadece rakam giriniz"),
    expiry: z.string()
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Geçerli bir tarih giriniz (MM/YY)"),
    cvv: z.string()
        .length(3, "CVV 3 haneli olmalı")
        .regex(/^\d{3}$/, "Sadece rakam giriniz"),
});
const CreditCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [cardNumber, setCardNumber] = useState("");
    const [cardPerson, setCardPerson] = useState("Recep Terzi");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [submitCard,setSubmitCard] = useState(false)
    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: zodResolver(cardSchema),
    });

    const onSubmit = (data: any) => {
        setSubmitCard(true)
    };

    return (
       <>
       {
        !submitCard ?  <div className="flex flex-col items-center mt-10">
        <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="w-96 h-56 bg-blue-600 text-white rounded-xl p-5 shadow-lg">
                <h2 className="text-lg">Kredi Kartı</h2>
                <p className="mt-6 text-xl tracking-widest">{cardNumber || "**** **** **** ****"}</p>
                <div className="flex justify-between mt-4">
                    <div className="flex flex-col gap-1">
                    <p>Kart Sahibi</p> <p> {cardPerson}</p>
                    </div>
                    <p>{expiry || "MM/YY"}</p>
                </div>
            </div>

            <div className="w-96 h-56 bg-gray-800 text-white rounded-xl p-5 shadow-lg relative">
                <div className="bg-black h-10 w-full absolute top-5 left-0"></div>
                <p className="mt-16 text-center">CVV: {cvv || "***"}</p>
            </div>
        </CardFlip>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col gap-3">
            <input
                type="text"
                placeholder="Kart Numarası"
                maxLength={16}
                {...register("cardNumber")}
                className="border p-2 rounded"
            />
              {errors.cardNumber && <p className="text-red-500">{errors.cardNumber.message}</p>}
            <input
                type="text"
                placeholder="Son Kullanma Tarihi (MM/YY)"
                maxLength={5}
                {...register("expiry")}
                className="border p-2 rounded"
            />
             {errors.expiry && <p className="text-red-500">{errors.expiry.message}</p>}
            <input
                type="text"
                placeholder="CVV"
                maxLength={3}
                {...register("cvv")}
                onFocus={() => setIsFlipped(true)}
                onBlur={() => setIsFlipped(false)}
                className="border p-2 rounded"
            />
              {errors.cvv && <p className="text-red-500">{errors.cvv.message}</p>}
            <button type="submit" className="bg-blue-500 cursor-pointer hover:scale-105 transition-all w-full h-10 rounded-sm text-white">Ödemeyi Tamamla</button>
        </form>
    </div> : <div className="flex items-center justify-center m-auto text-center w-full h-full">
        <p className="text-green-400 text-[60px] "> Ödeme Başarıyla Tamamlandı!</p>
    </div>
       }
       </>
    );
};

export default CreditCard;