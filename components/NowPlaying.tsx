import React from "react";
import Image from "next/image";
import { SpotifyData } from "@/utils/types";

export const NowPlaying = ({ data }: { data: SpotifyData }) => {
  if (!data?.isPlaying) {
    return <></>;
  }

  const widthPercentage = (data?.timestamp / data?.duration) * 100;

  return (
    <div className="w-[260px] bg-black rounded-[25px] flex flex-col justify-center mx-auto p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-[60px] h-[60px] overflow-hidden rounded-sm">
            <Image
              src={data?.albumImageUrl}
              width={256}
              height={256}
              alt="album"
            ></Image>
          </div>
          <div className="flex flex-col justify-center">
            <p className="max-w-[142px] montreal text-white opacity-80 font-medium text-sm text-ellipsis tracking-wide overflow-hidden text-nowrap">
              {data?.title}
            </p>
            <p className="montreal text-white opacity-40 text-sm text-ellipsis tracking-wide">
              {data?.artist.split(",")[0]}
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-[5px] w-full rounded-full bg-white bg-opacity-20 mt-4 overflow-hidden">
        <div
          className={`absolute h-full bg-white transition-all ease-linear`}
          style={{ width: `${widthPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};
