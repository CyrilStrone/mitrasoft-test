import { Card } from "react-bootstrap";
import "../styles/ListOfPostsBarItemCommentsItem.css";
export const ListOfPostsBarItemCommentsItem = () => {

  return (
    <Card className="ListOfPostsBarItemCommentsItem">
      <Card.Body>
        <Card.Title>Header</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
