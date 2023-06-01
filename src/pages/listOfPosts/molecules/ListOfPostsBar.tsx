import "../styles/ListOfPostsBar.css";
import { ListOfPostsBarItem } from "../atoms/ListOfPostsBarItem";

export interface IListOfPostsBar {
  currentPage: number
  posts: any
}
export const ListOfPostsBar = (params: IListOfPostsBar) => {
  return (
    <div className="ListOfPostsBar">
      {params.posts && params.posts.length > 0 && params.posts.map((e: any, id: number) =>
        (id > params.currentPage * 10) && (id < (params.currentPage * 10 + 10)) &&
        <ListOfPostsBarItem key={id} id={e?.id} userId={e?.userId} body={e?.body} title={e?.title} />
      )}
    </div>
  );
};
