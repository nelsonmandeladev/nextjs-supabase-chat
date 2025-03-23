import { CircleSlash2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default async function ConfirmAccountPage() {
    return (
        <div className='h-screen w-full flex flex-col items-center justify-center'>
            <div className="w-xl flex flex-col items-center justify-center text-center gap-5">
                <CircleSlash2 size={50} className='text-red-700' />
                <p className="text-slate-500">
                    {"Account confirmation failed, please go"} <Link className='text-blue-500' href={"/register"}>back to register</Link> and try again
                </p>
            </div>
        </div>
    )
}
