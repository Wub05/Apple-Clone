import React from "react";
import { useState, useEffect } from "react";

const Youtube = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet,id&order=date&maxResults=9&channelId=UCE_M8A5yxnLfW0KghEeajjw&key=AIzaSyAhC9GSyBIz9LGf1x_T5yMtVz2Jib6qmPM`
    )
      .then((res) => res.json())
      .then((data) => {
        const fetchedVideos = data.items;
        setVideos(fetchedVideos);
      });
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {videos.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId; //Each video Id
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`; //each video link
            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-4 my-10 px-10">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
};

export default Youtube;
