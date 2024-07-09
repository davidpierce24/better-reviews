import ChartCard from '@/components/common/ChartCard'
import PopularAnime from '@/components/mal/PopularAnime'
import TopAiringAnime from '@/components/mal/CurrentSeasonAnime'
import TopAnime from '@/components/mal/TopAnime'
import React from 'react'
import CurrentSeasonAnime from '@/components/mal/CurrentSeasonAnime'

function page() {
  return (
    <main 
    className='flex-1 flex pt-6 pb-12 flex-col gap-y-12'>
      <TopAnime />
      <PopularAnime />
      <CurrentSeasonAnime />
    </main>
  )
}

export default page