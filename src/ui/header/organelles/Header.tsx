import "../styles/Header.css";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from "../logics/actions";
import { headerState } from "../logics/reducers";

export const Header = () => {
  const isOpen = useSelector((state: headerState) => state.sidebarOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(isOpen)
    dispatch(toggleSidebar(!isOpen));
  };
  return (
    <div className="Header">
      <Button onClick={handleClick} variant="primary">Menu</Button>
    </div>
  );
};
