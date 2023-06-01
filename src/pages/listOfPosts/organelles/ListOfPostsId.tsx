import "../styles/ListOfPosts.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ListOfPostsBar } from "../molecules/ListOfPostsBar";
import { ListOfPostsPagination } from "../molecules/ListOfPostsPagination";
import { ListOfPostsSearch } from "../molecules/ListOfPostsSearch";
import { inGetPostsId } from "../logics/getPosts";
import { RootState } from "../../../redux/store";
import { increasePage, setPage } from "../../../redux/actions/pagination/action";
import { addPosts } from "../../../redux/actions/addPosts/action";
import { addDefaultPost } from "../../../redux/actions/addDefaultPost/action";

export interface IListOfPostsId {
  id: string | null
}
export const ListOfPostsId = (params: IListOfPostsId) => {
  const currentPage = useSelector((state: RootState) => state.pagination.currentPage);
  const posts = useSelector((state: RootState) => state.addPosts.posts);
  const defaultPost = useSelector((state: RootState) => state.addDefaultPosts.defaultPost);
  const searchText = useSelector((state: RootState) => state.search.searchText);
  const sortCheck = useSelector((state: RootState) => state.sortCheck.sortCheck);
  const dispatch = useDispatch();

  const requestGetInPostId = async (id:string) => {
    try {
      const RESULT = await inGetPostsId(id);
      if (RESULT) {
        dispatch(addPosts(RESULT))
        dispatch(addDefaultPost(RESULT))
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
  const sortAndSearch = (sortBy: string, sortTerm: boolean | null, searchBy: string, searchTerm: string): any => {
    console.log(defaultPost)
    let newArray = defaultPost.map((item:any) => ({ ...item }));
    if (sortBy && sortTerm !== null) {
      newArray.sort((a: any, b: any) => {
        if (sortTerm) {
          if (a[sortBy] < b[sortBy]) {
            return -1;
          }
          if (a[sortBy] > b[sortBy]) {
            return 1;
          }
        } else {
          if (a[sortBy] < b[sortBy]) {
            return 1;
          }
          if (a[sortBy] > b[sortBy]) {
            return -1;
          }
        }
        return 0;
      });
    }

    if (searchBy && searchTerm) {
      return newArray.filter((item: any) =>
        item[searchBy]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return newArray;
  }
  useEffect(() => {
    console.log(sortCheck)
    const RESULT = sortAndSearch("title", sortCheck, "title", searchText)
    if (RESULT) {
      handleSetPage(0)
      dispatch(addPosts(RESULT));
    }
  }, [sortCheck,searchText])
  useEffect(() => {
    handleScrollToTop()
  }, [currentPage])
  useEffect(() => {
    if (params.id) {
      requestGetInPostId(params.id)
    }
  }, [params.id])
  useEffect(() => {
    handleSetPage(0)
    return () => {
      dispatch(addPosts([]))
      dispatch(addDefaultPost([]))
      dispatch(increasePage());
    }
  }, [])
  return (
    <div className="ListOfPosts">
      <ListOfPostsSearch />
      <ListOfPostsBar currentPage={currentPage} handleSetPage={handleSetPage} posts={posts} />
      {posts.length > 10 && <ListOfPostsPagination handleSetPage={handleSetPage} currentPage={currentPage} posts={posts} />}
    </div>
  );
};
