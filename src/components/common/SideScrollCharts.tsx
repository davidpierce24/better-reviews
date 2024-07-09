import React, { useState } from 'react'
import ChartCard from './ChartCard'

interface ChartCardProps {
    rank: number;
    title: string;
    imageUrl: string;
    score: number;
}

interface ScrollProps{
    listTitle: string;
    itemList: ChartCardProps[]
}


const SideScrollCharts: React.FC<ScrollProps> = (
    { listTitle, itemList }
) => {
  return (
    <div className="overflow-auto l-5 flex flex-col gap-y-2">
      <h1 className="text-3xl font-semibold pl-5">{listTitle}</h1>
      <div className="flex overflow-scroll px-5 scrollbar-hide">
        {itemList.map((item: ChartCardProps, index: number) => (
          <div key={item.rank}>
            <ChartCard
              rank={index + 1}
              title={item.title}
              imageUrl={item.imageUrl}
              score={item.score}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideScrollCharts