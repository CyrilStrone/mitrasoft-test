import { useEffect } from "react";
import { ListOfPostsBarItem } from "../atoms/ListOfPostsBarItem";
import "../styles/ListOfPostsBar.css";
import { inGetPosts, inGetPostsId } from "../logics/getPosts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { addPosts } from "../../../redux/actions/addPosts/action";

export interface IListOfPostsBar {
  id: string | null
  currentPage: number
  posts:any
}
export const ListOfPostsBar = (params: IListOfPostsBar) => {
 
  const dispatch = useDispatch();
  const requestGetInPost = async () => {
    try {
      const RESULT = await inGetPosts();
      if (RESULT) {
        dispatch(addPosts(RESULT))
      }
    } catch (error) {
      console.log(error)
    }
  }
  const requestGetInPostId = async (id: string) => {
    try {
      const RESULT = await inGetPostsId(id);
      if (RESULT) {
        dispatch(addPosts(RESULT))
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (params.id) {
      requestGetInPostId(params.id)
    } else {
      requestGetInPost()
    }
  }, [params.id])
  return (
    <div className="ListOfPostsBar">
      {params.posts && params.posts.length > 0 && params.posts.map((e: any, id: number) =>
        id > params.currentPage && id < params.currentPage + 10 &&
        <ListOfPostsBarItem key={id} id={e?.id} userId={e?.userId} body={e?.body} title={e?.title} />
      )}
    </div>
  );
};
