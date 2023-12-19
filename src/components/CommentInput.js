import { useState } from "react";

function CommentInput({onAddComent}) {

    const [nickname, setNickname] = useState('');
    const [body, setBody] = useState('');

    const handleAddComment = () => {
        // alert("입력")

        // 
        const newComment = {nickname, body}
        onAddComent(newComment) // 부모에게 자료를 전송
        setNickname('')
        setBody('')
    }

    return (
        <>
        <input type="text" name="nickname" id="" placeholder="nickname" onChange={(e) => {setNickname(e.target.value)}}/>
        <input type="text" name="body" id="" placeholder="body" onChange={(e) => {setBody(e.target.value)}}/>
        <div onClick={handleAddComment}>댓글 입력</div>

        <br />
        {nickname} / {body} 
        </>
    )
}

export default CommentInput;