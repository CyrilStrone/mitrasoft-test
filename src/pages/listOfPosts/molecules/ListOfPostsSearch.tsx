import { Button, FloatingLabel, Form, ToggleButton } from "react-bootstrap";
import "../styles/ListOfPostsSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { clearSearchText, setSearchText } from "../../../redux/actions/search/action";
import { useEffect } from "react";
import { setSortCheck } from "../../../redux/actions/sortCheck/actions";
import { addPosts } from "../../../redux/actions/addPosts/action";
import { setPage } from "../../../redux/actions/pagination/action";

export const ListOfPostsSearch = () => {
    const dispatch = useDispatch();
    const defaultPost = useSelector((state: RootState) => state.addDefaultPosts.defaultPost);
    const searchText = useSelector((state: RootState) => state.search.searchText);
    const sortCheck = useSelector((state: RootState) => state.sortCheck.sortCheck);
    const goExit = () => {
        dispatch(setPage(0));
        dispatch(clearSearchText())
        dispatch(setSortCheck(null))
        dispatch(addPosts(defaultPost))
    }
    useEffect(() => {
        return () => {
            goExit()
        }
    }, [])
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
