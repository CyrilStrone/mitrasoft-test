import "../styles/Header.css";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../redux/store";
import { setSideBarOpen } from "../../../redux/actions/sideBarOpen/actions";

export const Header = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.sidebarOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSideBarOpen(!isOpen));
  };
  return (
    <div className="Header">
      <Button onClick={handleClick} variant="primary">Menu</Button>
    </div>
  );
};
