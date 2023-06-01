import "../styles/DetailsPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { inGetUsersId } from "../logics/getUser";
import { DetailsPageUser } from "../molecules/DetailsPageUser";
import { addUserInfo, removeUserInfo } from "../../../redux/actions/userInfo/actions";
import { RootState } from "../../../redux/store";
import { Button } from "react-bootstrap";
import { Loader } from "../../../ui/loader/organelles/Loader";
import { setPage } from "../../../redux/actions/pagination/action";
import { addDefaultPost } from "../../../redux/actions/addDefaultPost/action";
import { addPosts } from "../../../redux/actions/addPosts/action";

export const DetailsPage = () => {
  const navigate = useNavigate()
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);
  const dispatch = useDispatch();
  const { id } = useParams();

  const requestGetInUserId = async (id: string) => {
    try {
      const RESULT = await inGetUsersId(id);
      if (RESULT) {
        setTimeout(() => {
          dispatch(addUserInfo(RESULT))
        }, 1000);
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleClick = async () => {
    const RESULT1 = await dispatch(setPage(0));
    if (RESULT1) {
      const RESULT2 = await dispatch(addDefaultPost([]));
      if (RESULT2) {
        const RESULT3 = await dispatch(addPosts([]));
        if (RESULT3) {
          navigate('/ListOfPosts')
        }
      }
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
      <Button onClick={handleClick}>Назад</Button>
      {userInfo ?
        <DetailsPageUser userInfo={userInfo} /> :
        <Loader />
      }
    </div>
  );
};
