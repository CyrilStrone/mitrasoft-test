import { useEffect } from "react";
import { DetailsPageUser } from "../molecules/DetailsPageUser";
import "../styles/DetailsPage.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setUserId } from "../../../redux/actions/userId/actions";

export const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(setUserId(id));
  }, [dispatch, id]);

  return (
    <div className="DetailsPage">
      <DetailsPageUser id={id} />
    </div>
  );
};
