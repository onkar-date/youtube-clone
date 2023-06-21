import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "./fetchFromAPI";
import { Col, Container, Row } from "react-bootstrap";
import { VideoCard } from "../videoCard/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVideos,
  selectFetchVideosError,
  selectFetchVideosStatus,
  selectVideos,
} from "./videosSlice";
import { ACTION_STATUS } from "../../shared/constants/status.constants";
export const Videos = () => {
  const dispatch = useDispatch();
  const videos = useSelector(selectVideos);
  const fetchVideosStatus = useSelector(selectFetchVideosStatus);
  const fetchVideosError = useSelector(selectFetchVideosError);
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  useEffect(() => {
    if (fetchVideosStatus === ACTION_STATUS.IDLE) {
      dispatch(fetchVideos(selectedCategory));
    }

    return () => {
      console.log("destroyed");
    };
  }, [dispatch, fetchVideosStatus, selectedCategory]);

  return (
    <div className="mt-4">
      <Container fluid>
        <Row>
          {videos.map((video, idx) => {
            return (
              <Col key={idx} lg={3} md={4} sm={6} xs={12}>
                <VideoCard video={video} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
