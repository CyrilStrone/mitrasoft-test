import "../styles/Header.css";
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from "../logics/actions";

export const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSidebar(true));
  };
  return (
    <div className="Header">
      <Button onClick={handleClick} variant="link">Menu</Button>
    </div>
  );
};
