import {
  removeAddDefaultPosts,
  removeAddPosts,
} from "../../redux/actions/addPosts/action";
import { removePagination } from "../../redux/actions/pagination/action";
import { removePostCommentsCheck } from "../../redux/actions/postCommentsCheck/actions";
import { removePostsCheck } from "../../redux/actions/postsCheck/actions";
import { removeSearchText } from "../../redux/actions/searchText/action";
import { removeSideBarOpen } from "../../redux/actions/sideBarOpen/actions";
import { removeSortCheck } from "../../redux/actions/sortCheck/actions";
import { removeUserInfo } from "../../redux/actions/userInfo/actions";
import { removeUserInfoCheck } from "../../redux/actions/userInfoCheck/actions";

export const navigateRemove = async (
  link?: string,
  dispatch?: any,
  navigate?: any
) => {
  const RESULT1 = await dispatch(removeAddPosts());
  if (RESULT1) {
    const RESULT2 = await dispatch(removeAddDefaultPosts());
    if (RESULT2) {
      const RESULT3 = await dispatch(removeUserInfo());
      if (RESULT3) {
        dispatch(removeUserInfoCheck());
        dispatch(removePagination());
        dispatch(removeSearchText());
        dispatch(removeSortCheck());
        dispatch(removeSideBarOpen());
        dispatch(removePostCommentsCheck());
        dispatch(removePostsCheck());
        dispatch(removeSideBarOpen());
        link && navigate(link);
      }
    }
  }
};
