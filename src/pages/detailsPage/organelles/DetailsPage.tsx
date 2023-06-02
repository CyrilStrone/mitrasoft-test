import "../styles/DetailsPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { inGetUsersId } from "../logics/getUser";
import { DetailsPageUser } from "../molecules/DetailsPageUser";
import { setUserInfo, removeUserInfo } from "../../../redux/actions/userInfo/actions";
import { RootState } from "../../../redux/store";
import { Button } from "react-bootstrap";
import { Loader } from "../../../ui/loader/organelles/Loader";

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
          dispatch(setUserInfo(RESULT))
        }, 1000);
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleClick = async () => {
    navigate('/ListOfPosts')
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
