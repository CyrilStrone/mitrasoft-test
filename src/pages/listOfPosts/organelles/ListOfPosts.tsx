import { ListOfPostsPagination } from "../molecules/ListOfPostsPagination";
import { ListOfPostsSearch } from "../molecules/ListOfPostsSearch";
import "../styles/ListOfPosts.css";

export const ListOfPosts = () => {

  return (
    <div className="ListOfPosts">
      <ListOfPostsSearch />
      <ListOfPostsPagination />
    </div>
  );
};
