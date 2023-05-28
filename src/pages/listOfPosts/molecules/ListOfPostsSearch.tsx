import { Button, FloatingLabel, Form } from "react-bootstrap";
import "../styles/ListOfPostsPagination.css";

export const ListOfPostsSearch = () => {

    return (
        <div className="ListOfPostsSearch">
            <FloatingLabel
                controlId="floatingTextarea"
                label="Search"
            >
                <Form.Control placeholder="Enter to search" />
            </FloatingLabel>
            <Button variant="outline-primary"><i className="bi bi-arrow-down-up"></i></Button>
            <Button variant="outline-dark"><i className="bi bi-x"></i></Button>
        </div >
    );
};
