import "../styles/ListOfPostsBarItemComments.css";
import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListOfPostsBarItemCommentsItem } from "./ListOfPostsBarItemCommentsItem";
import { inGetCommentsId } from "../logics/getComments";
import { RootState } from "../../../redux/store";
import { setComments, removeComments } from "../../../redux/actions/comments/actions";
import { Loader } from "../../../ui/loader/organelles/Loader";
import { setPostCommentsCheck } from "../../../redux/actions/postCommentsCheck/actions";

export interface IListOfPostsBarItemComments {
    id: any
}
export const ListOfPostsBarItemComments = (params: IListOfPostsBarItemComments) => {
    const dispatch = useDispatch();
    const comments = useSelector((state: RootState) => state.comments.comments);
    const postCommentsCheck = useSelector((state: RootState) => state.postCommentsCheck.postCommentsCheck);
    const requestGetInCommentsId = async (id: string) => {
        try {
            const RESULT = await inGetCommentsId(id);
            if (RESULT) {
                setTimeout(() => {
                    dispatch(setComments(RESULT))
                }, 1000);
                dispatch(setPostCommentsCheck(true))
            } else {
                dispatch(setPostCommentsCheck(false))
            }
        } catch (error) {
            dispatch(setPostCommentsCheck(false))
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
            dispatch(removeComments())
        }
    }, [])
    return (
        <Card className="ListOfPostsBarItemComments">
            <Card.Body>
                <Card.Title>List of comments</Card.Title>
                <div className="ListOfPostsBarItemComments__List">
                    {postCommentsCheck ? (comments && comments.length > 0) ? comments.map((e: any, id: number) =>
                        <ListOfPostsBarItemCommentsItem key={id} email={e?.email} body={e?.body} />
                    ) : <Loader /> : <>No comments</>}
                </div>
            </Card.Body>
        </Card>
    );
};
