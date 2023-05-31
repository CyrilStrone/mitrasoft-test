import "../styles/SideBar.css";
import { SideBarUser } from "../molecules/SideBarUser";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Offcanvas } from "react-bootstrap";
import { RootState } from "../../../redux/store";
import { toggleSidebar } from "../../../redux/actions/sideBarOpen/actions";

export const SideBar = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.sidebarOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleSidebar(!isOpen));
  };
  return (
    <Offcanvas show={isOpen} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="SideBar">
        <SideBarUser />
        <NavLink to="/ListOfPosts" onClick={handleClose}>List Of Posts</NavLink>
        <NavLink to="/AboutMe" onClick={handleClose}>About Me</NavLink>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
