import { ListOfPostsBarItem } from "../atoms/ListOfPostsBarItem";
import "../styles/ListOfPostsBar.css";

export interface IListOfPostsBar{
  id:number | null
}
export const ListOfPostsBar = (params:IListOfPostsBar) => {

  return (
    <div className="ListOfPostsBar">
      <ListOfPostsBarItem id={0} userId={params.id}/>
      <ListOfPostsBarItem id={1} userId={params.id}/>
    </div>
  );
};
