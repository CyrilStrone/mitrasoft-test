import "../styles/DetailsPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { inGetUsersId } from "../logics/getUser";
import { DetailsPageUser } from "../molecules/DetailsPageUser";
import { addUserInfo, removeUserInfo } from "../../../redux/actions/userInfo/actions";
import { RootState } from "../../../redux/store";

export const DetailsPage = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);
  const dispatch = useDispatch();
  const { id } = useParams();

  const requestGetInUserId = async (id: string) => {
    try {
      const RESULT = await inGetUsersId(id);
      if (RESULT) {
        dispatch(addUserInfo(RESULT))
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (id) {
      requestGetInUserId(id)
    }
  }, [id])
  useEffect(() => {
    return () => {
      dispatch(removeUserInfo())
    }
  }, [])
  return (
    <div className="DetailsPage">
      <DetailsPageUser userInfo={userInfo} />
    </div>
  );
};
