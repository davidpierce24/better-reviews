import ChartCard from '@/components/common/ChartCard'
import PopularAnime from '@/components/mal/PopularAnime'
import TopAiringAnime from '@/components/mal/CurrentSeasonAnime'
import TopAnime from '@/components/mal/TopAnime'
import React from 'react'
import CurrentSeasonAnime from '@/components/mal/CurrentSeasonAnime'

function page() {
  return (
    <main 
    className='flex-1 flex py-6 flex-col gap-y-16'>
      <TopAnime />
      <CurrentSeasonAnime />
      <PopularAnime />
    </main>
  )
}

export default page