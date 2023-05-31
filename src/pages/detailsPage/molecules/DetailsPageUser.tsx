import "../styles/DetailsPageUser.css";
import Avatar from '../../../assets/listOfPosts/avatar.jpg'
import { Card } from "react-bootstrap";
import { ListOfPosts } from "../../listOfPosts/organelles/ListOfPosts";

export interface IDetailsPageUser {
    id: any
}
export const DetailsPageUser = (params: IDetailsPageUser) => {
    return (
        <Card className="DetailsPageUser">
            {params.id}
            <Card className="DetailsPageUser__User">
                <Card.Img src={Avatar} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <ListOfPosts id={0} />
        </Card>
    );
};
