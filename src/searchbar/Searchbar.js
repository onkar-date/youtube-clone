import { Form, InputGroup } from "react-bootstrap";
import "./searchbar.css";
import { BsSearch } from 'react-icons/bs';
export default function SearchBar() {
  return (
    <InputGroup>
        <Form.Control aria-label="Amount (to the nearest dollar)" placeholder="search" className="search" />
        <InputGroup.Text className="search-section">
            <BsSearch role="button" />
        </InputGroup.Text>
    </InputGroup>

  );
}
