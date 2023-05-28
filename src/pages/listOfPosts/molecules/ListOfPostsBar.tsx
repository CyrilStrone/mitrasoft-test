import { ListOfPostsBarItem } from "../atoms/ListOfPostsBarItem";
import "../styles/ListOfPostsBar.css";

export interface IListOfPostsBar{
  id:number | null
}
export const ListOfPostsBar = (params:IListOfPostsBar) => {

  return (
    <div className="ListOfPostsBar">
      <ListOfPostsBarItem id={0}/>
      <ListOfPostsBarItem id={1}/>
    </div>
  );
};
