import React, { useEffect, useState } from "react";
import CommentsPlaceholder from "../shared/components/CommentsPlaceholder";
import { VideosService } from "../shared/services/videos.service";
import { BiLike, BiDislike } from "react-icons/bi";
const VideoComments = ({ videoId }) => {
  const defaultProfileImage = `${process.env.PUBLIC_URL}/default_profile_image.png`;
  const [commentsData, setCommentsData] = useState(null);
  async function fetchComments(videoId) {
    return VideosService.getVideoCommentThreads(videoId);
  }
  useEffect(() => {
    fetchComments(videoId).then((data) => {
      setCommentsData(data);
    });
    return () => {
      setCommentsData(null);
    };
  }, [videoId]);

  const getCommentCount = () => {
    return commentsData ? commentsData.pageInfo.totalResults : "";
  };

  const setDefaultProfileImage = (event) => {
    console.log(event);
    event.target.src = defaultProfileImage;
  };

  const getVideoCommentsSection = () => {
    const comments = commentsData.items;
    return comments.map((comment) => {
      const commentInfo = comment.snippet.topLevelComment.snippet;
      return (
        <div key={comment.id} className="d-flex mb-4">
          {/* Author Profile Image */}
          <div>
            <img
              src={commentInfo.authorProfileImageUrl}
              style={{
                height: "48px",
                width: "48px",
                borderRadius: "50%",
              }}
              onError={setDefaultProfileImage}
              alt="user_profile_img"
            />
          </div>

          {/* Comment Details */}
          <div className="ms-3">
            <div>
              <p className="mb-0" style={{ fontWeight: 700 }}>
                {commentInfo.authorDisplayName}
              </p>
              <span>{commentInfo.textOriginal}</span>
              <div className="d-flex" style={{ color: "#5f5f5f" }}>
                <div className="d-flex align-items-center me-3">
                  <BiLike size={20} />
                  <span className="ms-3">{commentInfo.likeCount}</span>
                </div>

                <div className="d-flex align-items-center me-3">
                  <BiDislike size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="my-5 ms-2">
        <h5>{getCommentCount()} Comments</h5>
      </div>
      {commentsData
        ? getVideoCommentsSection()
        : Array.from({ length: 15 }).map((_, i) => {
            return <CommentsPlaceholder key={i} />;
          })}
    </>
  );
};

export default VideoComments;
