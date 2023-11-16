"use client";
import { useEffect, useRef } from "react";

const VideoPlayer = ({
  vdoSrc,
  isPlaying,
}: {
  vdoSrc: string;
  isPlaying: boolean;
}) => {
  const vdoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    isPlaying ? vdoRef.current?.play() : vdoRef.current?.pause();
  });
  return (
    <video ref={vdoRef} src={vdoSrc} className="w-1/2" controls loop muted />
  );
};

export default VideoPlayer;
