"use client";
import { Button } from "@mui/material";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";
import useWindowListener from "@/hooks/useWindowListener";

const PromoteCard = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  useWindowListener("contextmenu", (e: Event) => {
    e.preventDefault();
  });
  return (
    <div className="flex ">
      <VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing} />
      <div className="flex flex-col items-stretch justify-between p-2">
        <h2> Get your vaccine today.</h2>
        <Button variant="outlined" onClick={() => setPlaying((prev) => !prev)}>
          {playing ? "Pause" : "Play"}
        </Button>
      </div>
    </div>
  );
};

export default PromoteCard;
