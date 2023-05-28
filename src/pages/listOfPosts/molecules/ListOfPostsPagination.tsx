import { Pagination } from "react-bootstrap";
import "../styles/ListOfPostsPagination.css";

export const ListOfPostsPagination = () => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div className="ListOfPostsPagination">
            <Pagination>{items}</Pagination>
        </div>
    );
};
