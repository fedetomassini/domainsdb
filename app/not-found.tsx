import Link from 'next/link';
import { XCircle } from 'lucide-react';

export default function NotFound(){
    return(
        <>
        <section className="flex min-h-screen flex-col items-center mx-auto justify-center space-y-5">
            <h1 className='inline-flex gap-4 text-[30pt] font-bold italic items-center max-md:text-[15pt] max-md:gap-2'><XCircle size={36}/> Page not found! <XCircle size={36}/></h1>
            <Link href={'/'} className='underline underline-offset-[6px] decoration-dashed hover:text-[#7077A1]'>Go back</Link>
        </section>
        </>
    )
}