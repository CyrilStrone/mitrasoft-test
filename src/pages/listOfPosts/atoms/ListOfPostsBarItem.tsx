import "../styles/ListOfPostsBarItem.css";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ListOfPostsBarItemComments } from "./ListOfPostsBarItemComments";
import Avatar from '../../../assets/listOfPosts/avatar.jpg'
import { RootState } from "../../../redux/store";
import { closeComments, openComments } from "../../../redux/actions/commentOpen/actions";

export interface IListOfPostsBarItem {
  id: any
  userId?: any
  title?: string
  body?: string
}
export const ListOfPostsBarItem = (params: IListOfPostsBarItem) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openCommentsId = useSelector((state: RootState) => state.comments.openCommentsId);

  const handleOpenComments = () => {
    if (openCommentsId === params.id) {
      dispatch(closeComments());
    } else {
      dispatch(openComments(params.id));
    }
  };
  
  useEffect(() => {
    return () => {
      dispatch(closeComments());
    }
  }, [])
  return (
    <Card className="ListOfPostsBarItem">
      <Card className="ListOfPostsBarItem__User">
        {params.userId && <Card.Img src={Avatar} onClick={() => navigate(`/DetailsPage/${params.userId}`)} />}
        <Card.Body>
          <Card.Title>{params?.title}</Card.Title>
          <Card.Text>
            {params?.body}
          </Card.Text>
          <Button variant="primary" onClick={handleOpenComments}>Go comments</Button>
        </Card.Body>
      </Card>
      {openCommentsId === params.id && <ListOfPostsBarItemComments id={params.id} />}
    </Card>
  );
};
