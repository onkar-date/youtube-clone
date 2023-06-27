import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { VideoCard } from "../videoCard/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVideos,
  selectFetchVideosStatus,
  selectVideos,
} from "./videosSlice";
import { ACTION_STATUS } from "../../shared/constants/status.constants";
import HomePageVideosPlaceholder from "../../shared/components/HomePageVideosPlaceholder";
export const Videos = () => {
  const dispatch = useDispatch();
  const videos = useSelector(selectVideos);
  const fetchVideosStatus = useSelector(selectFetchVideosStatus);
  const [selectedCategory] = useState("Trending");
  useEffect(() => {
    if (fetchVideosStatus === ACTION_STATUS.IDLE) {
      dispatch(fetchVideos(selectedCategory));
    }

    return () => {};
  }, [dispatch, fetchVideosStatus, selectedCategory]);

  return (
    <>
      <div className="mt-4">
        <Container fluid>
          <Row>
            {videos.length > 0
              ? videos
                  .filter((_) => _.id.videoId)
                  .map((video, idx) => {
                    return (
                      <Col key={idx} lg={3} md={4} sm={6} xs={12}>
                        <VideoCard forHomePage={true} video={video} />
                      </Col>
                    );
                  })
              : Array.from({ length: 20 }).map((placeholder, i) => {
                  return (
                    <Col key={i} lg={3} md={4} sm={6} xs={12}>
                      {videos.length === 0 && <HomePageVideosPlaceholder />}
                    </Col>
                  );
                })}
          </Row>
        </Container>
      </div>
    </>
  );
};
