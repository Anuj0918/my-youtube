import React,{useEffect, useState} from "react";
import { YOUTUBE_VIDEO_API } from "./contants/api_data";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
   const[videos , setVideos] = useState([]);
    useEffect(() => {
      getYoutubeVideo();
    }, []);

    const getYoutubeVideo = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        
        setVideos(json.items);
        
      };
    return  ( 
      <div className="flex flex-wrap ">
      {videos.map((video) => (
        <Link to={"watch?v=" + video.id} key={video.id} >
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
    );
};
export default VideoContainer;