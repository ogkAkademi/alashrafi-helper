
import React from "react";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface VideoProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    views: string;
    date: string;
    duration: string;
    category: string;
  };
}

const VideoCard = ({ video }: VideoProps) => {
  return (
    <Link 
      to={`/videos/${video.id}`}
      className="video-card block rounded-xl overflow-hidden bg-card border shadow-sm hover:shadow-md"
    >
      <div className="relative aspect-video">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="bg-black/50 rounded-full p-3 backdrop-blur-sm">
            <Play className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
          {video.duration}
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <Badge variant="secondary" className="mb-2">{video.category}</Badge>
          <h3 className="font-bold text-lg line-clamp-2">{video.title}</h3>
        </div>
        
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{video.views} مشاهدة</span>
          <span>{video.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
