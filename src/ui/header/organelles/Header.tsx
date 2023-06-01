import "../styles/Header.css";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../redux/store";
import { toggleSidebar } from "../../../redux/actions/sideBarOpen/actions";
import { useEffect } from "react";

export const Header = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.sidebarOpen);
  const posts = useSelector((state: RootState) => state.addPosts.posts);
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("userInfo", userInfo)
  }, [userInfo])
  useEffect(() => {
    console.log("posts", posts)
  }, [posts])
  const handleClick = () => {
    dispatch(toggleSidebar(!isOpen));
  };
  return (
    <div className="Header">
      <Button onClick={handleClick} variant="primary">Menu</Button>
    </div>
  );
};
