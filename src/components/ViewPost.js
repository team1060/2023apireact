import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getArticleById, getComments } from './api';
import CommentInput from './CommentInput';

function ViewPort() {
    let { id } = useParams();

    const [postData, setPostData] = useState(null)
    const [commentData, setCommentData] = useState(null)
    const [deleteMessage, setDeleteMessage] = useState(null)
    useEffect(() => {
        const articlePost = async () => {
            try {
                const post = await getArticleById(id);
                setPostData(post.data);

                const comment = await getComments(id);
                setCommentData(comment.data);
                console.log(comment.data);
            } catch (error) {
                console.error("error : " + error);
            }
        }
        articlePost();
    }, [id, deleteMessage])

    // if (!postData) {
    //     return "데이터가 없음"
    // }
    const commentDel = async (id) => {
        try {
            delComment(id)
            setDeleteMessage("성공적으로 댓글이 삭제되었습니다.")
        } catch (error) {
            console.error("댓글 삭제 에러 : " + error);
            setDeleteMessage("댓글이 삭제 중 오류 발생")
        }
    }

    const addNewComment = async (newComment) => {
        // alert(newComment)
        try {
            await postComment(id, newComment) // articleId, nickname, body
            setDeleteMessage("성공적으로 댓글이 추가되었습니다")
        } catch (error) {
            console.error("댓글 삭제 에러 : " + error);
            setDeleteMessage("댓글이 추가 중 오류 발생")
        }
    }

    return (
        <>
            제목 : {postData.title} <br></br>
            내용 : {postData.content}

            <hr />
            <h4>댓글</h4>

            <ul className='commList'>
                {
                    commentData?.map((item, i) => {
                        return (
                            <li key={i}>
                                <p>{item.nickname}</p>
                                <span className="btn" onClick={() => { commentDel(item.id) }}></span>
                            </li>
                        )
                    })
                }
            </ul>

            <hr />
            <h4> 댓글입력 </h4>
            <CommentInput onAddComent={addNewComment} />

            <div className="tost">
                {deleteMessage}
            </div>
        </>
    )
}

// function ViewPort({listData}) {
//     let {id} = useParams();

//     // let item = listData.find(function (item) {
//     //     return item.id == id
//     // })

//     let item = listData.find((item) => item.id == id)

//     if (listData.length == 0) {
//         return "자료없음"
//     }


//     return (
//         <>
//             {item.title} / {item.content}
//             <div><a href="/">홈으로</a></div>
//         </>
//     )
// }

export default ViewPort;