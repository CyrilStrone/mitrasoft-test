import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import { ListOfPosts } from './pages/listOfPosts/organelles/ListOfPosts';
import { DetailsPage } from './pages/detailsPage/organelles/DetailsPage';
import { AboutMe } from './pages/aboutMe/organelles/AboutMe';
import { Header } from './ui/header/organelles/Header';
import { Provider } from 'react-redux';
import { SideBar } from './ui/header/organelles/SideBar';
import headerStore from './ui/header/logics/store';

function App() {
  return (

    <div className="App">
      <div className="App_Actual">
        <Provider store={headerStore}>
          <Header />
          <SideBar />
        </Provider>
        <Routes>
          <Route path="*" element={<ListOfPosts />} />
          <Route path="/ListOfPosts" element={<ListOfPosts />} />
          <Route path="/DetailsPage" element={<DetailsPage />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
