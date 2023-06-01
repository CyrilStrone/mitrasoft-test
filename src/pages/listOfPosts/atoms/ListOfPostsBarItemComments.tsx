import "../styles/ListOfPostsBarItemComments.css";
import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListOfPostsBarItemCommentsItem } from "./ListOfPostsBarItemCommentsItem";
import { inGetCommentsId } from "../logics/getComments";
import { RootState } from "../../../redux/store";
import { addComment, clearComments } from "../../../redux/actions/comments/actions";
import { Loader } from "../../../ui/loader/organelles/Loader";

export interface IListOfPostsBarItemComments {
    id: any
}
export const ListOfPostsBarItemComments = (params: IListOfPostsBarItemComments) => {
    const dispatch = useDispatch();
    const comments = useSelector((state: RootState) => state.commentList.comments);

    const requestGetInCommentsId = async (id: string) => {
        try {
            const RESULT = await inGetCommentsId(id);
            if (RESULT) {
                setTimeout(() => {
                    dispatch(addComment(RESULT))
                }, 1000);

            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (params.id) {
            requestGetInCommentsId(params.id)
        }
    }, [params.id])
    useEffect(() => {
        return () => {
            dispatch(clearComments())
        }
    }, [])
    return (
        <Card className="ListOfPostsBarItemComments">
            <Card.Body>
                <Card.Title>List of comments</Card.Title>
                <div className="ListOfPostsBarItemComments__List">
                    {(comments && comments.length > 0) ? comments.map((e: any, id: number) =>
                        <ListOfPostsBarItemCommentsItem key={id} email={e?.email} body={e?.body} />
                    ) : <Loader />}
                </div>
            </Card.Body>
        </Card>
    );
};
