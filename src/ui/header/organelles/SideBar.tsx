import "../styles/SideBar.css";
import { toggleSidebar } from "../logics/actions";
import { SideBarUser } from "../molecules/SideBarUser";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Offcanvas } from "react-bootstrap";
import { headerState } from "../logics/reducers";

export const SideBar = () => {
  const isOpen = useSelector((state: headerState) => state.sidebarOpen);
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
        <NavLink to="/ListOfPosts" onClick={handleClose}>ListOfPosts</NavLink>
        <NavLink to="/DetailsPage" onClick={handleClose}>DetailsPage</NavLink>
        <NavLink to="/AboutMe" onClick={handleClose}>AboutMee</NavLink>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
