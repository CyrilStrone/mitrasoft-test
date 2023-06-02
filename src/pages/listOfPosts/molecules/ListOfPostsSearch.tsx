import "../styles/ListOfPostsSearch.css";
import { Button, FloatingLabel, Form, ToggleButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { removeSearchText, setSearchText } from "../../../redux/actions/searchText/action";
import { removeSortCheck, setSortCheck } from "../../../redux/actions/sortCheck/actions";
import { setAddPosts } from "../../../redux/actions/addPosts/action";
import { removePagination } from "../../../redux/actions/pagination/action";

export const ListOfPostsSearch = () => {
    const dispatch = useDispatch();
    const defaultPosts = useSelector((state: RootState) => state.addPosts.defaultPosts);
    const searchText = useSelector((state: RootState) => state.search.searchText);
    const sortCheck = useSelector((state: RootState) => state.sortCheck.sortCheck);
    const goExit = () => {
        console.log("defaultPosts",defaultPosts)
        dispatch(removePagination())
        dispatch(removeSearchText())
        dispatch(removeSortCheck());
        dispatch(setAddPosts(defaultPosts))
    }
    return (
        <div className="ListOfPostsSearch">
            <FloatingLabel
                controlId="floatingTextarea"
                label="Search"
            >
                <Form.Control placeholder="Enter to search" value={searchText} onChange={(event: any) => { dispatch(setSearchText(event.target.value)) }} />
            </FloatingLabel>
            <ToggleButton
                className="mb-2"
                id="toggle-check"
                type="checkbox"
                variant={sortCheck == null ? 'outline-primary' : sortCheck ? 'outline-success' : 'outline-danger'}
                checked={sortCheck == null ? false : sortCheck}
                value="1"
                onChange={(e) => dispatch(setSortCheck(sortCheck == null ? true : !sortCheck))}
            >
                <i className="bi bi-arrow-down-up"></i>
            </ToggleButton>
            <Button onClick={goExit} variant="outline-dark"><i className="bi bi-x"></i></Button>
        </div >
    );
};
