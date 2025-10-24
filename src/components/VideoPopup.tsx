import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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

  const getYouTubeEmbedUrl = (url: string) => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    }
    return url;
  };

  const isYouTubeVideo = isYouTube(videoUrl);
  const embedUrl = isYouTubeVideo ? getYouTubeEmbedUrl(videoUrl) : videoUrl;

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden bg-black">
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          {/* 16:9 Aspect Ratio */}
          {open && (
            isYouTubeVideo ? (
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
