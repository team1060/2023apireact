import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { postArticle } from "./api";

function NewPost() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: '', content: '' })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postArticle(formData);
            // const response = await axios.post('http://192.168.0.81:8081/api/articles', formData)
            if (response.status === 200) {
                console.log('글작성 성공');
                alert('글작성 성공')
                navigate('/')
            } else {
                console.error('글작성 실패');
                alert('글작성 실패')
            }
        } catch (error) {
            throw error;
        }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div> 제목 : <input type="text" name="title" placeholder="제목" onChange={handleChange} value={formData.title} /></div>
                <div> 내용 : <input type="text" name="content" placeholder="내용" onChange={handleChange} value={formData.content} /></div>
                <input type="submit" value="글작성"></input>
            </form>
        </>
    )
}

export default NewPost;