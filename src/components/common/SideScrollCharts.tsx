
import React, { useState } from "react";
import { ChartModal, ChartModalProps } from "./ChartModal";

interface ScrollProps {
  listTitle: string;
  itemList: ChartModalProps[];
}

const SideScrollCharts: React.FC<ScrollProps> = ({ listTitle, itemList }) => {
  return (
    <div className="l-5 flex flex-col gap-y-2 overflow-auto">
      <h1 className="pl-5 text-3xl font-semibold">{listTitle}</h1>
      <div className="scrollbar-hide flex overflow-scroll px-5">
        {itemList.map((item: ChartModalProps, index: number) => (
          <div key={item.id}>
            <ChartModal
              id={item.id}
              rank={item.rank != null ? index + 1 : item.rank}
              title={item.title}
              imageUrl={item.imageUrl}
              score={item.score}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideScrollCharts;
