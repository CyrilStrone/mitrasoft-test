import "../styles/ListOfPosts.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ListOfPostsBar } from "../molecules/ListOfPostsBar";
import { ListOfPostsPagination } from "../molecules/ListOfPostsPagination";
import { ListOfPostsSearch } from "../molecules/ListOfPostsSearch";
import { inGetPosts } from "../logics/getPosts";
import { RootState } from "../../../redux/store";
import { increasePage, setPage } from "../../../redux/actions/pagination/action";
import { addPosts } from "../../../redux/actions/addPosts/action";


export interface IListOfPosts {
  id: string | null
}
export const ListOfPosts = (params: IListOfPosts) => {
  const currentPage = useSelector((state: RootState) => state.pagination.currentPage);
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
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleSetPage = (page: number) => {
    dispatch(setPage(page));
  };


  useEffect(() => {
    handleScrollToTop()
  }, [currentPage])
  useEffect(() => {
    handleSetPage(0)
    requestGetInPost()
    return (() => {
      dispatch(addPosts([]))
      dispatch(increasePage());
    })
  }, [])
  return (
    <div className="ListOfPosts">
      <ListOfPostsSearch />
      <ListOfPostsBar currentPage={currentPage} posts={posts} />
      <ListOfPostsPagination handleSetPage={handleSetPage} currentPage={currentPage} posts={posts} />
    </div>
  );
};
