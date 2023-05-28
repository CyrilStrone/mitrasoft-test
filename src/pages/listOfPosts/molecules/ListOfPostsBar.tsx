import { ListOfPostsBarItem } from "../atoms/ListOfPostsBarItem";
import "../styles/ListOfPostsBar.css";

export const ListOfPostsBar = () => {

  return (
    <div className="ListOfPostsBar">
      <ListOfPostsBarItem/>
      <ListOfPostsBarItem/>
    </div>
  );
};
