import "../styles/ListOfPostsPagination.css";
import { Pagination } from "react-bootstrap";

export interface IListOfPostsPagination {
    currentPagination: number
    handleSetPagination: (page: number) => void
    posts: any
}
export const ListOfPostsPagination = (params: IListOfPostsPagination) => {
    let active = params.currentPagination + 1;
    let items = [];
    for (let number = 1; number <= params.posts.length / 10; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => { params.handleSetPagination(number - 1) }}>
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
