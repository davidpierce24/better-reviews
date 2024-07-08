import React from 'react'
import derpmander from '#/public/derpmander.jpg'
import Image from 'next/image'
import { Lobster } from 'next/font/google'

const lobster = Lobster({
    weight: "400",
    subsets: ['latin']
})

interface ChartCardProps {
    rank: number;
    title: string;
    imageUrl: string;
    score: number;
}

const ChartCard: React.FC<ChartCardProps> = (
    { rank, title, imageUrl, score }
) => {

  return (
    <div className='relative min-w-52'>
        <div className='py-6 px-6 relative text-transparent hover:text-primary'>
        
        <div className='absolute p-4 inset-5 bg-transparent rounded-2xl hover:bg-background/90 text-transparent hover:text-primary flex justify-center items-center text-center overflow-hidden font-semibold'>
            <p>{title}</p>
        </div>
        <Image 
            src={imageUrl} 
            alt={title}
            className='rounded-2xl h-[200px] w-[200px] hover:opacity-30'
            width={200} 
            height={200}
            />
        </div>
        <p 
        className={`${lobster.className} text-6xl font-bold absolute drop-shadow-xl drop-shadow-black text-background left-1 top-0`}>
            {rank}
        </p>
        <p 
        className={`${lobster.className} text-6xl font-bold absolute drop-shadow-xl drop-shadow-black text-primary left-0 top-0`}>
            {rank}
        </p>
        <p
        className={`${lobster.className} text-4xl font-bold absolute drop-shadow-xl drop-shadow-black text-background bottom-2 right-1`}>
            {score}
        </p>
        <p
        className={`${lobster.className} text-4xl font-bold absolute drop-shadow-xl drop-shadow-black text-primary bottom-2 right-2`}>
            {score}
        </p>
    </div>
  )
}

export default ChartCard