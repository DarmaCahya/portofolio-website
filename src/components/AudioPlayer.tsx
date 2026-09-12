"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: any;
  }
}

const YOUTUBE_VIDEO_ID = "9kzE8isXlQY";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Load YouTube IFrame API script dynamically if not already loaded
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }

    const initPlayer = () => {
      if (window.YT && window.YT.Player && !playerRef.current) {
        playerRef.current = new window.YT.Player("youtube-player-container", {
          height: "1",
          width: "1",
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 0,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID,
            controls: 0,
            disablekb: 1,
            fs: 0,
            rel: 0,
            playsinline: 1,
          },
          events: {
            onReady: () => {
              setPlayerReady(true);
            },
            onStateChange: (event: any) => {
              // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2 || event.data === 0) {
                setIsPlaying(false);
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    }

    return () => {
      // Clean up player on unmount
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current || !playerReady) {
      // Fallback if player not initialized yet
      return;
    }

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!playerRef.current || !playerReady) return;

    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  return (
    <>
      {/* Hidden Container for YouTube Player API Instance */}
      <div className="fixed top-0 left-0 w-[1px] h-[1px] overflow-hidden pointer-events-none opacity-0 z-[-1]">
        <div id="youtube-player-container" />
      </div>

      {/* Floating Audio Control Handle Button */}
      <div className="fixed bottom-6 left-6 z-50 select-none">
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#111319]/95 border border-[#232938] backdrop-blur-md shadow-2xl hover:border-[#38bdf8]/60 transition-all duration-300 group">
          
          {/* Animated Sound Equalizer / Music Icon */}
          <div className="flex items-center justify-center shrink-0 w-5 h-5">
            {isPlaying && !isMuted ? (
              <div className="flex items-end gap-0.5 h-4">
                <span className="w-1 bg-[#38bdf8] rounded-full animate-[bounce_0.6s_infinite_100ms] h-full" />
                <span className="w-1 bg-[#38bdf8] rounded-full animate-[bounce_0.6s_infinite_300ms] h-2/3" />
                <span className="w-1 bg-[#38bdf8] rounded-full animate-[bounce_0.6s_infinite_200ms] h-5/6" />
              </div>
            ) : (
              <Music className="w-4 h-4 text-[#6b7280] group-hover:text-[#38bdf8] transition-colors" />
            )}
          </div>

          {/* Track Info */}
          <div className="flex flex-col pr-1 cursor-pointer" onClick={togglePlay}>
            <span className="text-[11px] font-mono font-semibold text-[#f3f4f6] leading-tight">
              {isPlaying ? "Memutar Musik Latar" : "Musik Latar"}
            </span>
            <span className="text-[9px] font-mono text-[#6b7280] leading-tight">
              {playerReady ? (isPlaying ? "Stream YouTube Aktif" : "Klik untuk memutar") : "Memuat Pemutar..."}
            </span>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-5 bg-[#232938]" />

          {/* Controls */}
          <div className="flex items-center gap-1.5">
            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={togglePlay}
              className={`p-2 rounded-full transition-all ${
                isPlaying
                  ? "bg-[#38bdf8] text-[#090a0d] shadow-md shadow-cyan-500/20"
                  : "bg-[#161922] hover:bg-[#232938] text-[#f3f4f6] hover:text-[#38bdf8]"
              }`}
              title={isPlaying ? "Jeda Musik" : "Putar Musik"}
              aria-label={isPlaying ? "Jeda Musik" : "Putar Musik"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 pl-0.5" />}
            </button>

            {/* Mute/Unmute Button */}
            <button
              type="button"
              onClick={toggleMute}
              className="p-2 rounded-full bg-[#161922] hover:bg-[#232938] text-[#9ca3af] hover:text-[#f3f4f6] transition-colors"
              title={isMuted ? "Aktifkan Suara" : "Bisukan Suara"}
              aria-label={isMuted ? "Aktifkan Suara" : "Bisukan Suara"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
