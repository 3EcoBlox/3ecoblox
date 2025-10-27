import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

interface VideoPopupProps {
  children: React.ReactNode;
  videoUrl: string;
  title?: string;
}

const VideoPopup = ({ children, videoUrl, title }: VideoPopupProps) => {
  const [open, setOpen] = useState(false);

  // Check if it's a YouTube URL and extract video ID
  const isYouTube = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  // Check if it's a Vimeo URL and extract video ID
  const isVimeo = (url: string) => {
    return url.includes('vimeo.com');
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    }
    return url;
  };

  const getVimeoEmbedUrl = (url: string) => {
    // Extract video ID from various Vimeo URL formats
    // https://vimeo.com/1111840426
    // https://vimeo.com/manage/videos/1111840426
    const vimeoRegex = /vimeo\.com\/(?:manage\/videos\/)?(\d+)/;
    const match = url.match(vimeoRegex);
    if (match && match[1]) {
      return `https://player.vimeo.com/video/${match[1]}?autoplay=1`;
    }
    return url;
  };

  const isYouTubeVideo = isYouTube(videoUrl);
  const isVimeoVideo = isVimeo(videoUrl);

  let embedUrl = videoUrl;
  if (isYouTubeVideo) {
    embedUrl = getYouTubeEmbedUrl(videoUrl);
  } else if (isVimeoVideo) {
    embedUrl = getVimeoEmbedUrl(videoUrl);
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden bg-black border-0">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
          aria-label="Close video"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          {/* 16:9 Aspect Ratio */}
          {open && (
            (isYouTubeVideo || isVimeoVideo) ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={embedUrl}
                title={title || "Video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                className="absolute top-0 left-0 w-full h-full"
                controls
                autoPlay
                src={embedUrl}
                title={title || "Video"}
              >
                Your browser does not support the video tag.
              </video>
            )
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default VideoPopup;
