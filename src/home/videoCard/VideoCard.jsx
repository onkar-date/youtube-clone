import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./videoCard.css";
import { useNavigate } from "react-router-dom";
import useTimePassed from "../../shared/hooks/useTimePassed";
export const VideoCard = ({
  video,
  forHomePage,
  forWatchPage,
  forSearchPage,
}) => {
  const navigate = useNavigate();
  const timePassed = useTimePassed(video.snippet.publishedAt);
  const watchVideo = () => {
    navigate(`/watch/${video.id.videoId}`);
  };
  if (forHomePage) {
    return (
      <Card className="mb-3 video-card" onClick={watchVideo}>
        <Card.Img variant="top" src={video.snippet.thumbnails.medium.url} />
        <Card.Body>
          <Card.Text>
            <span className="video-title">{video.snippet.title}</span>
            <br />
            <span className="channel-title">{video.snippet.channelTitle}</span>
            <br />
            <span className="channel-title">{timePassed}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  } else if (forWatchPage) {
    return (
      <Container>
        <Row onClick={watchVideo}>
          <Col lg={6}>
            <img
              alt={video.snippet.title}
              className="video-card watch-page"
              src={video.snippet.thumbnails.medium.url}
            />
          </Col>
          <Col lg={6} className="ps-0">
            <span className="d-block video-title text-truncate">
              {video.snippet.title}
            </span>
            <span className="d-block channel-title text-truncate">
              {video.snippet.channelTitle}
            </span>
            <span className="d-block channel-title text-truncate">
              {timePassed}
            </span>
          </Col>
        </Row>
      </Container>
    );
  } else if (forSearchPage) {
    return (
      <div className="search-page-item">
        <div className="video-thumb-section" onClick={watchVideo}>
          <img
            alt={video.snippet.title}
            className="video-card img-fluid"
            src={video.snippet.thumbnails.medium.url}
          />
        </div>
        <div className="video-detail-section">
          <span className="d-block video-title text-truncate">
            {video.snippet.title}
          </span>
          <span className="d-block channel-title text-truncate">
            {video.snippet.channelTitle}
          </span>
          <span className="d-block channel-title text-truncate">
            {timePassed}
          </span>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
