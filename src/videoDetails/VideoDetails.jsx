import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VideosService } from "../shared/services/videos.service";
import { Col, Container, Row } from "react-bootstrap";
import "./videoDetails.css";
import useAbbrevation from "../shared/hooks/useAbbrevation";
import useTimePassed from "../shared/hooks/useTimePassed";
import ReactPlayer from "react-player";
import { VideoCard } from "../home/videoCard/VideoCard";
import WatchVideoPlaceholder from "../shared/components/WatchVideoPlaceholder";
import RelatedVideosPlaceholder from "../shared/components/RelatedVideosPlaceholder";
import VideoComments from "../videoComments/VideoComments";
const VideoDetails = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [relatedVideoData, setRelatedVideosData] = useState([]);
  const [channelData, setChannelData] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [viewsCount, setViewsCount] = useState(0);
  const [timePassed, setTimePassed] = useState("");
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    if (id) {
      const GetVideoData = async () => {
        setRelatedVideosData([]);
        let data = await VideosService.getVideoDetails(id);
        setVideoData(data.items[0]);
        data = await VideosService.getRelatedVideos(id);
        setRelatedVideosData(data.items);
      };
      GetVideoData();
    }

    return () => {};
  }, [id]);

  useEffect(() => {
    if (videoData) {
      const SetVideoRelatedData = async () => {
        const data = await VideosService.getChannelDetails(
          videoData.snippet.channelId
        );
        setViewsCount(useAbbrevation(videoData.statistics.viewCount));
        setTimePassed(useTimePassed(videoData.snippet.publishedAt));
        setChannelData(data.items[0]);
      };

      SetVideoRelatedData();
    }
  }, [videoData]);

  useEffect(() => {
    if (channelData) {
      const SetChannelRelatedData = () => {
        setSubscriberCount(
          useAbbrevation(channelData.statistics.subscriberCount)
        );
      };
      SetChannelRelatedData();
    }
  }, [channelData]);

  const expandDescriptionSection = () => {
    if (showMore === false) {
      setShowMore(true);
    }
  };

  return (
    <div>
      <Container fluid className="video-details-wrapper">
        <Row>
          {videoData ? (
            <Col lg={9} sm={12}>
              <div className="video-section">
                <ReactPlayer
                  className="react-player"
                  controls
                  playing={false}
                  width={"100%"}
                  height={"600px"}
                  url={`https://www.youtube.com/watch?v=${id}`}
                />
              </div>

              <div className="mt-4">
                <h5>{videoData.snippet.title}</h5>
              </div>

              {/* Video Details */}
              {channelData && (
                <>
                  <div className="d-flex">
                    {/* Channel Logo */}
                    <div className="me-2">
                      <img
                        className="channel-logo"
                        src={channelData.snippet.thumbnails.high.url}
                        alt=""
                      />
                    </div>

                    {/* Channel Name & Subscribers */}
                    <div>
                      <h4 className="mb-0">{channelData.snippet.title}</h4>
                      <span className="text-gray">
                        {subscriberCount} subscribers
                      </span>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div
                    className="description-wrapper"
                    onClick={expandDescriptionSection}
                  >
                    <div
                      className={
                        showMore ? "description active" : "description"
                      }
                    >
                      {/* Views and time passed */}
                      <div>
                        <strong>
                          {viewsCount} views {timePassed}
                        </strong>
                      </div>

                      {/* Other Details */}
                      <div>
                        <span>{videoData.snippet.description}</span>
                      </div>

                      <button className="description-toggle">
                        {!showMore ? (
                          <span onClick={() => setShowMore(true)}>
                            Show More
                          </span>
                        ) : (
                          <span onClick={() => setShowMore(false)}>
                            Show Less
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Comments */}
              <div>
                <VideoComments videoId={id} />
              </div>
            </Col>
          ) : (
            <Col lg={9} sm={12}>
              <WatchVideoPlaceholder />
            </Col>
          )}
          <Col lg={3} sm={12}>
            {relatedVideoData.length
              ? relatedVideoData.map((video) => {
                  return (
                    <VideoCard
                      video={video}
                      forWatchPage={true}
                      key={video.id.videoId}
                    />
                  );
                })
              : Array.from({ length: 15 }).map((_, i) => {
                  return <RelatedVideosPlaceholder key={i} />;
                })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VideoDetails;
