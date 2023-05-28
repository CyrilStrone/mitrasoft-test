import { Provider } from "react-redux";
import { ListOfPostsBar } from "../molecules/ListOfPostsBar";
import { ListOfPostsPagination } from "../molecules/ListOfPostsPagination";
import { ListOfPostsSearch } from "../molecules/ListOfPostsSearch";
import "../styles/ListOfPosts.css";
import commentsStore from "../logics/store";

export interface IListOfPosts{
  id:number | null
}
export const ListOfPosts = (params:IListOfPosts) => {

  return (
    <Provider store={commentsStore}>
      <div className="ListOfPosts">
        <ListOfPostsSearch />
        <ListOfPostsBar id={params.id}/>
        <ListOfPostsPagination />
      </div>
    </Provider>
  );
};
