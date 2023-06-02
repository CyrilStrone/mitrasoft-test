import "../styles/DetailsPageUser.css";
import Avatar from '../../../assets/listOfPosts/avatar.jpg'
import { Card } from "react-bootstrap";
import { ListOfPosts } from "../../listOfPosts/organelles/ListOfPosts";

export interface IDetailsPageUser {
    userInfo: any
}
export const DetailsPageUser = (params: IDetailsPageUser) => {
    return (
        <Card className="DetailsPageUser">
            <Card className="DetailsPageUser__User">
                <Card.Img src={Avatar} />
                <Card.Body>
                    <Card.Title>{params.userInfo?.name}</Card.Title>
                    <Card.Text>
                        {params.userInfo?.email}
                    </Card.Text>
                    <Card.Text>
                        {params.userInfo?.username}
                    </Card.Text>
                    <Card.Text>
                        {params.userInfo?.phone}
                    </Card.Text>
                </Card.Body>
            </Card>
            <ListOfPosts id={params.userInfo?.id} />
        </Card>
    );
};
