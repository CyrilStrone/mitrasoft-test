import "../styles/SideBar.css";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from "../logics/reducers";
import { toggleSidebar } from "../logics/actions";
import { NavLink } from "react-router-dom";
import { SideBarUser } from "../molecules/SideBarUser";

export const SideBar = () => {
  const isOpen = useSelector((state: AppState) => state.sidebarOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleSidebar(!isOpen));
  };
  return (
    <div className={`SideBar ${isOpen ? '' : 'SideBar__close'}`}>
      <SideBarUser />
      <NavLink to="/ListOfPosts" onClick={handleClose}>ListOfPosts</NavLink>
      <NavLink to="/DetailsPage" onClick={handleClose}>DetailsPage</NavLink>
      <NavLink to="/AboutMee" onClick={handleClose}>AboutMee</NavLink>
    </div>
  );
};
