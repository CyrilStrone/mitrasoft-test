import "../styles/ListOfPostsBar.css";
import { ListOfPostsBarItem } from "../atoms/ListOfPostsBarItem";

export interface IListOfPostsBar {
  currentPagination: number
  posts: any
}
export const ListOfPostsBar = (params: IListOfPostsBar) => {
  return (
    <div className="ListOfPostsBar">
      {params.posts && params.posts.map((e: any, id: number) =>
        (id >= params.currentPagination * 10) && (id <= (params.currentPagination * 10 + 10)) &&
        <ListOfPostsBarItem key={id} id={e?.id} userId={e?.userId} body={e?.body} title={e?.title} />
      )}
    </div>
  );
};
