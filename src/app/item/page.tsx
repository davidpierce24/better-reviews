import { ChartModalProps } from '@/components/common/ChartModal'
import React from 'react'


export const page: React.FC<ChartModalProps> = ({
    id,
    rank,
    title,
    imageUrl,
    score,
    description,
}) => {

  return (
    <main className='flex-1 flex justify-center items-center'>
        {title}
    </main>
  )
}
