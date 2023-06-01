import { useDispatch, useSelector } from "react-redux";
import { ListOfPostsBar } from "../molecules/ListOfPostsBar";
import { ListOfPostsPagination } from "../molecules/ListOfPostsPagination";
import { ListOfPostsSearch } from "../molecules/ListOfPostsSearch";
import "../styles/ListOfPosts.css";
import { RootState } from "../../../redux/store";
import { increasePage, setPage } from "../../../redux/actions/pagination/action";
import { useEffect } from "react";
import { addPosts } from "../../../redux/actions/addPosts/action";
import { inGetPostsId } from "../logics/getPosts";

export interface IListOfPostsId {
  id: string | null
}
export const ListOfPostsId = (params: IListOfPostsId) => {
  const currentPage = useSelector((state: RootState) => state.pagination.currentPage);
  const posts = useSelector((state: RootState) => state.addPosts.posts);
  const dispatch = useDispatch();

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
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleSetPage = (page: number) => {
    dispatch(setPage(page));
  };

  useEffect(() => {
    if (params.id) {
      requestGetInPostId(params.id)
    }
  }, [params.id])
  useEffect(() => {
    handleScrollToTop()
  }, [currentPage])
  useEffect(() => {
    handleSetPage(0)
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
