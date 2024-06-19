// app/page.tsx
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] font-sans">
      <div className="relative w-full h-[75dvh] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/bigwave.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-sans">NAZARÉ</h1>
            <p className="text-lg md:text-xl max-w-[800px] mb-8 font-sans">Deep and crispy tropical bass</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">Essentials Playlist</h2>
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="450"
              style={{ width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px", background: "transparent" }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/playlist/nazar%C3%A9-essentials/pl.u-4JomKKNCaAxAqN"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">Artist</h2>
            <iframe
              allow="autoplay *; encrypted-media *;"
              frameBorder="0"
              height="450"
              style={{ width: "100%", maxWidth: "660px", overflow: "hidden", background: "transparent" }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/artist/nazar%C3%A9/281750854"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
