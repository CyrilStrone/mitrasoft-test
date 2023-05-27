import Dropdown from 'react-bootstrap/Dropdown';
import "../styles/Header.css";

export const Header = () => {

  return (
    <div className="Header">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Menu
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/ListOfPosts">ListOfPosts</Dropdown.Item>
          <Dropdown.Item href="/DetailsPage">DetailsPage</Dropdown.Item>
          <Dropdown.Item href="/AboutMe">AboutMe</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
