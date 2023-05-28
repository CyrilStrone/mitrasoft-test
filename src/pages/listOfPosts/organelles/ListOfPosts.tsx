import { Provider } from "react-redux";
import { ListOfPostsBar } from "../molecules/ListOfPostsBar";
import { ListOfPostsPagination } from "../molecules/ListOfPostsPagination";
import { ListOfPostsSearch } from "../molecules/ListOfPostsSearch";
import "../styles/ListOfPosts.css";
import commentsStore from "../logics/store";

export const ListOfPosts = () => {

  return (
    <Provider store={commentsStore}>
      <div className="ListOfPosts">
        <ListOfPostsSearch />
        <ListOfPostsBar />
        <ListOfPostsPagination />
      </div>
    </Provider>
  );
};
