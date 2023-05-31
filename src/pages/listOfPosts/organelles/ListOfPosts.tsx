import { ListOfPostsBar } from "../molecules/ListOfPostsBar";
import { ListOfPostsPagination } from "../molecules/ListOfPostsPagination";
import { ListOfPostsSearch } from "../molecules/ListOfPostsSearch";
import "../styles/ListOfPosts.css";

export interface IListOfPosts {
  id: number | null
}
export const ListOfPosts = (params: IListOfPosts) => {

  return (
    <div className="ListOfPosts">
      <ListOfPostsSearch />
      <ListOfPostsBar id={params.id} />
      <ListOfPostsPagination />
    </div>
  );
};
