import "../styles/DetailsPageUser.css";
import Avatar from '../../../assets/listOfPosts/avatar.jpg'
import { Card } from "react-bootstrap";
import { ListOfPostsBarItemComments } from "../../listOfPosts/atoms/ListOfPostsBarItemComments";

export interface IDetailsPageUser {
    id: any
}
export const DetailsPageUser = (params: IDetailsPageUser) => {

    return (
        <Card className="DetailsPageUser">
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
            {params.id && <ListOfPostsBarItemComments id={params.id} />}
        </Card>
    );
};
