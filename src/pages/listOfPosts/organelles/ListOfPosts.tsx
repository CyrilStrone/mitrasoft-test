import { useDispatch, useSelector } from "react-redux";
import { ListOfPostsBar } from "../molecules/ListOfPostsBar";
import { ListOfPostsPagination } from "../molecules/ListOfPostsPagination";
import { ListOfPostsSearch } from "../molecules/ListOfPostsSearch";
import "../styles/ListOfPosts.css";
import { RootState } from "../../../redux/store";
import { increasePage, setPage } from "../../../redux/actions/pagination/action";
import { useEffect } from "react";

export interface IListOfPosts {
  id: string | null
}
export const ListOfPosts = (params: IListOfPosts) => {
  const currentPage = useSelector((state: RootState) => state.pagination.currentPage);
  const posts = useSelector((state: RootState) => state.addPosts.posts);
  const dispatch = useDispatch();
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleSetPage = (page: number) => {
    dispatch(setPage(page));
  };
  const handleIncreasePage = () => {
    dispatch(increasePage());
  };
  useEffect(() => {
    handleScrollToTop()
  }, [currentPage])
  useEffect(() => {
    handleSetPage(1)
  }, [])

  return (
    <div className="ListOfPosts">
      <ListOfPostsSearch />
      <ListOfPostsBar id={params.id} currentPage={currentPage} posts={posts}/>
      <ListOfPostsPagination handleSetPage={handleSetPage} currentPage={currentPage} posts={posts}/>
    </div>
  );
};
