import {Card } from "react-bootstrap";
import "../styles/ListOfPostsBarItemComments.css";
import { ListOfPostsBarItemCommentsItem } from "./ListOfPostsBarItemCommentsItem";
export const ListOfPostsBarItemComments = () => {

  return (
    <Card className="ListOfPostsBarItemComments">
      <Card.Body>
        <Card.Title>List of comments</Card.Title>
        <div className="ListOfPostsBarItemComments__List">
        <ListOfPostsBarItemCommentsItem/>
        <ListOfPostsBarItemCommentsItem/>
        <ListOfPostsBarItemCommentsItem/>
        </div>
      </Card.Body>
    </Card>
  );
};
