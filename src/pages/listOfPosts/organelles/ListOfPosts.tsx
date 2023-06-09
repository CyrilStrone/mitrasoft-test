import "../styles/ListOfPosts.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ListOfPostsBar } from "../molecules/ListOfPostsBar";
import { ListOfPostsPagination } from "../molecules/ListOfPostsPagination";
import { ListOfPostsSearch } from "../molecules/ListOfPostsSearch";
import { inGetPosts, inGetPostsId } from "../logics/getPosts";
import { RootState } from "../../../redux/store";
import { removePagination, setPagination } from "../../../redux/actions/pagination/action";
import { setAddDefaultPosts, setAddPosts } from "../../../redux/actions/addPosts/action";
import { Loader } from "../../../ui/loader/organelles/Loader";
import { setPostsCheck } from "../../../redux/actions/postsCheck/actions";

export interface IListOfPosts {
  id?: string | null
}
export const ListOfPosts = (params: IListOfPosts) => {
  const currentPagination = useSelector((state: RootState) => state.pagination.currentPagination);
  const posts = useSelector((state: RootState) => state.addPosts.posts);
  const postsCheck = useSelector((state: RootState) => state.postsCheck.postsCheck);
  const defaultPosts = useSelector((state: RootState) => state.addPosts.defaultPosts);
  const searchText = useSelector((state: RootState) => state.search.searchText);
  const sortCheck = useSelector((state: RootState) => state.sortCheck.sortCheck);
  const dispatch = useDispatch();
  const requestGetInPost = async () => {
    try {
      const RESULT = await inGetPosts();
      if (RESULT) {
        setTimeout(() => {
          dispatch(setAddPosts(RESULT));
        }, 1000);
        dispatch(setAddDefaultPosts(RESULT))
        dispatch(setPostsCheck(true))
      } else {
        dispatch(setPostsCheck(false))
      }
    } catch (error) {
      dispatch(setPostsCheck(false))
      console.log(error)
    }
  }
  const requestGetInPostId = async (id: string) => {
    try {
      const RESULT = await inGetPostsId(id);
      if (RESULT) {
        setTimeout(() => {
          dispatch(setAddPosts(RESULT));
        }, 1000);
        dispatch(setAddDefaultPosts(RESULT))
        dispatch(setPostsCheck(true))
      } else {
        dispatch(setPostsCheck(false))
      }
    } catch (error) {
      dispatch(setPostsCheck(false))
      console.log(error)
    }
  }
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleSetPagination = (page: number) => {
    dispatch(setPagination(page));
  };
  const sortAndSearch = (sortBy: string, sortTerm: boolean | null, searchBy: string, searchTerm: string): any => {
    let newArray = defaultPosts.map((item: any) => ({ ...item }));
    if (sortTerm !== null) {
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
    if (searchTerm) {
      return newArray.filter((item: any) =>
        item[searchBy]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return newArray;
  }

  useEffect(() => {
    if (defaultPosts && defaultPosts.length !== 0) {
      const RESULT = sortAndSearch("title", sortCheck, "title", searchText)
      if (RESULT && RESULT.length !== 0) {
        dispatch(setPostsCheck(true))
        dispatch(removePagination())
        dispatch(setAddPosts(RESULT));
      } else {
        dispatch(setPostsCheck(false))
      }

    }
  }, [sortCheck, searchText])
  useEffect(() => {
    handleScrollToTop()
  }, [currentPagination])
  useEffect(() => {
    if (params.id) {
      requestGetInPostId(params.id);
    } else {
      requestGetInPost()
    }
  }, [params])
  return (
    <div className="ListOfPosts">
      <ListOfPostsSearch />
      {postsCheck ? posts.length !== 0 ? <>
        <ListOfPostsBar idUser={params.id} currentPagination={currentPagination} posts={posts} />
        {posts.length > 10 && <ListOfPostsPagination handleSetPagination={handleSetPagination} currentPagination={currentPagination} posts={posts} />}</> : <Loader />
        : <>No posts</>
      }
    </div>
  );
};
