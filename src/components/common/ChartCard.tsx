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
    <div className='relative flex'>
        <div className='py-6 px-6'>

        <Image 
            src={imageUrl} alt='Derpmander'
            className='rounded-2xl h-[200px] w-[200px] opacity-80'
            width={200} 
            height={200}
            />
        </div>
        <p 
        className={`${lobster.className} text-6xl font-bold absolute drop-shadow-xl drop-shadow-black text-primary`}>
            {rank}
        </p>
        <p
        className={`${lobster.className} text-5xl font-bold absolute drop-shadow-xl drop-shadow-black text-primary bottom-2 right-2 text-cyan-500 `}>
            {score}
        </p>
    </div>
  )
}

export default ChartCard