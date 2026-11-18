"use client";
import React, { useRef } from "react";
import { SpeakerWaveIcon } from "@heroicons/react/24/outline";

const SortVideo = ({ src, poster, title, caption, width = 960, height = 576 }) => {
  const ref = useRef(null);

  const pauseOthers = () => {
    document.querySelectorAll("video").forEach((v) => {
      if (v !== ref.current) v.pause();
    });
  };

  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-xl">
        <video
          ref={ref}
          className="block h-auto w-full"
          width={width}
          height={height}
          controls
          playsInline
          preload="metadata"
          poster={poster}
          onPlay={pauseOthers}
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>
      {caption && (
        <figcaption className="mt-3 flex items-center justify-center gap-2 text-center text-sm text-[#778da9]">
          <SpeakerWaveIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};

export default SortVideo;
