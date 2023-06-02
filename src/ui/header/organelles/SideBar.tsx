import "../styles/SideBar.css";
import { SideBarUser } from "../molecules/SideBarUser";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Offcanvas } from "react-bootstrap";
import { RootState } from "../../../redux/store";
import { setSideBarOpen } from "../../../redux/actions/sideBarOpen/actions";
import { navigateRemove } from "../../functions/navigateRemove";

export const SideBar = () => {
  const navigate = useNavigate()
  const isOpen = useSelector((state: RootState) => state.sidebar.sidebarOpen);
  const dispatch = useDispatch();
  return (
    <Offcanvas show={isOpen} onHide={() => { setSideBarOpen(!isOpen) }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="SideBar">
        <SideBarUser />
        <Button onClick={() => { navigateRemove("/ListOfPosts", dispatch, navigate) }}>List Of Posts</Button>
        <Button onClick={() => { navigateRemove("/AboutMe", dispatch, navigate) }}>About Me</Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
