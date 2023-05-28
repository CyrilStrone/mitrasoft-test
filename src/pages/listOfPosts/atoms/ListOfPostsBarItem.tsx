import { Button, Card } from "react-bootstrap";
import "../styles/ListOfPostsBarItem.css";
import Avatar from '../../../assets/listOfPosts/avatar.jpg'
export const ListOfPostsBarItem = () => {

  return (
    <Card className="ListOfPostsBarItem">
      <Card.Img src={Avatar} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go comments</Button>
      </Card.Body>
    </Card>
  );
};
