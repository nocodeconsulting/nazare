"use client";
import React, { useEffect, useRef } from 'react';

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        const videoDuration = videoRef.current!.duration;
        const randomTime = Math.random() * videoDuration;
        videoRef.current!.currentTime = randomTime;
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh] font-made-evolve-alt">
      <div className="relative w-full h-[75dvh] overflow-hidden">
        <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://nocodeconsulting.blob.core.windows.net/nazaremusic/bigwave.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 font-made-evolve">N A Z A R É</h1>
            <p className="text-lg md:text-xl max-w-[800px] mb-8 font-normal">Deep and crispy tropical bass 🎧</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col h-[500px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">NAZARÉ Essentials</h2>
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="100%"
              style={{ width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px", background: "transparent", flex: 1 }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/playlist/nazar%C3%A9-essentials/pl.u-4JomKKNCaAxAqN"
            />
          </div>
          <div className="flex flex-col h-[500px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recently Added</h2>
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="100%"
              style={{ width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px", background: "transparent", flex: 1 }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/playlist/recently-added/pl.u-06oxvgaCW8R8kA"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
