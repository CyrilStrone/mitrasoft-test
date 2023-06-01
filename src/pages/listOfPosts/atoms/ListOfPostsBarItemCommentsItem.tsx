import { Card } from "react-bootstrap";
import "../styles/ListOfPostsBarItemCommentsItem.css";

export interface IListOfPostsBarItemCommentsItem {
  email: string
  body: string
}
export const ListOfPostsBarItemCommentsItem = (params: IListOfPostsBarItemCommentsItem) => {
  return (
    <Card className="ListOfPostsBarItemCommentsItem">
      <Card.Body>
        <Card.Title>{params?.email}</Card.Title>
        <Card.Text>
          {params?.body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
