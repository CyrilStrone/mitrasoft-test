import "../styles/SideBar.css";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from "../logics/reducers";
import { toggleSidebar } from "../logics/actions";
import { NavLink } from "react-router-dom";
import { SideBarUser } from "../molecules/SideBarUser";
import { Offcanvas } from "react-bootstrap";

export const SideBar = () => {
  const isOpen = useSelector((state: AppState) => state.sidebarOpen);
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
        <NavLink to="/AboutMee" onClick={handleClose}>AboutMee</NavLink>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
