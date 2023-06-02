import "../styles/DetailsPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { inGetUsersId } from "../logics/getUser";
import { DetailsPageUser } from "../molecules/DetailsPageUser";
import { setUserInfo } from "../../../redux/actions/userInfo/actions";
import { RootState } from "../../../redux/store";
import { Button } from "react-bootstrap";
import { Loader } from "../../../ui/loader/organelles/Loader";
import { setUserInfoCheck } from "../../../redux/actions/userInfoCheck/actions";
import { navigateRemove } from "../../../ui/functions/navigateRemove";

export const DetailsPage = () => {
  const navigate = useNavigate()
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);
  const userInfoCheck = useSelector((state: RootState) => state.userInfoCheck.userInfoCheck);
  const dispatch = useDispatch();
  const { id } = useParams();

  const requestGetInUserId = async (id: string) => {
    try {
      const RESULT = await inGetUsersId(id);
      if (RESULT) {
        setTimeout(() => {
          dispatch(setUserInfo(RESULT))
        }, 1000);
        dispatch(setUserInfoCheck(true))
      } else {
        dispatch(setUserInfoCheck(false))
      }
    } catch (error) {
      console.log(error)
      dispatch(setUserInfoCheck(false))
    }
  }

  useEffect(() => {
    if (id) {
      requestGetInUserId(id)
    }
  }, [id])
  return (
    <div className="DetailsPage">
      <Button onClick={() => navigateRemove("/ListOfPosts", dispatch, navigate)}>Назад</Button>
      {userInfoCheck ? userInfo ?
        <DetailsPageUser userInfo={userInfo} /> :
        <Loader /> : <>No user</>
      }
    </div>
  );
};
