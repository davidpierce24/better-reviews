import React from "react";
import derpmander from "#/public/derpmander.jpg";
import Image from "next/image";

function oops() {
  return (
    <main className="flex flex-col gap-y-6 flex-1 justify-center items-center">
      <h1 className="font-extrabold text-2xl">Oops! Page not found</h1>
      <Image
        src={derpmander}
        alt="Derpmander"
        className="rounded-2xl h-[200px] w-[200px]"
        width={200}
        height={200}
      />
    </main>
  );
}

export default oops;
