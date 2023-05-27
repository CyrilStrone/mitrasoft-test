import './App.css';
import { Route, Routes } from "react-router-dom";
import { ListOfPosts } from './pages/listOfPosts/organelles/ListOfPosts';
import { DetailsPage } from './pages/detailsPage/organelles/DetailsPage';
import { AboutMe } from './pages/aboutMe/organelles/AboutMe';
import { Header } from './ui/header/organelles/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_Actual">
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
