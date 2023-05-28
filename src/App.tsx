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
        <Provider store={headerStore}>
          <Header />
          <SideBar />
        </Provider>
      <div className="App_Actual">
        <Routes>
          <Route path="*" element={<ListOfPosts id={null}/>} />
          <Route path="/ListOfPosts" element={<ListOfPosts id={null} />} />
          <Route path="/DetailsPage" element={<DetailsPage />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
