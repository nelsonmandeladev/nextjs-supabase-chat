import { verifyOtp } from '@/lib';
import { EmailOtpType } from '@supabase/supabase-js';
import { Loader2 } from 'lucide-react';
import React from 'react'


interface ConfirmAccountPageProps {
    // get all search params from URL
    searchParams: Promise<{ token_hash: string, type: EmailOtpType, next: string }>;
}
export default async function ConfirmAccountPage(props: ConfirmAccountPageProps) {
    const { searchParams } = props;
    const search = await searchParams;
    await verifyOtp({
        token_hash: search.token_hash,
        type: search.type,
        next: search.next
    });
    return (
        <div className='h-screen w-full flex flex-col items-center justify-center'>
            <div className="w-xl flex flex-col items-center justify-center text-center">
                <Loader2 size={50} className='animate-spin text-blue-700' />
                <p className="text-slate-500">
                    {"Account confirmation in progress..."}
                </p>
            </div>
        </div>
    )
}
