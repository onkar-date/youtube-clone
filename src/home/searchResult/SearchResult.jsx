import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { VideosService } from "../../shared/services/videos.service";
import { VideoCard } from "../videoCard/VideoCard";
import { GiSettingsKnobs } from "react-icons/gi";
import "./searchResult.css";
import { FILTER_OPTIONS } from "../../shared/constants/filterOptions.constants";
const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  const [showFilterSection, setShowFilterSection] = useState(false);
  const filterOptions = FILTER_OPTIONS;
  useEffect(() => {
    if (searchParams.get("q")) {
      const fetchSearchResults = async () => {
        const data = await VideosService.fetchByCategory(searchParams.get("q"));
        setSearchResult(data.items);
      };
      fetchSearchResults();
    }
    return () => {};
  }, [searchParams]);
  return (
    <>
      <Container className="px-5">
        <Row className="mb-4">
          <Col>
            {/* Filters */}
            <div className="filter-wrapper">
              <button
                className="filter-toggle"
                onClick={() => setShowFilterSection(!showFilterSection)}
              >
                <GiSettingsKnobs className="filter-icon" />
                <strong className="ms-2">Filters</strong>
              </button>

              {/* Filter Options */}
              {showFilterSection && (
                <div className="filter-options">
                  {filterOptions.map((section) => {
                    return (
                      <div className="" key={section.id}>
                        <p className="section-name">{section.name}</p>
                        <div>
                          {section.options.map((option) => {
                            return (
                              <span
                                className="d-block mb-1 text-gray-1"
                                key={option}
                              >
                                {option}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {searchResult.map((video) => {
              return (
                <VideoCard
                  key={video.id.videoId}
                  video={video}
                  forSearchPage={true}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchResult;
