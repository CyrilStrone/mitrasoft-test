import { Pagination } from "react-bootstrap";
import "../styles/ListOfPostsPagination.css";

export interface IListOfPostsPagination {
    currentPage: number
    handleSetPage: (page: number) => void
    posts:any
}
export const ListOfPostsPagination = (params: IListOfPostsPagination) => {
    let active = params.currentPage;
    let items = [];
    for (let number = 1; number <= params.posts.length / 10; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={()=>{params.handleSetPage(number)}}>
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
