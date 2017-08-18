import React from "react";

const VideoDetail = ({ video }) => {
  //Wow kinda cool, if we try to render a video and there is no vide bc when
  // we first run app we have an empty list, display a div that says Loading
  if (!video) {
    return <div> Loading... </div>;
  }

  const videoId = video.id.videoId;
  //String interpolation
  const url = `http://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}>
          {" "}
        </iframe>{" "}
      </div>{" "}
      <div className="details">
        <div> {video.snippet.title} </div>{" "}
        <div> {video.snippet.description} </div>{" "}
      </div>{" "}
    </div>
  );
};

export default VideoDetail;
