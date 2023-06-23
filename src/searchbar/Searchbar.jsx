import { Form, InputGroup } from "react-bootstrap";
import "./searchbar.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`home/search?q=${searchTerm}`);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          aria-label="search"
          placeholder="search"
          className="search"
          value={searchTerm}
          onChange={updateSearchTerm}
        />
        <InputGroup.Text className="search-section">
          <BsSearch role="button" type="submit" onClick={handleSubmit} />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export default Searchbar;
