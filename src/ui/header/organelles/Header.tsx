import "../styles/Header.css";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from "../logics/actions";
import { AppState } from "../logics/reducers";

export const Header = () => {
  const isOpen = useSelector((state: AppState) => state.sidebarOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSidebar(!isOpen));
  };
  return (
    <div className="Header">
      <Button onClick={handleClick} variant="link">Menu</Button>
    </div>
  );
};
