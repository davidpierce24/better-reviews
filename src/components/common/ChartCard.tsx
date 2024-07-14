// 'use client'

import React from "react";
import derpmander from "#/public/derpmander.jpg";
import Image from "next/image";
import { Lobster } from "next/font/google";
import { StarFilledIcon } from "@radix-ui/react-icons";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

export interface ChartCardProps {
  id: number;
  rank?: number;
  title: string;
  imageUrl: string;
  score?: number;
}

const ChartCard: React.FC<ChartCardProps> = ({
  id,
  rank,
  title,
  imageUrl,
  score,
}) => {
  return (
    <div className="relative min-w-52 rounded">
      <div className="relative px-6 py-6">
        <div className="absolute inset-5 flex items-center justify-center overflow-hidden rounded-2xl bg-transparent p-4 text-center font-semibold text-transparent transition-all duration-200 ease-in-out hover:sm:bg-background/90 hover:sm:text-primary">
          <p>{title}</p>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          className="h-[200px] w-[200px] rounded-2xl hover:opacity-30"
          width={200}
          height={200}
        />
      </div>
      {rank != null && (
        <p
          className={`${lobster.className} drop-shadow-black absolute left-1 top-0 text-6xl font-bold text-background blur drop-shadow-xl`}
        >
          {rank}
        </p>
      )}
      {rank != null && (
        <p
          className={`${lobster.className} drop-shadow-black absolute left-0 top-0 text-6xl font-bold text-primary drop-shadow-xl`}
        >
          {rank}
        </p>
      )}
      {score != null && (
        <div className="absolute bottom-4 right-0 h-8 w-28 bg-background blur-lg" />
      )}
      {/* <div
        className={`${lobster.className} text-4xl font-bold absolute drop-shadow-xl drop-shadow-black text-background bottom-2 right-1 blur flex items-center gap-x-1`}>
            {score}<StarFilledIcon
            className='h-6 w-6'/>
        </div> */}
      {score != null && score != 0 && (
        <div
          className={`${lobster.className} drop-shadow-black absolute bottom-2 right-2 flex items-center gap-x-1 text-4xl font-bold text-primary drop-shadow-xl`}
        >
          {parseFloat(score.toString()).toFixed(2)}
          <StarFilledIcon className="h-6 w-6" />
        </div>
      )}
    </div>
  );
};

export default ChartCard;
