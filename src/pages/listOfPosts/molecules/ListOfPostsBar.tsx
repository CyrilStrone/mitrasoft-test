import { useEffect } from "react";
import { ListOfPostsBarItem } from "../atoms/ListOfPostsBarItem";
import "../styles/ListOfPostsBar.css";
import { inGetPosts, inGetPostsId } from "../logics/getPosts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { addPosts } from "../../../redux/actions/addPosts/action";

export interface IListOfPostsBar {
  id: string | null
}
export const ListOfPostsBar = (params: IListOfPostsBar) => {
  const posts = useSelector((state: RootState) => state.addPosts.posts);
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
  useEffect(()=>{
    console.log(posts)
  },[posts])
  return (
    <div className="ListOfPostsBar">
      {posts && posts.length > 0 && posts.map((e: any) =>
        <ListOfPostsBarItem id={e?.id} userId={e?.userId} body={e?.body} title={e?.title} />
      )}
    </div>
  );
};
