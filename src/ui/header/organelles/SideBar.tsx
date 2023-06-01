import "../styles/SideBar.css";
import { SideBarUser } from "../molecules/SideBarUser";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Offcanvas } from "react-bootstrap";
import { RootState } from "../../../redux/store";
import { toggleSidebar } from "../../../redux/actions/sideBarOpen/actions";
import { setPage } from "../../../redux/actions/pagination/action";
import { addDefaultPost } from "../../../redux/actions/addDefaultPost/action";
import { addPosts } from "../../../redux/actions/addPosts/action";

export const SideBar = () => {
  const navigate = useNavigate();
  const isOpen = useSelector((state: RootState) => state.sidebar.sidebarOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleSidebar(!isOpen));
  };
  const handleClick = async (link: string) => {
    const RESULT1 = await dispatch(setPage(0));
    if (RESULT1) {
      const RESULT2 = await dispatch(addDefaultPost([]));
      if (RESULT2) {
        const RESULT3 = await dispatch(addPosts([]));
        if (RESULT3) {
          handleClose()
          navigate(link)
        }
      }
    }
  }
  return (
    <Offcanvas show={isOpen} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="SideBar">
        <SideBarUser />
        <Button onClick={() => { handleClick('/ListOfPosts') }}>List Of Posts</Button>
        <Button onClick={() => { handleClick('/AboutMe') }}>About Me</Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
