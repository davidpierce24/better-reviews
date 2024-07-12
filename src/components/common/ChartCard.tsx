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
  rank?: number;
  title: string;
  imageUrl: string;
  score?: number;
}

const ChartCard: React.FC<ChartCardProps> = ({
  rank,
  title,
  imageUrl,
  score,
}) => {
  return (
    <div className="relative min-w-52 rounded">
      <div className="py-6 px-6 relative">
        <div className="absolute p-4 inset-5 bg-transparent rounded-2xl hover:bg-background/90 text-transparent hover:text-primary flex justify-center items-center text-center overflow-hidden font-semibold transition-all duration-200 ease-in-out">
          <p>{title}</p>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          className="rounded-2xl h-[200px] w-[200px] hover:opacity-30"
          width={200}
          height={200}
        />
      </div>
      {rank != null && (
        <p
          className={`${lobster.className} text-6xl font-bold absolute drop-shadow-xl drop-shadow-black text-background left-1 top-0 blur`}
        >
          {rank}
        </p>
      )}
      {rank != null && (
        <p
          className={`${lobster.className} text-6xl font-bold absolute drop-shadow-xl drop-shadow-black text-primary left-0 top-0`}
        >
          {rank}
        </p>
      )}
      {score != null && (
        <div className="absolute bottom-4 right-0 w-28 h-8 bg-background blur-lg" />
      )}
      {/* <div
        className={`${lobster.className} text-4xl font-bold absolute drop-shadow-xl drop-shadow-black text-background bottom-2 right-1 blur flex items-center gap-x-1`}>
            {score}<StarFilledIcon
            className='h-6 w-6'/>
        </div> */}
      {score != null && score != 0 && (
        <div
          className={`${lobster.className} text-4xl font-bold absolute drop-shadow-xl drop-shadow-black text-primary bottom-2 right-2 flex items-center gap-x-1`}
        >
          {parseFloat(score.toString()).toFixed(2)}
          <StarFilledIcon className="h-6 w-6" />
        </div>
      )}
    </div>
  );
};

export default ChartCard;
