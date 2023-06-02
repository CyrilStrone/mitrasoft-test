import {
  removeAddDefaultPosts,
  removeAddPosts,
} from "../../redux/actions/addPosts/action";
import { removeComments } from "../../redux/actions/comments/actions";
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
        const RESULT4 = await dispatch(removeSearchText());
        if (RESULT4) {
          const RESULT5 = await dispatch(removeSortCheck());
          if (RESULT5) {
            dispatch(removeComments());
            dispatch(removeUserInfoCheck());
            dispatch(removePagination());
            dispatch(removeSideBarOpen());
            dispatch(removePostCommentsCheck());
            dispatch(removePostsCheck());
            dispatch(removeSideBarOpen());
            link && navigate(link);
          }
        }
      }
    }
  }
};
