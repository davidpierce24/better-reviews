import ChartCard from '@/components/common/ChartCard'
import PopularAnime from '@/components/mal/PopularAnime'
import TopAnime from '@/components/mal/TopAnime'
import React from 'react'

function page() {
  return (
    <main 
    className='flex-1 flex py-6 flex-col gap-y-16'>
      <TopAnime />
      <PopularAnime />
    </main>
  )
}

export default page