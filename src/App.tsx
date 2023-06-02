import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { DetailsPage } from './pages/detailsPage/organelles/DetailsPage';
import { AboutMe } from './pages/aboutMe/organelles/AboutMe';
import { Header } from './ui/header/organelles/Header';
import { useDispatch } from 'react-redux';
import { SideBar } from './ui/header/organelles/SideBar';
import { useEffect } from 'react';
import { removeSearchText } from './redux/actions/searchText/action';
import { removeSideBarOpen } from './redux/actions/sideBarOpen/actions';
import { removePagination } from './redux/actions/pagination/action';
import { removeAddDefaultPosts, removeAddPosts } from './redux/actions/addPosts/action';
import { ListOfPosts } from './pages/listOfPosts/organelles/ListOfPosts';
import { removeSortCheck } from './redux/actions/sortCheck/actions';
import { removeUserInfo } from './redux/actions/userInfo/actions';
import { openPosts } from './redux/actions/postsCheck/actions';
import { removeUserInfoCheck, setUserInfoCheck } from './redux/actions/userInfoCheck/actions';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("change location:",location)
    dispatch(removeUserInfo())
    dispatch(removeUserInfoCheck())
    dispatch(removePagination());
    dispatch(removeSearchText())
    dispatch(removeSortCheck());
    dispatch(removeSideBarOpen())
    dispatch(removeAddPosts())
    dispatch(removeAddDefaultPosts());
    dispatch(openPosts())
  }, [location])
  return (
    <div className="App">
      <Header />
      <SideBar />
      <div className="App_Actual">
        <Routes>
          <Route path="*" element={<ListOfPosts />} />
          <Route path="/ListOfPosts" element={<ListOfPosts />} />
          <Route path="/DetailsPage/:id" element={<DetailsPage />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
