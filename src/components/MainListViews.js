import { useEffect, useState } from "react";
import { getArticles } from "./api";

function MainListView() {
    const [listData, setListData] = useState([])
    // const [articleData, setArticleData] = useState([]);
    const callApi = async () => {
        try {
            // const articles = await getArticles();
            const articles = await getArticles();
            console.log(articles);
            setListData(articles.data)
        } catch (error) {
            console.error("에러 : " + error);
        }
    }
    // const callApi = async () => {
    //   try {
    //     const request = await axios.get("http://localhost:8081/api/articles")
    //     console.log(request.data);
    //     setArticleData(request.data);
    //   } catch (error) {
    //     console.log("error : " + error);
    //   }
    // }
    useEffect(() => {
        callApi()
    }, [])
    // useEffect(() => {
    //   callApi()
    // }, []
    // )

    return (
        <>
            {
                listData?.map(function (item, i) {
                    return (
                        <li key={i}><a href={`/articles/${item.id}`}>{item.title}</a></li>
                    )
                })
            }
        </>
    )

    // return (
    //     <>
    //         {
    //             listData.map((item, i) => {
    //                 return (
    //                     <li key={i}><a href={`/article/${item.id}`}>{item.title}</a></li>
    //                 )
    //             })
    //         }
    //     </>
    // )
}

export default MainListView;