import "../styles/ListOfPostsBarItem.css";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from '../../../assets/listOfPosts/avatar.jpg'
import { ListOfPostsBarItemComments } from "./ListOfPostsBarItemComments";
import { RootState } from "../../../redux/store";
import { closeComments, openComments } from "../../../redux/actions/commentOpen/actions";

export interface IListOfPostsBarItem {
  id: any
  userId?: any
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
  console.log(params.userId)
  return (
    <Card className="ListOfPostsBarItem">
      <Card className="ListOfPostsBarItem__User">
        {params.userId == null && <Card.Img src={Avatar} onClick={() => navigate(`/DetailsPage/:${params.id}`)} />}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handleOpenComments}>Go comments</Button>
        </Card.Body>
      </Card>
      {openCommentsId === params.id && <ListOfPostsBarItemComments id={params.id} />}
    </Card>
  );
};
