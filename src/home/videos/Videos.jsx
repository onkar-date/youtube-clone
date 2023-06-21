import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "./fetchFromAPI";
import { Col, Container, Row } from "react-bootstrap";
import { VideoCard } from "../videoCard/VideoCard";
export const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((videos) => {
        console.log(videos);
        setVideos(videos.items);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log("destroyed");
    };
  }, [selectedCategory]);

  return (
    <div className="mt-4">
      <Container fluid>
        <Row>
          {videos.map((video, idx) => {
            return (
              <Col key={idx} lg={3} sm={2} xs={1}>
                <VideoCard video={video} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
