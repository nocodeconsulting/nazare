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
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center">
            <div className="relative">
              <span className="absolute -top-12 -left-12 rounded-full bg-primary-foreground/20 blur-3xl" />
              <span className="absolute -bottom-12 -right-12 rounded-full bg-primary-foreground/20 blur-3xl" />
              <div className="flex transform-gpu items-center justify-center space-x-4 rounded-lg bg-background/20 p-8 backdrop-blur-lg">
                <span className="text-9xl font-black uppercase leading-none tracking-tighter text-primary-foreground drop-shadow-lg">
                  N
                </span>
                <span className="text-9xl font-black uppercase leading-none tracking-tighter text-primary-foreground drop-shadow-lg">
                  A
                </span>
                <span className="text-9xl font-black uppercase leading-none tracking-tighter text-primary-foreground drop-shadow-lg">
                  Z
                </span>
                <span className="text-9xl font-black uppercase leading-none tracking-tighter text-primary-foreground drop-shadow-lg">
                  A
                </span>
                <span className="text-9xl font-black uppercase leading-none tracking-tighter text-primary-foreground drop-shadow-lg">
                  R
                </span>
                <span className="text-9xl font-black uppercase leading-none tracking-tighter text-primary-foreground drop-shadow-lg">
                  É
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
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
