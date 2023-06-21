import React from "react";
import { Card } from "react-bootstrap";
import "./videoCard.css";
import moment from "moment";
export const VideoCard = ({ video }) => {
  const getTimePassed = (vide) => {
    const publishTime = moment(vide.snippet.publishTime);
    const today = moment();

    const yearsPassed = Math.abs(publishTime.diff(today, "year"));
    today.add(yearsPassed, "years");
    const monthsPassed = Math.abs(publishTime.diff(today, "months"));
    today.add(monthsPassed, "months");
    const daysPassed = Math.abs(publishTime.diff(today, "days"));
    if (yearsPassed) {
      return `${yearsPassed} years ago`;
    } else if (monthsPassed) {
      return `${monthsPassed} months ago`;
    } else if (daysPassed) {
      return `${daysPassed} days ago`;
    } else {
      return `just now`;
    }
  };
  return (
    <Card className="mb-3 video-card">
      <Card.Img variant="top" src={video.snippet.thumbnails.medium.url} />
      <Card.Body>
        <Card.Text>
          <span className="video-title">{video.snippet.title}</span>
          <br />
          <span className="channel-title">{video.snippet.channelTitle}</span>
          <br />
          <span className="channel-title">{getTimePassed(video)}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
