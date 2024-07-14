"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ChartCard from "./ChartCard";
import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { StarFilledIcon } from "@radix-ui/react-icons";

export interface ChartModalProps {
  id: number;
  rank?: number;
  title: string;
  imageUrl: string;
  score?: number;
  description?: string;
}

export const ChartModal: React.FC<ChartModalProps> = ({
  id,
  rank,
  title,
  imageUrl,
  score,
  description,
}) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button>
            <ChartCard
              id={id}
              rank={rank}
              title={title}
              imageUrl={imageUrl}
              score={score}
            />
          </button>
        </DialogTrigger>
        <DialogContent className="min-h-80 p-0 sm:max-w-[500px]">
          <div className="flex flex-1 overflow-y-auto">
            <Image
              src={imageUrl}
              alt={title}
              className="h-full w-1/2 rounded"
              width={100}
              height={100}
            />
            <div className="flex flex-col gap-2 p-6">
              <DialogHeader className="flex flex-col gap-1">
                <DialogTitle>{title}</DialogTitle>
                <div className="flex items-center">
                  {score != null && score != 0 && (
                    <div className="flex items-center">
                      {parseFloat(score.toString()).toFixed(2)}
                      <StarFilledIcon className="ml-[2px] h-4 w-4" />
                    </div>
                  )}
                </div>
              </DialogHeader>
              <div className="max-h-32 overflow-scroll text-sm">
                {description || "No description available"}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>
          <ChartCard
            id={id}
            rank={rank}
            title={title}
            imageUrl={imageUrl}
            score={score}
          />
        </button>
      </DrawerTrigger>
      <DrawerContent className="min-h-[75%]">
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>
            {description || "No description available"}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
